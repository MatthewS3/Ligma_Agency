<template>
  <div class="row">
    <h1 class="LG"><span class="MA">L</span>IGMA <span class="US">U</span>SERS</h1>
  </div>
  <table class="table table-bordered table-hover table-dark">
    <thead>
      <tr>
        <th>User role</th>
        <th>User ID</th>
        <th>First name</th>
        <th>Last name</th>
        <th>User Cell</th>
        <th>Email address</th>
        <th>User Password</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody v-if="users">
      <tr v-for="user in users" :key="user.userID">
        <td>
          {{ user.userRole }}
        </td>
        <td>
          {{ user.userID }}
        </td>
        <td>
          {{ user.userFirstName }}
        </td>
        <td>
          {{ user.userLastName }}
        </td>
        <td>
          {{ user.userContact }}
        </td>
        <td>
          {{ user.userEmail }}
        </td>
        <td>
          {{ user.userPassword }}
        </td>
        <td><button class="btn1" @click="deleteUser(userID)">Delete</button>
          <button @click="editUser(user.userID)" type="button" class="btn2" data-bs-toggle="modal"
            :data-bs-target="'#exampleModal' + userID">
            edit
          </button>
        </td>
        <!-- Modal -->
        <div class="modal fade" :id="'exampleModal' + userID" tabindex="-1" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <input id="input" type="text" placeholder="FirstName" v-model="userPayload.userFirstName">
                <input id="input" type="text" placeholder="LastName" v-model="userPayload.userLastName">
                <input id="input" type="text" placeholder="Email" v-model="userPayload.userEmail">
                <input id="input" type="text" placeholder="Contact" v-model="userPayload.userContact">
                <input id="input" type="text" placeholder="Role" v-model="userPayload.userRole">

              </div>
              <div class="modal-footer">
                <button type="button" class="btn3" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn4" @click="editSubmit()">Save</button>
              </div>
            </div>
          </div>
        </div>
      </tr>
    </tbody>
  </table>
  <!-- LIGMA AGENTS TABLE -->
  <div class="row">
    <h1 class="LG"><span class="MA">L</span>IGMA <span class="US">A</span>GENTS</h1>
  </div>
  <table class="table table-bordered table-hover table-dark">
    <thead>
      <tr>
        <th>Agent ID</th>
        <th>Agent CodeName</th>
        <th>Agent Role</th>
        <th>Agent Price</th>
        <th>Agent Gender</th>
        <th>Agent Status</th>
        <th>Agent Tier</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody v-if="agents">
      <tr v-for="agent in agents" :key="agent.agentID">
        <td>
          {{ agent.agentID }}
        </td>
        <td>
          {{ agent.agentCodeName }}
        </td>
        <td>
          {{ agent.agentRole }}
        </td>
        <td>
          {{ agent.agentPrice }}
        </td>
        <td>
          {{ agent.agentGender }}
        </td>
        <td>
          {{ agent.agentStatus }}
        </td>
        <td>
          {{ agent.agentTier }}
        </td>
        <td><button class="btn1" @click="deleteAgent(agentID)">Delete</button>
          <button @click="editAgent(agent.agentID)" type="button" class="btn2" data-bs-toggle="modal"
            :data-bs-target="'#exampleModal1' + agentID">
            edit
          </button>
        </td>

        <!-- Button trigger modal -->

        <!-- Modal -->
        <div class="modal fade" :id="'exampleModal1' + agentID" tabindex="-1" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <input id="input" type="text" placeholder="Agent CodeName" v-model="agentPayload.agentCodeName">
                <input id="input" type="text" placeholder="Agent Role" v-model="agentPayload.agentRole">
                <input id="input" type="text" placeholder="Agent Price" v-model="agentPayload.agentPrice">
                <input id="input" type="text" placeholder="Agent Status" v-model="agentPayload.agentStatus">
                <input id="input" type="text" placeholder="Agent Tier" v-model="agentPayload.agentTier">

              </div>
              <div class="modal-footer">
                <button type="button" class="btn3" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn4" @click="editSubmit1()">Save</button>
              </div>
            </div>
          </div>
        </div>
      </tr>
    </tbody>
  </table>



</template>
<script>

