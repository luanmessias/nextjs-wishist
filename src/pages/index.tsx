import React from 'react'
import getApiData from '@services/api'

const Home = (): React.ReactElement => {
  const { data, error } = getApiData('products')

  if (error) return <h1>Something went wrong!</h1>
  if (!data) return <h1>Loading...</h1>

  console.log(data)

  return (
    <div>
      <h1>Hello Next</h1>
    </div>
  )
}

export default Home
