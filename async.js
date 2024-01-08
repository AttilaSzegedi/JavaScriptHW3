const myAsync = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise Async get ok') 
        reject('promise Async had an error');
    }, 1000);
});

export const testAsync = async () => {
    try {
        const value = await myAsync;
        console.log(value);
    } catch(e) {
        console.error(e);  
    }  
}

testAsync();
