import path from 'node:path'
import process from 'node:process'

/**
 * 项目根路径
 * @descrition 结尾不带/
 */
export function getRootPath() {
  return path.resolve(process.cwd())
}

/**
 * 项目src路径
 * @param srcName src目录名称(默认: "src")
 * @descrition 结尾不带斜杠
 */
export function getSrcPath(srcName = 'src') {
  return path.resolve(getRootPath(), srcName)
}
