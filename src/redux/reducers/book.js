import { initialState } from '../store'

const bookReducer = (state = initialState.book, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default bookReducer

// PUSH IS FORBIDDEN IN A PURE FUNCTION
// SPLICE IS FORBIDDEN IN A PURE FUNCTION
