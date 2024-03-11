import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
import router from '@/router'

const LigmaURL = 'https://ligma-agency.onrender.com'

export default createStore({
  state: {
    users: null,
    user: null,
    agents: null,
    agent: []
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setAgents(state, value) {
      state.agents = value
    },
    setAgent(state, value) {
      state.agent = value
    },
  },
  actions: {
    async addUser(context, payload) {
      try {
        let msg = await axios.post(`${LigmaURL}user`, payload)
        if (msg) {
          context.dispatch('fetchUser')
          sweet ({
            title: 'User Added',
            text: 'You Have Successsfully Registered',
            icon: 'success',
            timer: 2000
          })
          router.push({name: 'login'})
        }
      }catch (e) {
        sweet ({
          title: 'ERROR',
          text: 'Please Try Again',
          icon: 'error',
          timer: 2000
        })
      }
    },
    async fetchUsers(context) {
      try {
        let results = (await axios.get(`${LigmaURL}users`)).data
        if (results) {
          context.commit('setUsers', results)
        }
      }catch (e) {
        sweet ({
          title: 'ERROR',
          text: 'An ERROR Occurred When Retrieving The Users',
          icon: 'error',
          timer: 2000
        })
      }
    },
    async fetchUser(context) {
      try {
        let result = (await axios.get(`${LigmaURL}users/${payload}`)).data
        if (result) {
          context.commit('setUser', result)
        }else {
          sweet({
            title: 'Retrieving a Single User',
            text: 'User Was Found',
            icon: 'info',
            timer: 2000
          })
        }
      }catch (e) {
        sweet ({
          title: 'ERROR',
          text: 'User Was Not Found',
          icon: 'error',
          timer: 2000
        })
      }
    },
    async editUser(context, payload) {
      try {
        let msg = await axios.patch(`${LigmaURL}users/${payload}`, payload)
        if (msg) {
          context.dispatch('fetchUsers')
          sweet ({
            title: 'User Edited',
            text: 'The User Has Been Edited',
            icon: 'success',
            timer: 2000
          })
        }
      }catch (e) {
        sweet ({
          title: 'ERROR',
          text: 'An ERROR Occurred When Updating a User',
          icon: 'success',
          timer: 2000
        })
      }
    },
    async deleteUser(context, payload) {
      try {
        console.log("payload: ", payload)
        let msg = await axios.delete(`${LigmaURL}users/${payload}`)
        if (msg) {
          context.dispatch('fetchUsers')
          sweet ({
            title: 'User DELETED',
            text: 'The User Has Been Successfully DELETED',
            icon: 'success',
            timer: 2000
          })
        }
      }catch (e) {
        sweet ({
          title: 'ERROR',
          text: 'An ERROR Occurred When Deleting A User.',
          icon: "error",
          timer: 2000
        })
      }
    },
    async deleteAgent(context, payload) {
      try {
        console.log("payload: ", payload)
        let msg  = await axios.delete(`${LigmaURL}agents/${payload}`)
        if (msg) {
          context.dispatch('fetchAgents')
          sweet ({
            title: 'Agent DELETED',
            text: 'The Agent Has Been Successfully DELETED',
            icon: 'succcess',
            timer: 2000
          })
        }
      }catch (e) {
        sweet ({
          title: 'ERROR',
          text: 'An ERROR Occurred When Deleting a Agent',
          icon: "error",
          timer: 2000
        })
      }
    },
  },
  modules: {
  }
})
