export function Left() {
  return (
    <div className="flex gap-4">
      { [1, 2, 3].map(item => (
        <div key={item}>{item}</div>
      )) }
    </div>
  )
}
