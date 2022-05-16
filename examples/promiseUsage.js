window.addEventListener('lf-sdk-ready', () => {
    window.sdk.on('formSubmit', (e) => {
        
        e.suspense(async () => {

           await new Promise((resolve, reject) => {

            const data = await fetch('https://domain.com');

            resolve(data);
           }).then((result) => {
               console.log(result)
           });
        });
    });
 });