/**
 * @param {Number} start - The first number of the resultant array.
 * @param {Number} end - The value where the resultant array will stop at and not contain it.
 * @param {Number} step - The step / increment value of each number in the array.
 * @return {Array<Number>} Returns the array with the sequence of numbers in the specified range.
 */
export default function rangeRight(start = 0, end, step = 1) {
    if(end===undefined){
      start = 0
      end=start
    }
  
    if(start === end) return [];
  
    if(end<start && step===1){
      step = -1
    }
  
    const legnth = (end-start)/(step||1);
    const items = []
    for(let i=legnth-1;i>=0;i--){
      items.push(
        start + i*step
      )
    }
  
    return items
  
  }