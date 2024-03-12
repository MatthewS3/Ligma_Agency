<template>
  <div class="agents">
    <h1>This is the Agents page</h1>
    <div class="row">
      <div class="col">
        <input type="text" placeholder="Search Agent by name" class="form-control">
      </div>
      <div class="col">
        <button class="btn btn-success">Sorting by price</button>
      </div>
    </div>
    <div class="row" v-if="agents">
      <CardView v-for="agent in agents" :key="agent.agentID">
        <template #cardImage>
          <!-- prodUrl: {{ agent.prodUrl }} -->
          <img :src="agent.agentImage" class="card-image" />
        </template>
        <template #cardTitle>
          <h4 class="card-title">{{ agent.agentCodeName }}</h4>
        </template>
        <template #cardInfo>
          <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
            Role: {{ agent.agentRole }}
          </p>
          <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
            Amount: R{{ agent.agentPrice }}
          </p>
          <!-- <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
            Category: {{ agent.Category }}
          </p> -->
          <router-link :to="{ name: 'agent', params: { agentID: agent.agentID } }">View</router-link>
        </template>
      </CardView>
    </div>
  </div>
</template>

<script>
import CardView from '@/components/CardView.vue';
export default {
  name: 'AgentView',
  components: {
    CardView
  },
  computed: {
    agents() {
      return this.$store.state.agents
    }
  },
  mounted() {
    this.$store.dispatch('fetchAgents')
  }
}
</script>

<style></style>