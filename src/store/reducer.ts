export function reducer(draft: any, action: any) {
  switch (action.type) {
    case 'update':
      draft.cld = action.payload
      break
    default:
      break
  }
}
