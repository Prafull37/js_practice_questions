/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function selectionSort(arr) {
    for(let i=0;i<arr.length;i++){
      for(let j=i+1;j<arr.length;j++){
        if(arr[j] < arr[i]){
          [arr[i],arr[j]] = [arr[j],arr[i]]
        }
      }
    }
    return arr
  }