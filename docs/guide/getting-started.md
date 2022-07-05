# Guide to get started

Thank you for getting into our documentation, we try to run this documentation site as close to a open source ideology as possible - meaning you are welcome to get into the [Github repository](https://github.com/leadfamly/sdk-docs) and create an issue if you have suggestions or want to report a bug in the documentation.
If you want to contribute with example code



::: warning
Our `SDK` is in it's early stages, this includes the documentation, so we keep adding features.
:::

## Events vs. API
Our sdk contains by 2 ways of communicating - listening to our `Events` or using our `API` located on the window.sdk object
the SDK contains Event communcation and by users current context, and only what the user is allowed to see.



## Step. 1: Add addEventListener

when you want to communicate to our SDK, it's important to listen to the window event
`lf-sdk-ready` first.
``` javascript 
window.addEventListener('lf-sdk-ready', async () => {
// now window.sdk is available
});
```