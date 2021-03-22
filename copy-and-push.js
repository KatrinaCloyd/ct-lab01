const copyAndPush = (arr) => {
    const cloneArr = [...arr];
    cloneArr.push(4);
    return cloneArr;
};

module.exports = copyAndPush;
