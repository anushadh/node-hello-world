function doStuff(data) {
    return new Promise((resolve, reject) => {
        let successMessage = {
            status: 'success',
            message: 'All is well !'
        }
        let errorMessage = {
            status: 'error',
            message: 'Oops !'
        }
        if(typeof data === 'boolean' && data === true) {
            resolve(successMessage);
        } else {
            reject(errorMessage);
        }
    });
}

// doStuff(true).then(
//     (successMessage) => {
//         console.log(successMessage);
//     },
//     (errorMessage) => {
//         console.log(errorMessage);
//     }
// );

doStuff(true).then(
    () => {
        console.log("First Do Stuff Resolved.");
        return doStuff(false);
    }
).then(
    () => {
        console.log("Second Do Stuff Resolved.");
    }
).catch(
    () => {
        console.log("An error occurred");
    }
)