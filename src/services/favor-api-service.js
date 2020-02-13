import TokenService from '../services/token-service'
import config from '../config'

const FavorApiService = {
  getFavors() {
    return fetch(`${config.API_ENDPOINT}/favors`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getFavor(favor_id) {

    return fetch(`${config.API_ENDPOINT}/favors/${favor_id}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postFavor(favor_requester,favor_title,favor_description,favor_hoursrequired,favor_category,favor_status) {
    return fetch(`${config.API_ENDPOINT}/favors`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        favor_requester,
        favor_title,
        favor_description,
        favor_hoursrequired,
        favor_category,
        favor_status
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default FavorApiService
