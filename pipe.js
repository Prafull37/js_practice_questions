function pipe(funcs) {
	return function (...args){
		return funcs.reduce((acc,func)=>{
			return func.apply(this,[acc])
		},args)
	}
}


const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y



console.log(pipe([
    times(2),
    times(3)
])(2));