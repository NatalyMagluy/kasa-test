<template>
  <div class="reservations-container">
    <h1>Your reservations</h1>
    <p v-if="$fetchState.error">
      Could not fetch reservations
    </p>
    <ul v-else>
      <li v-for="reservation of reservations" :key="reservation.confirmationCode">
        <n-link :to="`/${reservation.confirmationCode}`">
          {{ reservation.city }} ({{ reservation.checkInDate }} to {{ reservation.checkOutDate }})
        </n-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async fetch () {
    this.reservations = await this.$http.$get('http://localhost:3000/reservations')
  },
  data () {
    return {
      reservations: {}
    }
  },
  fetchOnServer: false
}
</script>
<style scoped>
</style>
