function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(array)) {
            reject('Provided Input Is Not A Valid Array');
        } else {
            const filteredArray = array
                .filter(item => typeof item === 'string')
                .map(item => item.toLowerCase());
            resolve(filteredArray);
        }
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));