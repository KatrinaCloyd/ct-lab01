const reduce = (arr, callback, initialVal) => {
    if (initialVal) {
        let accu = initialVal;
        for (let i = 0; i < arr.length; i++) {
            accu = callback(accu, arr[i]);
        }
        return accu;
    }
    let accu = arr[0];
    for (let i = 1; i < arr.length; i++) {
        accu = callback(accu, arr[i]);
    }
    return accu;
};

module.exports = reduce;


// const reduce = (arr, callback) => {
//     let accu = 0;
//     for (let i = 0; i < arr.length; i++) {
//         accu = callback(accu, arr[i]);
//     }
//     return accu;
// };

// module.exports = reduce;
