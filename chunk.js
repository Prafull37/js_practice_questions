export default function chunk(array, size = 1) {
    let chunk = [];
    let i = 0;
  
    while(i<array.length){
    console.log(i)
     const slice = array.slice(i,i+size);
     console.log("slice",slice)
     chunk.push(slice);
     i = i+size
    }
    return chunk
   }

console.log(chunk([1, 2, 3],   1))