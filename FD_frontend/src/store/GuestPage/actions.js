export const SEARCH_REQUEST = 'SEARCH_REQUEST'

export const searchSubmit = (key, value) => {
  return {
    type: SEARCH_REQUEST,
    key,
    value,
  }
}
