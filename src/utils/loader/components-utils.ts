import type { LocalComponent, LocalComponentConfig } from 'src/types/components'
import deepClone from 'lodash/cloneDeep'
import { v4 as uuid } from 'uuid'

export function getLocalComponentConfigClone<T extends Record<string, unknown>>(config: LocalComponent, extra?: T): LocalComponentConfig {
  const { module, ...rest } = config
  return deepClone({
    id: uuid(),
    // @ts-expect-error // 防止未定义 类型严格定义会认为`config`必存在
    config: {},
    style: {},
    props: {},
    children: [],
    ...rest,
    ...extra,
  })
}
