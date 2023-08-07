import { defineStore } from "pinia";
import { useLogin, useLoginStatus, useLoginQrKey, useLoginQrCreateKey, useLoginQrLogin, loginStatus, loginUserDetail } from "@/api/api";
import type { UserProfile } from "@/models/user";
import type { logindata, login } from '@/models/qr'
import { ElMessage } from 'element-plus'
export const useUserStore = defineStore("user", {
    state: () => {
        return {
            token: '',
            cookie: '',
            showLogin: false,
            profile: {} as UserProfile,
            qrkey: '',
            qrUrl: '',
            qrImg: '',
            login: {} as logindata,
            loginCode: 0,
            loginExpired: false,
            centerDialogVisible: false,
            data: {} as login,
            timer: {} as NodeJS.Timer
        }
    },
    getters: {
        isLogin: state => {
            return state.profile?.userId > 0
        }
    },
    actions: {
        async login(phone: string, password: string) {
            const res = await useLogin(phone, password)
            if (res.code == 200) {
                this.token = res.token
                this.cookie = res.cookie
                document.cookie = res.cookie
                localStorage.setItem("USER-TOKEN", this.token)
                localStorage.setItem("USER-COOKIE", this.cookie)
                this.checkLogin()
            }
        },
        async checkLogin() {
            const { data } = await useLoginStatus()
            if (data.code === 200) {
                this.profile = data.profile
                this.showLogin = false
            }

        },
        async qr() {
            const { data } = await useLoginQrKey()
            console.log(data.unikey)
            this.qrkey = data.unikey
            const { data: d } = await loginStatus()
            console.log(d)
            const { data: qrdata } = await useLoginQrCreateKey(data.unikey)
            console.log(qrdata)
            this.qrUrl = qrdata.qrurl
            this.qrImg = qrdata.qrimg
        },
        async qrLogin() {

            let logdata = {} as logindata

            if (!this.qrkey || !this.qrUrl) {
                return
            }

            this.timer = setInterval(async () => {
                logdata = await useLoginQrLogin(this.qrkey)
                this.loginData = logdata.code
                if (localStorage.getItem('profile')) {
                    ElMessage({
                        message: '已登录',
                        type: 'success',
                    })
                    return
                }
                if (this.loginData == 803) {
                    clearInterval(this.timer)
                    this.cookie = logdata.cookie
                    localStorage.setItem('cookie', logdata.cookie)
                    const { data: d } = await loginStatus(logdata.cookie)
                    console.log(d)
                    this.profile = d.profile
                    localStorage.setItem('profile', JSON.stringify(d.profile))
                    this.centerDialogVisible = false
                    ElMessage({
                        message: '登陆成功',
                        type: 'success',
                    })
                }
                if (this.loginData == 800) {
                    clearInterval(this.timer)
                    this.loginExpired = true
                }
            }, 4000)
        }
    }
})
