module.exports = function toReadable (number) {
    const numeralsInWords = {
        numbers: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        dozens: ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        teens: ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen','nineteen'],
        hundreds: 'hundred',
        zero: 'zero'
    };

    let strNumber = number.toString();
    let firstNum = Number(strNumber[0]);
    let secondNum = Number(strNumber[1]);
    let thirdNum = Number(strNumber[2]);
    let dozens = Number(strNumber[1] + strNumber[2]);
    let words =[];

    if (strNumber.length === 1) {
        if (firstNum === 0) {
            return numeralsInWords.zero;
        }
        return numeralsInWords.numbers[firstNum - 1];
    }

    if (strNumber.length === 2) {
        if (number % 10 === 0) {
            return numeralsInWords.dozens[firstNum - 1];
        } else if (firstNum === 1) {
            return numeralsInWords.teens[secondNum - 1];
        }
        words.push(numeralsInWords.dozens[firstNum -1]);
        words.push(numeralsInWords.numbers[secondNum -1]);
    }

    if (strNumber.length === 3) {
        if (number % 100 === 0) {
            words.push(numeralsInWords.numbers[firstNum - 1]);
            words.push(numeralsInWords.hundreds);
            return words.join(' ');
        }
        if (number % 10 === 0) {
            words.push(numeralsInWords.numbers[firstNum - 1]);
            words.push(numeralsInWords.hundreds);
            words.push(numeralsInWords.dozens[secondNum - 1]);
            return words.join(' ');
        }
        if (secondNum === 0) {
            words.push(numeralsInWords.numbers[firstNum - 1]);
            words.push(numeralsInWords.hundreds);
            words.push(numeralsInWords.numbers[thirdNum - 1]);
            return words.join(' ');
        }
        words.push(numeralsInWords.numbers[firstNum - 1]);
        words.push(numeralsInWords.hundreds);

        if (dozens >= 11 && dozens <= 19 ) {
            words.push(numeralsInWords.teens[thirdNum - 1]);
            return words.join(' ');
        }
        words.push(numeralsInWords.dozens[secondNum - 1]);
        words.push(numeralsInWords.numbers[thirdNum - 1]);
    }

    return words.join(' ');
}
