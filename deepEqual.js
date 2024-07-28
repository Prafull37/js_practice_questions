/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */

function isArray(value){
    return Array.isArray(value);
  }

function isObject(value){
  
    return !isArray(value)&&typeof value === "object" && value !==null;
  }
  

  
  
  function size(value){
    if(typeof value === "string" || isArray(value)) return value.length;
    if(isObject(value)) return Object.keys(value).length;
    return 0;
  }
  

  
  function shouldDeepCompare(valueA,valueB){
    return  size(valueA) === size(valueB)
  }
  
  export default function deepEqual(valueA, valueB) {
    if(valueA === valueB){
        return true
    }   

      if(typeof valueA === "object" && typeof valueB ==="object" && shouldDeepCompare(valueA,valueB)){
        
        if((isArray(valueA)&&isArray(valueB)) || (isObject(valueA)&&isObject(valueB))){
            const entriesA=Object.entries(valueA);
            return entriesA.every(([k,v])=>{
                return deepEqual(v,valueB[k])
            })
        }
        return false
      }
      return false;
  }

  console.log(deepEqual([], {}))