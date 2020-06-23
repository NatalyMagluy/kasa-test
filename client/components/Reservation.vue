<template>
  <div>
    <section v-if="$fetchState.error">
      Could not load reservation {{ id }}
    </section>
    <section v-else>
      <h1 class="reservation-title">
        Your reservation in {{ reservation.city }}
      </h1>
      <div class="reservation-container">
        <img :src="reservation.cityImage" class="city-image">
        <div class="reservation-details">
          <div class="details-row">
            <span class="details-title">Location</span>
            <span class="details-value">{{ reservation.propertyName }}</span>
            <span class="details-value">{{ reservation.unitName }}</span>
          </div>
          <div class="details-row">
            <span class="details-title">Dates</span>
            <span class="details-value">
              {{ reservation.checkInDate | formatDate }} - {{ reservation.checkOutDate | formatDate }}
              ({{ reservation.checkInDate | stayDuration(reservation.checkOutDate) }})
            </span>
          </div>
          <div class="details-row">
            <span class="details-title">Confirmation code</span>
            <span class="details-value">{{ reservation.confirmationCode }}</span>
          </div>
        </div>
      </div>
      <div class="ratings">
        Rate your experience!
      </div>
    </section>
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
    this.reservation = await this.$http.$get(`/reservations/${this.id}`)
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
  .city-image {
    width: 448px;
    height: 274.1px;
    border-radius: 4px;
    margin-right: 24px;
  }

  .reservation-container {
    display: flex;
    flex-direction: row;
    margin-top: 48px;
  }

  .reservation-title {
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 32px;

    /* Primary/Kasa Black */
    color: #2D2D2D;
  }

  .details-row {
    /* Roboto/16pt Regular */
    font-family: Roboto;
    font-size: 16px;
    line-height: 24px;
    color: #2D2D2D;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

  .details-row .details-title {
    font-weight: bold;
  }

  .ratings {
    /* Primary/White */
    background: #FFFFFF;
    /* Utility/20% Grey */
    border: 1px solid rgba(45, 45, 45, 0.2);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 24px;
    height: 149px;
    width: 448px;
    margin-top: 24px;
  }
</style>
