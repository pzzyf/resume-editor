export function Right() {
  return (
    <div className="flex gap-4">
      { [4, 5, 6].map(item => (
        <div key={item}>{item}</div>
      )) }
    </div>
  )
}
