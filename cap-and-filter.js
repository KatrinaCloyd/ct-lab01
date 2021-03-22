const copyAndFilter = (arr) => {
    const newArr = arr.map(e => e.toUpperCase());
    const filtArr = newArr.filter(e => !e.startsWith('F'));
    return filtArr;
};

module.exports = copyAndFilter;
