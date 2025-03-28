declare type Merge<T, R> = Omit<Omit<T, Extract<keyof T, keyof R>> & R, never>

// 不能合并为`P in keyof T | keyof R` 会导致`?`标识符消失
declare type DeepMerge<T, R> = Merge<
  {
    [K in keyof T]: K extends keyof R ? DeepMergeUtil<K, T, R> : T[K];
  },
  {
    [K in keyof R]: K extends keyof T ? DeepMergeUtil<K, T, R> : R[K];
  }
>
declare type DeepMergeUtil<K, T, R> = R[K] extends Record<string, unknown>
  ? T[K] extends Record<string, unknown>
    ? DeepMerge<T[K], R[K]>
    : R[K]
  : R[K]

// eslint-disable-next-line @typescript-eslint/no-empty-interface
declare interface LocalComponentMap {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
declare interface RemoteComponentMap {}
