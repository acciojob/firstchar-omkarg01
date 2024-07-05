function firstChar(text) {
  // your code here
	return text.toLowerCase() + "-" + text.toUpperCase();
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
