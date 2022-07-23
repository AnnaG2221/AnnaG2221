

function ArrayMap(props) {
  const result = props.arrayMap.map(item => <div>{item}</div>)
  return (
    <div>
      {result}
    </div>
  )
}

export default ArrayMap