/**
 * @param {Function} func
 * @return {Function}
 */
/**
 * @param {Function} func
 * @return {Function}
 */
export default function curry(func) {
    return function curried(...args){
      if(args.length >= func.length){
        return func.call(this,...args.slice(0,func.length))
      }
      return (tempArgs)=> tempArgs === undefined
        ? curried.call(this, ...args)
        : curried.call(this, ...args, tempArgs);
      
    }
  }


function multiply(a,b){
    console.log(a,b)
    return a*b;
}

const curried = curry(multiply);
console.log(curried(7)(3))