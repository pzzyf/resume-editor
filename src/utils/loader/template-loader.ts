export async function templateLoader(src: string) {
  return window.fetch(src)
    .then(res => res.json())
    .catch(null)
}
