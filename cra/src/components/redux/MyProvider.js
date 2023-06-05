

import React from 'react'
import { ReduxContext } from './ReduxContext'

const MyProvider = ({children, store}) => {
 
  return (
    <ReduxContext.Provider value={store}>
      {children}
    </ReduxContext.Provider>
  )
}

export default MyProvider;