export default {
  computed: {
    users() {
      return this.$store.state.users
    },
    agents() {
      return this.$store.state.agents
    }
  },
  data() {
    return {
      userPayload: {
        userID: null,
        userFirstName: "",
        userLastName: "",
        userEmail: "",
        userContact: "",
        userRole: "",
      },
      agentPayload: {
        agentID: null,
        agentCodeName: "",
        agentRole: "",
        agentPrice: "",
        agentStatus: "",
        agentTier: ""
      }
    }
  },
  methods: {

    addUsers() {
      this.$store.dispatch('addUsers')
    },
    deleteUser(userID) {
      this.$store.dispatch('deleteUser', userID)
    },
    editUser(id) {
      this.users.forEach((user) => {
        if (user.userID == +id) {
          this.userFirstName = user.userFirstName
          this.userLastName = user.userLastName
          this.userRole = user.userRole
          this.userEmail = user.userEmail
          this.userContact = user.userContact,

            this.userPayload = {
              userID: user.userID,
              userFirstName: this.userFirstName,
              userLastName: this.userLastName,
              userEmail: this.userEmail,
              userContact: this.userContact,
              userRole: this.userRole
            }
        }
      })
    },
    editSubmit() {
      this.$store.dispatch('editUser', this.userPayload)
      location.reload()
    },
    addAgents() {
      this.$store.dispatch('addAgents')
    },
    deleteAgent(agentID) {
      this.$store.dispatch('deleteAgent', agentID)
    },
    editAgent(id) {
      this.agents.forEach((agent) => {
        if (agent.agentID == +id) {
          this.agentCodeName = agent.agentCodeName
          this.agentRole = agent.agentRole
          this.agentPrice = agent.agentPrice
          this.agentStatus = agent.agentStatus
          this.agentTier = agent.agentTier
  
          this.agentPayload = {
            agentID: agent.agentID,
            agentCodeName: this.agentCodeName,
            agentRole: this.agentRole,
            agentPrice: this.agentPrice,
            agentStatus: this.agentStatus,
            agentTier: this.agentTier
          }
        }
      })
    },
    editSubmit1() {
      this.$store.dispatch('editAgent', this.agentPayload)
      location.reload()
    },
  },
  mounted() {
    this.$store.dispatch('fetchUsers')
    this.$store.dispatch('fetchAgents')
  }
}

</script>
<style>
.LG {
  color: #ddd;
  letter-spacing: 2px;
}

.MA,
.US {
  color: #FF003C;
  letter-spacing: 2px;
}

.btn1 {
  /* margin-top: 20px !important;
  margin-bottom: 20px !important; */
  width: 70px !important;
  height: 30px !important;
  border-radius: 10px !important;
  background-color: #FF003C !important;
  color: #000 !important;
  font-size: 15px !important;
  font-weight: bold !important;
  cursor: pointer !important;
  transition: 0.3s ease-in-out;
}
.btn1:hover {
  transform: scale(0.9);
}

.btn2 {
  /* margin-top: 20px !important;
  margin-bottom: 20px !important; */
  width: 70px !important;
  height: 30px !important;
  border-radius: 10px !important;
  background-color: #ddd !important;
  color: #000 !important;
  font-size: 15px !important;
  font-weight: bold !important;
  cursor: pointer !important;
  transition: 0.3s ease-in-out;

}

.btn2:hover {
  transform: scale(0.9);
}

.btn3 {
  width: 70px !important;
  height: 30px !important;
  border-radius: 10px !important;
  background-color: #ddd !important;
  color: #000 !important;
  font-size: 15px !important;
  font-weight: bold !important;
  cursor: pointer !important;
  transition: 0.3s ease-in-out;
}

.btn3:hover {
  transform: scale(0.9);
}

.btn4 {
  width: 70px !important;
  height: 30px !important;
  border-radius: 10px !important;
  background-color: #FF003C !important;
  color: #000 !important;
  font-size: 15px !important;
  font-weight: bold !important;
  cursor: pointer !important;
  transition: 0.3s ease-in-out;
}

.btn4:hover {
  transform: scale(0.9);
}

#input {
  font-size: 20px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 5px 0;
  background-color: transparent;
  outline: none;
  color: black;

}

#input::placeholder {
  color: gray;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>