function firstChar(text) {
  // your code here
	// return text.toLowerCase() + "-" + text.toUpperCase();
	let str = text.replace(/ /g,'');
	if (str.length == 0){
		return ''
	} else {
		return str[0]
	}
	
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
