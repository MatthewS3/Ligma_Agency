<template>
    <div class="container99">
        <div class="row">
            <CardView v-for="agent in $store.state.agent" :key="agent.agentID">
                <template #cardImage>
                    <!-- prodUrl: {{ agent.prodUrl }} -->
                    <img :src="agent.agentImage" class="card-img" />
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
                </template>
            </CardView>
        </div>
    </div>
</template>

<script>
import CardView from '@/components/CardView.vue';
export default {
    components: {
        CardView
    },
    computed: {
        agent() {
            return this.$store.state.agent
        },
    },
    mounted() {
        this.$store.dispatch('fetchAgent', this.$route.params.id);
    }
}
</script>

<style></style>