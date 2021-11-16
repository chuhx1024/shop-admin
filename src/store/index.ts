import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { InjectionKey } from 'vue'

export interface State {
    count: number
}

export const key: InjectionKey<Store<State>> = Symbol('store')

// 创建一个新的 store 实例
const store = createStore<State>({
    state () {
        return {
            count: 99,
        }
    },
    mutations: {
        increment (state) {
            state.count++
        },
    },
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
    return baseUseStore(key)
}

export default store
