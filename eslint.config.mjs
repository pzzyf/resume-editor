import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
  },
})
