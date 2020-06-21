import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', (value) => {
  if (value) {
    return moment(String(value)).format('MMMM DD YYYY')
  }
})

Vue.filter('stayDuration', (start, end) => {
  if (!start || !end) {
    return
  }
  const duration = moment(end).diff(moment(start), 'days')
  if (duration === 1) {
    return `${duration} night`
  }
  return `${duration} nights`
})
