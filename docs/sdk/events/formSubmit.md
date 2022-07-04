# formSubmit

On this event its very important to notice that `suspense` function has to be implemented if you are listening to the event.
it will take all functions (that returns a Promise) inside and waiting for them to resolve - it's required in the suspense function to have a **minimum of 1** promise getting `reolved` or `rejected`!

## Example

GOOD (waiting for all promises getting resolved) ✅
``` javascript
 window.sdk.on('formSubmit', (e) => {
     e.suspense(async () => {
       return Promise.resolve();
     })
 })
```
BAD (nothing happens) 🚫
``` javascript
 window.sdk.on('formSubmit', (e) => {
     e.suspense(async () => {
       (function () {
       window.setTimeout(() => {
         console.log('you wont see this message');
       }, 3000)
      })();

     })
 })
```

**Note:** please see [promise example](https://github.com/Leadfamly/sdk-docs/blob/main/examples/promiseUsage.js) form more detailed usage.


**however** it's possible to have other logic inside the suspense, it will get executed if a Promise is present!

## Interface

| name       | type                                   | description                                                             |
| ---------- | -------------------------------------- | ----------------------------------------------------------------------- |
| suspense   | async callback `fn() => Promise<void>` | collects all promises inside, and awaits them getting resolved/rejected |
| section    | [flowpage](#flowpage)                  |
| formFields | [formField[]](#formField)              |