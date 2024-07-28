/**
 * @param {Function} iteratee The iteratee invoked per element.
 * @param {...Array} arrays Array from which the elements are all numbers.
 * @return {Array} Returns the new array of combined values.
 */
export default function unionBy(iteratee, ...arrays) {
    // let [firstArray,...restArray] = arrays;
    // let firstArrayIteratee = firstArray.map((item)=>iteratee(item))
    // firstArrayIteratee.forEach((item)=>{
    //   restArray.forEach((array)=>{
    //     const notSameItem= array.filter((itemB)=>{
    //         const valueB= iteratee(itemB);
    //         const doesNotExistAlready = !firstArrayIteratee.includes(valueB)
    //         if(item!==valueB && doesNotExistAlready){
    //             firstArrayIteratee=[...firstArrayIteratee,valueB]
    //             return true
    //         }
    //         return false
    //     });
    //     firstArray=[...firstArray,...notSameItem]
    //   },[])
    // })
    // return firstArray

    const result=[];
    const compare =new Set();
    arrays.forEach((array)=>{
      array.forEach((item)=>{
        const value = iteratee(item)
        if(!compare.has(value)){
          result.push(item);
          compare.add(value)
        }
      })
    })

    return result;
  }

// console.log(unionBy((o) => o.x, [{ x: 1 }], [{ x: 2 }, { x: 1 }]))

const arr1 = [2.1, 1.2];
const arr2 = [2.3, 3.4];
const arr3 = [4.5, 2.6];
const iteratee = Math.floor;

console.log(unionBy(iteratee, arr1, arr2, arr3))