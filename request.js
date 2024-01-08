
export const testRequest = async () => {
    try {
        const res = await fetch('https://api.genderize.io/?name=attila');
        const resVal = await res.json();
        console.log(`Value from response`)
        console.log(resVal);
    } catch (e) {
        console.error(e)
    }
    

}

testRequest();