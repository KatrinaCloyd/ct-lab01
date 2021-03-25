const filter = (arr, callback) => {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArray[newArray.length] = arr[i];
        }
    }

    return newArray;
};

module.exports = filter;