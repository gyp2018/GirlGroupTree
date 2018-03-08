import axios from 'axios'

export default {
  getIdolDetail({ idolKey }) {
    return axios({
      url: `/api/idols/${idolKey}.json`
    }).then(response => response.data)
  },
}
