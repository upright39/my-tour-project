import React from 'react'
import Tour from './Tour'

const Tours = ({ myToursProp, myFirstTourDeleteProp }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {myToursProp.map((item) => {
          return (
            <Tour
              key={item.id}
              {...item}
              mySecondTourDeleteProp={myFirstTourDeleteProp}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Tours
