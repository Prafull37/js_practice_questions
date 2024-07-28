/**
 * @param {Object|Array} valA
 * @param {Object|Array} valB
 * @returns Object|Array
 */

export function isArray(val){
    return Array.isArray(valA)
  }
  
  
  export function isPlainObject(val){
    if(valA===null){
      return false;
    }
    const proto = Object.getPrototypeOf(valA);
    return proto === Object.prototype;
  }
  
  export default function deepMerge(valA, valB) {
    let value = {};
    let valBMap = new Map(Object.entries(valB));
  
    for(let k in valA){
      if(valBMap.has(k) && isArray(valA[k]) && isArray(valB[k])){
        value[k] = [...valA[k],valBMap[k]]
      }else if(valBMap.has(k) && isPlainObject(valA[k]) && isPlainObject(valB[k])){
        value[k] = {...valA[k],...valBMap[k]}
      }else {
        value[k] = valB[k] || valA[k]
      }
      valBMap.delete(k)
    }
  
    const entr = Object.fromEntries(valBMap.entries())
    const val= {...value,...entr}
    return val
  }


  console.log(deepMerge({ foo: 2, bar: 3 }, { qux: 4 }))