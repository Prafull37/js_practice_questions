export default function fill(
    array,
    value,
    start = 0,
    end= array.length,
  ) {
      let finalStart=start;
      let finalEnd=end;
      if(array.length===0) return array;
  
      if(start < 0){
        finalStart = array.length + start < 0 ? 0 : array.length+start;
      }
  
      if(end <0){
        finalEnd = array.length + end
      }
  
      if(finalStart>finalEnd){
        return array
      }
  
      for(let i=0;i<array.length;i++){
        if(i>=finalStart && i<finalEnd){
          array[i] = value
        }
      }
  
      return array
  
  }
  
  //5 (-3) =>  2
  //5 (-1) => 4
  

console.log(fill([4,6,8,10],'*',-3,3))