

async function resolveAfterXSeconds(seconds, resolver) {
    return new Promise(resolve => {
        setTimeout(() => {

            resolve(resolver);
        }, seconds * 1000);
    }); 
    
}
  
window.addEventListener('lf-sdk-ready', () => {

    window.sdk.on('formSubmit', e => {
        
        e.suspense(async () => {
            const startTime = new Date().getTime();
            
            await resolveAfterXSeconds(1, `first promise resolved after ${1}`);
            
            await  resolveAfterXSeconds(2, `second promise resolved after ${2}`);
            
            const suspensedInSeconds = (new Date(new Date().getTime()) - startTime) / 1000
            
            console.log(suspensedInSeconds);
        });
    });
});