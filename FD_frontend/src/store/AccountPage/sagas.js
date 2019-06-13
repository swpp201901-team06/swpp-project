import { takeEvery, take, put, fork } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { callUrl, callUrlImg } from '../sagas'
import * as actions from './actions'

const backendUrl = 'http:/127.0.0.1:8000/'
const userUrl = `${backendUrl}user/detail/`

export function* modifyAccount({ email, pw, confirmpw, nickname, publicStatus }) {
  try {
    yield callUrl('PUT', userUrl+nickname, { 

export function* watchModifyAccountRequest() {
  yield takeEvery(actions.EDIT_ACOUNT_REQUEST, modifyAccount)
}

export default function* () {
  yield fork(watchGetPostReviewDetailRequest)
}
