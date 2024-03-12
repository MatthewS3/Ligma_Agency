<template>
  <div class="container44">
    <div class="row">
      <h2 class="display-4">Users</h2>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-success" @click="addUser()">Add</button>
      </div>
    </div>
    <div class="row">
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email address</th>
            <th>User Password</th>
            <th>User Cell</th>
            <th>User role</th>
            <th>
              Action
            </th>
          </tr>
        </thead>
        <tbody v-if="users">
          <tr v-for="user in users" :key="user.userID">
            <td>
              {{ user.userID }}
            </td>
            <td>
              {{ user.userFirstName }}
            </td>
            <td>
              {{ user.userLastNama }}
            </td>
            <td>
              {{ user.userEmail }}
            </td>
            <td>
              {{ user.userPassword }}
            </td>
            <td>
              {{ user.userContact }}
            </td>
            <td>
              {{ user.userRole }}
            </td>
            <td class="d-flex justify-content-between">
              <button class="btn btn-success" @click="editUser(user)">Edit</button>
              <button class="btn btn-success" @click="deleteUser(user)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row">

      <h2 class="display-4">Agents</h2>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-success" @click="addAgent()">Add</button>
      </div>
    </div>
    <div class="row">
      <table>
        <thead>
          <tr>
            <th>Agent ID</th>
            <th>Agent CodeName</th>
            <th>Agent Role</th>
            <th>Agent Price</th>
            <th>
              Action
            </th>
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
              R {{ agent.agentPrice }}
            </td>
            <td class="d-flex justify-content-between">
              <button class="btn btn-success" @click="addAgent">Add</button>
              <button class="btn btn-success" @click="deleteAgent(agent)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
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
  mounted() {
    this.$store.dispatch('fetchUsers')
    this.$store.dispatch('fetchAgents')
  },
  methods: {
    // Method to add a new user
    addUser() {
      this.$store.dispatch('addUser', this.$data);
    },
    // Method to edit a user
    editUser(user) {
      this.$store.dispatch('editUser', user.editedUser);
    },
    // Method to delete a user
    deleteUser(user) {
      this.$store.dispatch('deleteUser', user.userID);
    },
    addAgent(agent) {
      this.$store.dispatch('addAgent', agent.newAgent);
    },
    // Method to edit a user
    editAgent(agent) {
      this.$store.dispatch('editAgent', agent.editAgent);
    },
    // Method to delete a user
    deleteAgent(agent) {
      this.$store.dispatch('deleteAgent', agent.agentID);
    },
    // Similar methods for products
  }
}
</script>

<style></style>