import {useContext} from "react"
import { ReduxContext } from "../ReduxContext";

const useMyDispatch = () => {
  const store = useContext(ReduxContext);
  return store.dispatch;
}


export default useMyDispatch;