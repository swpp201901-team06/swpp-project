import { fork, call } from 'redux-saga/effects'
import api from 'services/api'

const req = require.context('.', true, /\.\/.+\/sagas\.js$/)

export function* callUrl(method, url, data = {}) {
  console.log('callUrl begin')
  console.log(method)
  console.log(url)
  console.log(data)
  try {
    if (localStorage.hasOwnProperty('token')) {
      const email = JSON.parse(localStorage.getItem('email'))
      const password = JSON.parse(localStorage.getItem('password'))
      console.log('callUrl logged in')
      console.log(email)
      console.log(password)
      const credentials = new Buffer(`${email}:${password}`).toString('base64')
      console.log('callUrl credentials')
      console.log(credentials)
      if (method === 'GET' || method === 'DELETE') {
        console.log('callUrl loggedin GET/DELETE')
        return yield call(
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
      }
      console.log('callUrl loggedin POST/PUT')
      return yield call(
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
    } else if (method === 'GET') {
      console.log('callUrl not loggedin GET')
      return yield call(api.get, url)
    } else if (method === 'POST') {
      console.log('callUrl not loggedin POST')
      return yield call(api.post, url, data)
    } else if (method === 'PUT') {
      console.log('callUrl not loggedin PUT')
      return yield call(api.put, url, data)
    } else if (method === 'DELETE') {
      console.log('callUrl not loggedin DELETE')
      return yield call(api.delete, url)
    }
    console.log('callUrl not loggedin other')
    return null
  } catch (err) {
    console.log('callUrl error')
    console.log(err)
    throw err
  }
}

export function* callUrlImg(method, url, data = {}) {
  try {
    if (localStorage.hasOwnProperty('token')) {
      const email = JSON.parse(localStorage.getItem('email'))
      const password = JSON.parse(localStorage.getItem('password'))
      const credentials = new Buffer(`${email}:${password}`).toString('base64')
      if (method === 'GET' || method === 'DELETE') {
        return yield call(
          fetch,
          url,
          {
            method,
            headers: {
              Authorization: `Basic ${credentials}`,
              'content-Type': 'multipart/form-data',
            },
          }
        )
      }
      console.log('callUrlImg POST, PUT')
      return yield call(
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
    } else if (method === 'GET') {
      return yield call(api.get, url)
    } else if (method === 'POST') {
      return yield call(api.post, url, data)
    } else if (method === 'PUT') {
      return yield call(api.put, url, data)
    } else if (method === 'DELETE') {
      return yield call(api.delete, url)
    }
    return null
  } catch (err) {
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
