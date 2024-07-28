/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function insertionSort(arr) {
    for(let i=0;i<arr.length-1;i++){
        console.log(`array-i-${i}`,arr[i])
      for(let j=i+1;j>=0;j--){
        console.log(`array-j-${j}`,arr[j])
        if(arr[i]>arr[j]){
          [arr[j],arr[i]] = [arr[i],arr[j]]
        }
      }
    }
    return arr;
  }

//   console.log(insertionSort([2, 1]));
  console.log(insertionSort([10, 2, 4]));