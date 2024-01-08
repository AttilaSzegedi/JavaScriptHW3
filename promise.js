export const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise get ok') 
        reject('promise had an error');
    }, 1000);
});

myPromise
    .then((value) => console.log(value))
    .catch(e => console.error(e))
