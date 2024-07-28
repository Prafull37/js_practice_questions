/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
    let timeout;
    return function(...args){
      if(timeout) clearTimeout(timeout);
      timeout= setTimeout(()=>{
        return func.call(this,...args)
      },wait)
    }
  }