export function separateNumber(number) {
	const numberString = number.toString();
	const reversedArray = [...numberString].reverse();
	const separatedArray = [];

	for (let i = 0; i < reversedArray.length; i++) {
		if (i > 0 && i % 3 === 0) {
			separatedArray.push(' ');
		}
		separatedArray.push(reversedArray[i]);
	}

	const separatedString = separatedArray.reverse().join('');
	return separatedString;
}
