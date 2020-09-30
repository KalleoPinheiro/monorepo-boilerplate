import React, { useCallback, useEffect, useState } from 'react'

const Main = () => {
  const [state, setState] = useState(null)

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then(setState)
  }, [])

  const test = useCallback(() => {
    return 'ok'
  }, [])

  return <div>{state ? <h1>{state.message}</h1> : <h1>teste</h1>}</div>
}

export default Main
