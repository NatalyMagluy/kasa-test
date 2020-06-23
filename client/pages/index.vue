<template>
  <div>
    <navigation />
    <section class="main-section">
      <reservations-list class="reservations-list" />
      <div class="image-container">
        <img src="https://cdn.pixabay.com/photo/2016/01/19/18/00/city-1150026_960_720.jpg">
      </div>
    </section>
    <site-footer />
  </div>
</template>

<script>
import ReservationsList from '~/components/ReservationsList.vue'
import Navigation from '~/components/Navigation.vue'
import SiteFooter from '~/components/SiteFooter.vue'

export default {
  components: {
    ReservationsList,
    Navigation,
    SiteFooter
  }
}
</script>

<style scoped>
  .main-section {
    padding: 10px 108px;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: flex-end;
  }

  .image-container {
    width: 912px;
    height: 560px;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .image-container img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
  }

  .reservations-list {
    position: absolute;
    top: 34px;
    left: 108px;
    z-index: 3;
  }
</style>
