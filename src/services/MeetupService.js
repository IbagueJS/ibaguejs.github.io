import fetchJsonp from 'fetch-jsonp'

const baseURL = process.env.VUE_APP_MEETUP_URL

export default {
  getUpcomingEvents(page) {
    return fetchJsonp(
      `${baseURL}/events?&sign=true&photo-host=public&page=${page}&desc=true&status=upcoming`
    ).then(response => response.json())
  },
  getPreviousEvents(page) {
    return fetchJsonp(
      `${baseURL}/events?&sign=true&photo-host=public&page=${page}&desc=true&status=past`
    ).then(response => response.json())
  },
  getOrganizers(page) {
    return fetchJsonp(
      `${baseURL}/members?&sign=true&photo-host=public&role=leads&page=${page}`
    ).then(response => response.json())
  }
}
