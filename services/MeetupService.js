import fetchJsonp from 'fetch-jsonp'

const baseURL = 'https://api.meetup.com/IbagueJS'

let params = {
  mode: 'no-cors'
};

export default {

  getOrganizers(page) {
    return fetchJsonp(
      `${baseURL}/members?&sign=true&photo-host=public&role=leads&page=${page}`
    ).then(response => {
      return response.json()
    }).catch( error => console.warn(error))
  }
}
