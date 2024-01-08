import { myPromise } from "./promise.js";
import { testAsync} from "./async.js";
import { testRequest} from "./request.js";



document.addEventListener('DOMContentLoaded', () => {
    myPromise();
    testAsync();
    testRequest();

});

const meat = new Promise(resolve => {
    setTimeout(() => {
        resolve('meat');
    }, 15000);
});

const vegetables = new Promise(resolve => {
    setTimeout(() => {
        resolve('vegetables');
    }, 5000);
});

const bun = new Promise(resolve => {
    setTimeout(() => {
        resolve('bun');
    }, 7000);
});



Promise.all([meat, vegetables, bun] )
.then(([cookedMeat, choppedVegetable, bakedBun]) => {
    setTimeout(() => {
        console.log(cookedMeat, choppedVegetable, bakedBun);
    }, 10000);
})