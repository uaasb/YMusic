import { defineStore } from "pinia";
import { ref,computed } from "vue";
export const useFold=defineStore('open',()=>{
    const isOpen=ref(false)
    const getDifOpen=computed(()=>{
        isOpen.value= !isOpen.value
        return isOpen
    })
    return  {isOpen,getDifOpen}
})