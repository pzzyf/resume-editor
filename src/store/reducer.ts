export function reducer(state, action) {
  switch (action.type) {
    case 'INIT_STATE': {
      state.cld = action.payload
      break
    }
  }
}
