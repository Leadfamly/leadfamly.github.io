# SDK Documentation

Our sdk contains by 2 ways of communicating - listening to our [Events](#Events) or using our api located on the window.sdk object
the SDK contains Event communcation and by users current context, and only what the user is allowed to see.

## lf-sdk-ready
When you want to communicate to our SDK, it's important to listen to the window event
`lf-sdk-ready` first. This is because SDK is loaded asynchronously, and isn't ready immediately on window load.
``` javascript 
window.addEventListener('lf-sdk-ready', () => {
  // now window.sdk is available
});
```
# Events

- `window.sdk.on()` (Add event listener.)
- `window.sdk.once()` (Add event listener & auto-remove after first emit.)
- `window.sdk.off()` (De-register an event listener.)
  ### Events that can be listened to:

- [formSubmit](#formSubmit) 
- [flowPageChange](#flowPageChange)

## Event: formSubmit

Triggered whenever user submits a registration form.

Arguments:

| name | type                      |
| ---- | ------------------------- |
| e    | [FormSubmit](#formsubmit) |

[FormSubmit](#formsubmit) allow you to suspense the form submit and do asynchronous actions before Leadfamly proceeds. This can be done using the `suspense()`. `suspense()` takes a callback that has to return a promise. Leadfamly will only continue form submit when promise is resolved. Meaning, if you reject it, it'll also reject the form submit. An example of this:

GOOD (waiting for someAsynchronousAction() to finish) ✅
``` javascript
 window.sdk.on('formSubmit', (e) => {
     e.suspense(async () => {
       await someAsynchronousAction();
     });
 });
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


## Event: flowPageChange

Triggered whenever active flowpage changes.

Arguments:

| name | type                  |
| ---- | --------------------- |
| to   | [FlowPage](#flowpage) |
| from | [FlowPage](#flowpage) |

Example:

``` javascript
 window.sdk.on('flowPageChange', (to, from) => {});
```

# API
The api contains of following objects with getters and setters
You have the possibility to loop though the page and by following the interface structure found below.
- [campaign](#windowsdkcampaign)
- [flowPages](#windowsdkflowpages)

## window.sdk.flowPages

| name          | type                  | props                                  |
| ------------- | --------------------- | -------------------------------------- |
| getAll()      | `Promise<FlowPage[]>` |                                        |
| makeActive()  | `Promise<void>`       |                                        |
| showMessage() | `void`                | `title: string`, `description: string` |

## window.sdk.campaign

| name      | type                           |
| --------- | ------------------------------ |
| getId()   | `Promise<number or undefined>` |
| getName() | `Promise<string>`              |
| getType() | `Promise<string or undefined>` |

# Interfaces
## FormSubmit

| name       | type                                   | description                                                             |
| ---------- | -------------------------------------- | ----------------------------------------------------------------------- |
| suspense   | async callback `fn() => Promise<void>` | collects all promises inside, and awaits them getting resolved/rejected |
| section    | [FlowPage](#flowpage)                  |
| formFields | [FormField[]](#formField)              |

## FlowPage
| property   | access    | type                      |
| ---------- | --------- | ------------------------- |
| id         | read only | `number`                  |
| title      | read only | `string` or `undefined`   |
| formFields | read only | [FormField[]](#formField) |
| rows       | read only | [Row[]](#row)             |


## Row
| property | access    | type                    |
| -------- | --------- | ----------------------- |
| id       | read only | `number`                |
| label    | read only | `string` or `undefined` |
| columns  | read only | [Column[]](#column)     |

## Column
| property | access    | type                    |
| -------- | --------- | ----------------------- |
| id       | read only | `number`                |
| label    | read only | `string` or `undefined` |
| addons   | read only | [Addon[]](#addon)       |

## Addon
| property     | access    | type                    |
| ------------ | --------- | ----------------------- |
| alias        | read only | `string`                |
| formFields** | read only | [FormField](#formField) |

**only accessible on registration addon
## FormField
| property | access     | type                    |
| -------- | ---------- | ----------------------- |
| id       | read only  | `number`                |
| label    | read only  | `string` or `undefined` |
| type     | read only  | `string` or `undefined` |
| value    | read/write | `string` or `undefined` |

