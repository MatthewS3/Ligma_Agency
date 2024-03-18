<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="agents">
    <h1 class="LG"><span class="MA">L</span>IGMA <span class="US">A</span>GENTS</h1>
    <div class="row">
      <div class="col">
        <br>
        <input type="text" placeholder="Search Agent by name" class="form-control">
      </div>
      <div class="col">
        <br>
        <button class="btn-s">Sorting by price</button>
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
          <p class="card-text text-black bg-gradient bg-dark-subtle p-3">
            Role : {{ agent.agentRole }}
          </p>
          <p class="card-text text-black bg-gradient bg-dark-subtle p-3">
            Amount : {{ agent.agentPrice }}
          </p>
          <p class="card-text text-black bg-gradient bg-dark-subtle p-1">
            Gender : {{ agent.agentGender }}
          </p>
          <p class="card-text text-black bg-gradient bg-dark-subtle p-3">
            Status : {{ agent.agentStatus }}
          </p>
          <p class="card-text text-black bg-gradient bg-dark-subtle p-3">
            Rank : {{ agent.agentTier }}
          </p>
          <!-- <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
            Category: {{ agent.Category }}
          </p> -->
        </template>
        <template #cardLink>
          <router-link class="viewLink" :to="{ name: 'agent', params: { id: agent.agentID } }">View Agent</router-link>

        </template>
      </CardView>
    </div>
    <div class="row" v-else>
      <SpinnerView />
    </div>
  </div>
</template>

<script>
import CardView from '@/components/CardView.vue';
export default {
  name: 'AgentsView',
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

<style>
.viewLink {
  color: #000;
  text-decoration: none;
  font-size: larger;
  font-weight: bold;
}

.viewLink:hover {
  color: #000;
}

.LG {
  color: #ddd;
  letter-spacing: 2px;
}

.MA,
.US {
  color: #FF003C;
  letter-spacing: 2px;
}

.form-control {
  border: #FF003C solid 3px;
  border-radius: 15px 0;
  color: #000;
  font-weight: bold;
}

.col {
  flex: auto
}

.btn-s {
  background-color: #000;
  width: 150px;
  font-weight: bold;
  height: 40px;
  border: #666 solid 2px;
  border-radius: 15px 0;
  color: #ddd;
  transition: 0.5s ease-in-out;
}

.btn-s:hover {
  transform: scaleX(0.9);
  background-color: #000;
  border: #FF003C solid 2px;
  border-radius: 0 15px;
  color: #ddd;
}
</style>