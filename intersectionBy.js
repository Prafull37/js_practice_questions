/**
 * @param {Function} iteratee - The iteratee function to apply to each value.
 * @param {Array[]} arrays - The arrays to perform the intersection on.
 * @returns {Array} - A new array containing the unique values present in all given arrays.
 */
export default function intersectionBy(iteratee, ...arrays) {
    let arrayMap = [];
    for(let i=0;i<arrays.length;i++){
        let obj=new Map();
        arrays[i].forEach((item)=>{
          const value = iteratee(item);
          if(!obj.has(value)){
            obj.set(value,item)
          }  
        })
  
        arrayMap.push(obj)
    }
  
    const firstItem = new Map(arrayMap[0]);
  
    for(let key of firstItem.keys()){
      for(let i=0;i<arrayMap.length;i++){
        if(!arrayMap[i].has(key) && firstItem.has(key)){
          firstItem.delete(key)
        }
      }
  
    }
  
    let valueArr = [];
    for(let value of firstItem.values()){
      valueArr.push(value)
    }
    return valueArr
  }


  const arr1 = [2.1, 1.2];
    const arr2 = [2.3, 3.4];
    const arr3 = [4.5, 2.6];
    const iteratee = Math.floor;

    console.log(intersectionBy(iteratee, arr1, arr2, arr3))