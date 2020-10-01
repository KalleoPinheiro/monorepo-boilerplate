import React, { useEffect, useState } from 'react'

const Main = () => {
  const [state, setState] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('/api')
      const data = response.json()

      setState(data)
    }
    getData()
  }, [])

  return <div>{state ? <h1>{state.message}</h1> : <h1>teste</h1>}</div>
}

export default Main
