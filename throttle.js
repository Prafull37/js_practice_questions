// not completed
function throttle(func, wait) {
    // your code here
    let  timerId = null;
    return function (...args){
      if(!timerId){
        func.apply(this,args);
        timerId = setInterval(()=>{
            timerId = null
        },wait)
      }
    }
  }
  
  
  let currentTime = 0
  const run = (input) => {
    currentTime = 0
    const calls = []
    const func = (arg) => {
       calls.push(`${arg}@${currentTime}`)
    }
    const throttled = throttle(func, 3)
    input.forEach((call) => {
       const [arg, time] = call.split('@')
       setTimeout(() => throttled(arg), time)
    })
    return calls
  }
  
  
  console.log(run(['A@0', 'B@2', 'C@3'])) // ['A@0', 'C@3']
