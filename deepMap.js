/**
 * @param {any} value
 * @param {Function} fn
 * @returns any
 */

const double = (x) => x * 2;

function isArray(value){
    return Array.isArray(value)
  }
  
  function isObject(value){
    return !isArray(value) && value !== null && typeof value === "object";
  }

  export default function deepMap(value, fn) {
      if(isArray(value)){
        return value.map((item)=>deepMap(item,fn))
      }
      if(isObject(value)){
        
        return Object.from(Object.entries(value).map(([k,v])=>[k,deepMap(v,fn)]))
      }
      return fn(value)
  }

  console.log(deepMap({ foo: 3, bar: [7, 5] }, double))