/**
 * @param {Number} start - The first number of the resultant array.
 * @param {Number} end - The value where the resultant array will stop at and not contain it.
 * @param {Number} step - The step / increment value of each number in the array.
 * @return {Array<Number>} Returns the array with the sequence of numbers in the specified range.
 */
export default function range(start = 0, end, step = 1) {

    if(end && start === end) return [];
    if(!end && !start) return [];

    let [finalStart, finalEnd] = end ? [start,end] : [0,start]
    let finalStep = !end && step!==0 && finalEnd<finalStart ? -1 :step
    const length  = (finalEnd - finalStart )/ (finalStep ||1)   

   const results = []
   for(let i=0;i<length;i++){
       results.push(finalStart + i*finalStep)
   }
    return results;
  }

console.log(range(8, -2, -3))