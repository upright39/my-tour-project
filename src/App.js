import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tour from './Tour'
import Tours from './Tours'
const url = 'https://course-api.netlify.app/api/react-tours-project'

const App = () => {
  const [tour, setTour] = useState([])
  const [loading, setLoading] = useState(true)

  const myDeleteFunction = (id) => {
    const mydelete = tour.filter((item) => item.id !== id)

    setTour(mydelete)
  }

  const myData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setTour(data)
    setLoading(false)
  }

  useEffect(() => {
    myData()
  }, [])

  if (loading) {
    return <Loading />
  }
  if (tour.length === 0) {
    return (
      <div className="title">
        <h2>You can click to refresh</h2>
        <button className="btn" onClick={myData}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div>
      <Tours myToursProp={tour} myFirstTourDeleteProp={myDeleteFunction} />
    </div>
  )
}
export default App
