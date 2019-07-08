export const SET_USER = 'SET_USER'

const initialState = {
  user: {
    firstName: 'John',
    lastName: 'Doe',
    token: 'Basic xxxxx-xxxxx-xxxxx-xxxxx'
  },
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_USER:
      /* Add implementation to set the user */

    default:
      return state
  }
}
