const copyAndFilter = (arr) => {
    const newArr = [];
    arr.map(element => {
        const capEle = element.toUpperCase();
        if (capEle.startsWith('F')) {
            newArr.push();
        } else newArr.push(capEle);
    });
    return newArr;
};

module.exports = copyAndFilter;
