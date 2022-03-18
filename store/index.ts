import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)


interface RootState {}
export const store = new Store<RootState>({})

export const createStore = (): Store<RootState> => {
    return store
}
  
export const actions = {
    nuxtServerInit: () => {}
}


// export const store = new Vuex.Store({
//     //
// })