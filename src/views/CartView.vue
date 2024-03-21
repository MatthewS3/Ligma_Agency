<template>
  <div class="Cart">
    <h1>This is the cart page</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Agent Image</th>
          <th scope="col">Agent CodeName</th>
          <th scope="col">Agent Tier</th>
          <th scope="col">Agent Role</th>
          <th scope="col">Agent Price</th>
        </tr>
      </thead>
      <tbody v-if="cart">
        <tr v-for="item in cart" :key="item.agentID">
          <td>{{ item.agentImage }}</td>
          <td>{{ item.agentCodeName }}</td>
          <td>{{ item.agentTier }}</td>
          <td>{{ item.agentRole }}</td>
          <td>{{ item.agentPrice }}</td>
          <button class="delete" @click="deleteFromCart(item.orderID)">del</button>
        </tr>
      </tbody>
    </table>
    <button @click="clearCart()">clear cart</button>
  </div>
</template>
<script>
import { getRole } from '@/service/userAuthenticate';
export default {
  name: "CartView",
  data() {
    return {
      userID: ""
    }
  },
  methods: {
    deleteFromCart(id) {
      this.$store.dispatch('deleteFromCart', id);
    },
    clearCart() {
      this.$store.dispatch('clearCart')
    }

  },
  computed: {
    cart() {
      return this.$store.state.cart
    },
  },
  mounted() {
    let user = getRole()
    if (user) {
      this.userID = user.userID
    }
    this.$store.dispatch('fetchCart', this.userID)
  }
}
</script>
<style></style>


