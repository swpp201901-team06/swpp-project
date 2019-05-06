import React from 'react'
require('jest-localstorage-mock')

test('should save to localStorage', () => {
  const KEY = 'test_key'
  const VAL = 'test_val'

  dispatch(action.update(KEY, VAL))
  expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VAL)
  expect(localStorage.__STORE__[KEY]).toBe(VAL)
  expect(Object.keys(localStorage.__STORE__).length).toBe(1)
})
