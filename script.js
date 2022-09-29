function validaArray(arr, num){
	try{
		if(!arr && !num) throw new ReferenceError("Envie os parâmetros!"); 
		if(typeof arr !== 'object') throw new TypeError("Array tem de ser do tipo object!");
		if(typeof num !== 'number') throw new TypeError("Num tem de ser do tipo number!");
		if(arr.length !== num) throw new RangeError("Tamanho inválido!");
		return arr;
	}

	catch(e){
		if(e instanceof ReferenceError){
			console.log("Esse é um ReferenceError");
			console.log(e.message);
		} else if(e instanceof TypeError){
			console.log("Esse é um TypeError");
			console.log(e.message);
		} else if(e instanceof RangeError){
			console.log("Esse é um RangeError");
			console.log(e.message);
		} else {
			console.log("Ocorreu um tipo de erro não esperado: " + e);
		}
	}
}

console.log(validaArray());
console.log('---------------------------');
console.log(validaArray('a', 5));
console.log('---------------------------');
console.log(validaArray([1], 'E'));
console.log('---------------------------');
console.log(validaArray([], 2));
