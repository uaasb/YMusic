import { account } from "./login"
import { UserProfile } from "./user"

export interface qr {
    qrurl: string,
    qrimg: string
}
export interface logindata {
    code: number,
    message?: string,
    cookie?: string,
    profile?: UserProfile,
    account?: account
}
export interface login {
    profile?: UserProfile,
    account?: account
}