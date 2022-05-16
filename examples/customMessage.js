window.addEventListener('lf-sdk-ready', () => {
    window.sdk.on('formSubmit', (e) => {
        e.suspense(async () => {
           await new Promise((resolve, reject) => {
               window.setTimeout(() => {
                 window.sdk.flowPages.showMessage('custom message', 'flowpage is changed show your custom message, after 5s');
               },5000);
           });
        });
    });
 });