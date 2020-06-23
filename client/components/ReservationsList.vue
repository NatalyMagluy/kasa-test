<template>
  <div class="reservations-container">
    <h1 class="title">
      Find your reservation
    </h1>
    <p class="description">
      You can search by providing the city or the confirmation code of your reservation.
    </p>
    <section class="search-container">
      <!-- this is probably provided by some bootstrapping library
           or can be moved out into a reusable component -->
      <div class="input-with-button">
        <input v-model="searchQuery" type="text">
        <a @click="clearSearchQuery">Clear</a>
      </div>
      <p v-if="state === 'server-error'">
        Connection error
      </p>
      <!-- not the best way to distinguish between not yet loaded data and empty server results -->
      <p v-if="state === 'empty'">
        No reservations found
      </p>
      <section v-if="reservations.length > 0" class="search-results">
        <n-link
          v-for="reservation of reservations"
          :key="reservation.confirmationCode"
          :to="`/${reservation.confirmationCode}`"
          class="search-result"
        >
          <span class="result-city">
            {{ reservation.city }}
          </span>
          <span class="result-details">
            {{ reservation.checkInDate }} to {{ reservation.checkOutDate }}, #{{ reservation.confirmationCode }}
          </span>
        </n-link>
      </section>
      <button class="search-button" @click="search">
        Search
      </button>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchQuery: '',
      reservations: [],
      state: ''
    }
  },
  methods: {
    async search () {
      if (this.searchQuery) {
        this.state = ''
        try {
          this.reservations = await this.$http.$get(`/reservations/search/${this.searchQuery}`)
          if (this.reservations.length === 0) {
            this.state = 'empty'
          }
        } catch { // check exception for more granular error handling
          this.state = 'server-error'
          this.reservations = []
        }
      }
    },
    clearSearchQuery () {
      this.searchQuery = ''
    }
  },
  fetchOnServer: false
}
</script>
<style scoped>
  .reservations-container {
    width: 448px;
    height: 488px;
    /* Primary/Neutral Grey 1 */
    background: #FAFAFA;
    padding: 48px;
  }

  .title {
    /* Lora/32pt Bold */
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;

    /* Primary/Kasa Black */
    color: #2D2D2D;
  }

  .description {
    /* Roboto/18pt Regular */
    font-family: Roboto;
    font-size: 18px;
    line-height: 28px;

    /* Primary/Kasa Black */
    color: #2D2D2D;
    padding: 24px 0;
  }

  .search-container {
    margin: 12px;
  }

  .search-button {
    /* Primary/Kasa Blue 50 */
    background: #2F2A8D;
    border-radius: 4px;
    /* Roboto/16pt Medium */
    font-family: Roboto;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    /* Primary/White */
    color: #FFFFFF;
    height: 48px;
    width: 100%;
    margin-top: 12px;
  }

  .input-with-button {
    display: flex;
    flex-direction: row;
    /* Primary/White */
    background: #FFFFFF;
    border: 1px solid rgba(45, 45, 45, 0.2);
    box-shadow: inset 0px 3px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 8px;
    height: 40px;
  }

  .input-with-button > input {
    border: none;
    flex-grow: 2;
    font-size: 16px;
  }

  .input-with-button > input:focus {
    outline: none;
  }

  .input-with-button > a {
    /* Semantic/Blue 50 */
    color: #150DBD;
    font-size: 16px;
    font-weight: bold;
  }

  .search-results {
    background: #FFFFFF;
    border: 1px solid #D1D1D1;
    box-sizing: border-box;
    border-radius: 4px;
    margin-top: 12px;
  }

  .search-result {
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-bottom: 10px;
    text-decoration: none;
  }

  .search-result:hover {
    background-color: #EAEAEA;
  }

  .search-result:last-of-type {
    margin-bottom: 0;
  }

  .result-city {
    font-family: Roboto;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    /* Primary/Kasa Black */
    color: #2D2D2D;
  }

  .result-details {
    font-family: Roboto;
    font-size: 13px;
    line-height: 20px;
    /* Utility/60% Grey */
    color: rgba(45, 45, 45, 0.6);
  }
</style>
