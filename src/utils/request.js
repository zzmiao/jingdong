import axios from 'axios'
const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      },
      baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/'
    }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
export {
  post
}
