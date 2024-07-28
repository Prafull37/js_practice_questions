Function.prototype.myBind = function (thisArg, ...argArray) {
    const fn = this;
    const randomName = Math.random()
    Object.defineProperty(thisArg,randomName,{
      enumerable:false,
      value:fn
    })
    return function (...args){
      return thisArg[randomName](...argArray,...args)
    }
};


const text1 = {
  
    number:2,
    add(n,m=0){
    console.log(n,m,this.number)
        return this.number+n+m
    }
  }
  
  console.log(text1.add(2));
  
  const obj2 = {
      number:3
  }
  
  const add1Bind = text1.add.bind(obj2,3);
  const add1MyBind = text1.add.myBind(obj2,3);
  const add4Bind = add1Bind.bind({number:"8"})
  const add4MyBind = add1MyBind.myBind({number:"8"})

  console.log("Ad",add4Bind())
  console.log("Adm",add4MyBind())

  
  const obj3={
      number:4,
    add2:add1Bind
  }
  

    
  const obj3MyBind={
    number:4,
  add2:add4MyBind
}

  console.log("bind",obj3.add2(6))
  console.log("myBind",obj3.add2(6))
