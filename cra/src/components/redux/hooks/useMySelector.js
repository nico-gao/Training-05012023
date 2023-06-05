import {useContext, useEffect, useState} from "react"
import { ReduxContext } from "../ReduxContext"

const useMySelector = (selector) => {
  const store = useContext(ReduxContext);
  const [selectedState, setSelectedState] = useState(selector(store.getState()))
  useEffect(()=>{
    store.subscribe(() => {
      setSelectedState(selector(store.getState()))
    })
  }, [])
  return selectedState;
}

export default useMySelector