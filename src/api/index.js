import axios from 'axios'

export default {
  getGirlGroups() {
    return axios({
      url: '/api/idols/girlgroups.json',
    }).then(response => response.data)
  },

  getIdolDetail({ idolKey }) {
    return axios({
      url: `/api/idols/${idolKey}.json`
    }).then(response => response.data)
  },
}
