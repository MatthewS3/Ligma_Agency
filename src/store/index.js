import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
import router from '@/router'

const LigmaURL = 'https://ligma-agency.onrender.com/'

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
    setOneAgent(state, value) {
      state.agent = value
    },
    setlogin(state, value) {
      state.user = value
    }
  },
  actions: {
    async addUser(context, payload) {
      try {
        let {msg} = await axios.post(`${LigmaURL}user`, payload)
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
        let {results} = (await axios.get(`${LigmaURL}users`)).data
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
    async fetchUser(context, payload) {
      try {
        let {result} = (await axios.get(`${LigmaURL}users/${payload}`)).data
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
        let {msg} = await axios.patch(`${LigmaURL}users/${payload}`, payload)
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
        let {msg} = await axios.delete(`${LigmaURL}users/${payload}`)
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
        let {msg}  = await axios.delete(`${LigmaURL}agents/${payload}`)
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
    async login(context, payload) {
      try {
        const {msg, token, result} = (await axios.post(`${LigmaURL}users/login`, payload)).data
        if (result) {
          context.commit('setUser', {msg, result})
          cookies.set('LegitUser', {
            msg, token, result
          })

          sweet ({
            title: msg,
            text: `Welcome Back,
            ${result?.UserFirstName} ${result?.UserLastName}`,
            icon: 'success',
            timer: 2000
          })
            router.push({name: 'home'})
        }else {
          sweet ({
            title: 'info',
            text: 'text of login',
            icon: 'info',
            timer: 2000
          })
        }
      }catch (e) {
        sweet ({
          title: 'ERROR',
          text: 'FAILED To Login',
          icon: 'error',
          timer: 2000
        })
      }
    },
    async fetchAgents(context) {
      try {
        let {results} = (await axios.get(`${LigmaURL}agents`)).data
        if (results) {
          context.commit('setAgents', results)
        }
      }catch (e) {
        sweet ({
          title: 'ERROR',
          text: 'Agents Were Not Found',
          icon: 'error',
          timer: 2000
        })
      }
    },
    async fetchAgent(context, payload) {
      try {
        let {result} = (await axios.get(`${LigmaURL}agents/${payload}`)).data
        if (result) {
          context.commit('setOneAgent', result)
        }else {
          sweet ({
            title: 'Retrieving a single Agent',
            text: 'FAILED To Retrieve An Agents Details',
            icon: 'info',
            timer: 2000
          })
        }
      }catch (e) {
        sweet ({
          title: 'ERROR',
          text: 'An Agent was Not Found',
          icon: 'error',
          timer: 2000
        })
      }
    },
    async addAgents(context, payload) {
      try {
        let {msg} = (await axios.post(`${LigmaURL}addAgents/`, payload)).data
        if (msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'User Added',
            text: "You have successfully registered!",
            icon: "success",
            timer: 2000
          })

          router.push({name: 'login'})
        }
      }catch (e) {
        sweet({
          title: 'Error',
          text: 'Please try again later',
          icon: "error",
          timer: 2000
        }) 
      }
    }
  },
  modules: {
  }
})
