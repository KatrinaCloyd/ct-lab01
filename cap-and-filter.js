const copyAndFilter = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const capEle = element.toUpperCase();
        if (capEle.startsWith('F')) {
            newArr.push();
        } else newArr.push(capEle);
        // newArr.push(capEle);
    }
    return newArr;
};

module.exports = copyAndFilter;
