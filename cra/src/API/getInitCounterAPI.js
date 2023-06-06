const getInitCounterAPI = async () => {
  return new Promise((res, rej)=>{
    setTimeout(() => {
      rej(100)
    }, 1000)
  })
}

export default getInitCounterAPI