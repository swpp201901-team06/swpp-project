import { fork, call } from 'redux-saga/effects'
import api from 'services/api'

const req = require.context('.', true, /\.\/.+\/sagas\.js$/)

// Call the backend API
// params:
//   method: one of 'GET', 'POST', 'PUT', 'DELETE'
//   url:    backend URL to call
//   data:   body of request to send to backend API
// return:
//   JSON data of received response
export function* callUrl(method, url, data = {}) {
  try {
    if (localStorage.hasOwnProperty('token')) {
      const email = JSON.parse(localStorage.getItem('email'))
      const password = JSON.parse(localStorage.getItem('password'))
      const credentials = new Buffer(`${email}:${password}`).toString('base64')
      let response
      
      if (method === 'GET' || method === 'DELETE') {
        response = yield call(
          fetch,
          url,
          {
            method,
            headers: {
              Authorization: `Basic ${credentials}`,
              'Content-Type': 'application/json',
            },
          }
        )
      } else if (method === 'POST' || method === 'PUT') {
        response = yield call(
          fetch,
          url,
          {
            method,
            headers: {
              Authorization: `Basic ${credentials}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          }
        )
      } else {
        throw Error('callUrl: invalid method, logged in')
      }
      if (!response.ok) {
        console.log(yield response.json())
        throw Error(response.statusText)
      }
      return yield response.json()
    } else if (method === 'GET') {
      return yield call(api.get, url)
    } else if (method === 'POST') {
      return yield call(api.post, url, data)
    } else if (method === 'PUT') {
      return yield call(api.put, url, data)
    } else if (method === 'DELETE') {
      return yield call(api.delete, url)
    }
    throw Error('callUrl: Invalid method, not logged in')
  } catch (err) {
    console.log(err)
    throw err
  }
}

// Call the backend API with image
// params:
//   method: one of 'GET', 'POST', 'PUT', 'DELETE'
//   url:    backend URL to call
//   data:   body of request to send to backend API in the format of `FormData`
// return:
//   data of received response
export function* callUrlImg(method, url, data = {}) {
  try {

    if (localStorage.hasOwnProperty('token')) {
      const email = JSON.parse(localStorage.getItem('email'))
      const password = JSON.parse(localStorage.getItem('password'))
      const credentials = new Buffer(`${email}:${password}`).toString('base64')
      const response = yield call(
        fetch,
        url,
        {
          method,
          headers: {
            Authorization: `Basic ${credentials}`,
          },
          body: data,
        }
      )
      if (!response.ok) {
        console.log(yield response.json())
        throw Error(response.statusText)
      }
      return yield response.json()
    }
    throw Error('callUrlImg: not logged in')
  } catch (err) {
    console.log(err)
    throw err
  }
}


const sagas = []

req.keys().forEach((key) => {
  sagas.push(req(key).default)
})

export default function* () {
  yield sagas.map(fork)
}
