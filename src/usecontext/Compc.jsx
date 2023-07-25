import React from 'react'
import { useContext1 } from './Apptwo'

const Compc = () => {
  return (
    <div>
      <useContext1.Consumer>
        {
          value => {
            return <div> <h1 className='hint'>Use Context Hook</h1> the user name is ...{value}</div>
          }
        }
      </useContext1.Consumer>
    </div>
  )
}

export default Compc
