# Quick start

## Step. 1: Add addEventListener

When you want to communicate to our SDK, it's __important__ to listen to the window event `lf-sdk-ready` first.

### Example
``` javascript 
window.addEventListener('lf-sdk-ready', async () => {
// now window.sdk is available
});
```

## Step. 2: Bring in campaign events.
Every event listener contains data related to the event, it returns a snapshot of the current context.
You can find the what the event contains [here](/sdk/getting-started)

### Example
``` javascript 
window.addEventListener('lf-sdk-ready', async () => {
    window.sdk.on('flowPageChange', (e) => {
        console.log(event.to.title);
    })
});
```