export const GET_RESULTS_REQUEST = 'GET_RESULTS_REQUEST'
export const GET_RESULTS_SUCCESS = 'GET_RESULTS_SUCCESS'
export const GET_RESULTS_FAILED = 'GET_RESULTS_FAILED'
export const GO_TO_TARGET_ARCHIVE = 'GO_TO_TARGET_ARCHIVE'

export const getSearchResults = (key, value) => {
  return {
    type: GET_RESULTS_REQUEST,
    key,
    value,
  }
}

export const getResultsSuccess = (resultList) => {
  return {
    type: GET_RESULTS_SUCCESS,
    resultList,
  }
}

export const getResultsFailed = () => {
  return {
    type: GET_RESULTS_FAILED,
  }
}

export const goToTargetArchive = (resultId, archiveOwnerNickname) => {
  return {
    type: GO_TO_TARGET_ARCHIVE,
    resultId,
    archiveOwnerNickname
  }
}
  
