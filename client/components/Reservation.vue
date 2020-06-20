<template>
  <div class="find-reservation-container">
    <p v-if="$fetchState.error">
      Could not load reservation {{ id }}
    </p>
    <p v-else>
      Your reservation in {{ reservation.city }}<br>
      Location {{ reservation.confirmationCode }}<br>
      Dates {{ reservation.checkInDate }}-{{ reservation.checkOutDate }}<br>
      Confirmation code {{ reservation.confirmationCode }}<br>
      <img :src="reservation.cityImage">
    </p>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  async fetch () {
    this.reservation = await this.$http.$get(`http://localhost:3000/reservations/${this.id}`)
  },
  data () {
    return {
      reservation: {}
    }
  },
  fetchOnServer: false
}
</script>
<style scoped>
</style>
