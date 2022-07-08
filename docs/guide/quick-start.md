# Quick start

## Step. 1: Add addEventListener

When you want to communicate to our SDK, it's __important__ to listen to the window event `lf-sdk-ready` first.

### Example
``` javascript 
window.addEventListener('lf-sdk-ready', async () => {
// now window.sdk is available
});
```