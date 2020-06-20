<template>
  <div>
    <navigation />
    <section class="main-section">
      <reservation :id="$route.params.id" />
    </section>
    <site-footer />
  </div>
</template>

<script>
import Reservation from '~/components/Reservation.vue'
import Navigation from '~/components/Navigation.vue'
import SiteFooter from '~/components/SiteFooter.vue'

export default {
  components: {
    Reservation,
    Navigation,
    SiteFooter
  }
}
</script>

<style scoped>
  .main-section {
    padding: 48px 108px;
  }
</style>
