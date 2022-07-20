const checkAnagram = (firstWord, secondWord) => {

    let firstWordArray =  firstWord.split('')
    let secondWordArray = secondWord.split('')

    firstWordArray = firstWordArray.sort().join()
    secondWordArray = secondWordArray.sort().join();

    if(firstWordArray === secondWordArray) {
        return true;
    } else {
        return false;
    }

}

console.log(checkAnagram('state',  'tasted'))
