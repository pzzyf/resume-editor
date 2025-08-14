export interface State {
  cld?: any
  selectNode?: any
}

export function reducer(draft: any, action: any) {
  switch (action.type) {
    case 'update':
      draft.cld = action.payload
      break
    default:
      break
  }
}
