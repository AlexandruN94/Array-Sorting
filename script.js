const exampleOne = '12 might 45% internship 2022 12';
const exampleTwo = '5 arr5 ay 5 of 5 5 elements 5';
const exampleThree = 'best fo[23]%6c abc 45';

const extractNumbers = (testString) => {
  const regex = /^(0|[1-9]\d*)$/;
  const words = testString.split(' ');
  const numbersArray = [];
  words.forEach((word) => {
    if (regex.test(word)) {
      numbersArray.push(parseInt(word));
    } else {
      const lettersArray = word.split('');
      const filteredLettersArray = lettersArray.filter((letter) => {
        return regex.test(letter);
      });

      const joinedArray = filteredLettersArray.join('');
      const parsedJoin = parseInt(joinedArray);
      if (!isNaN(parsedJoin)) {
        numbersArray.push(parsedJoin);
      }
    }
  });
  const uniqueArray = Array.from(new Set(numbersArray));

  const sortedArray = uniqueArray.sort((a, b) => a - b);

  return sortedArray;
};

const joinNumberArrays = (testArray) => {
  const extractedNumbers = [];
  for (i = 0; i < testArray.length; i++) {
    extractedNumbers.push(extractNumbers(testArray[i]));
  }

  const flattenedResultArray = extractedNumbers.flat();
  const uniqueArray = Array.from(new Set(flattenedResultArray));
  const sortedArray = uniqueArray.sort((a, b) => a - b);
  return sortedArray;
};

const joinManyNumberArrays = (...args) => {
  const extractedNumbers = [];
  args.forEach((arg) => {
    if (arg) {
      extractedNumbers.push(joinNumberArrays(arg));
    }
  });
  const flattenedResultArray = extractedNumbers.flat();
  const uniqueArray = Array.from(new Set(flattenedResultArray));
  const sortedArray = uniqueArray.sort((a, b) => a - b);
  return sortedArray;
};

console.log(joinManyNumberArrays([exampleOne], [exampleTwo], [exampleThree]));
