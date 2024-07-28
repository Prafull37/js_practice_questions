export default function dropRightWhile(array, predicate) {
    let indexToSlice = array.length;
    for(let i=array.length-1;i>=0;i--){
        if(predicate(array[i],i,array)){
            indexToSlice=i;
        }else{
            break;
        }
    }

    return array.slice(0,indexToSlice)
  }


  console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value > 3))
  console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value < 0))
console.log(dropRightWhile([1, 2, 3, 4, 5], (_, index) => index >= 3))
console.log(dropRightWhile([20, 30, 40, 5, 4], (value, _, arr) => value <= arr.length))
