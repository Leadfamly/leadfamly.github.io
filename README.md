# SDK Documentation

Our sdk contains by 2 ways of communicating - listening to our [Events](#Events) or using our api located on the window.sdk object
the SDK contains Event communcation and by users current context, and only what the user is allowed to see.

## lf-sdk-ready
when you want to communicate to our SDK, it's important to listen to the window event
`lf-sdk-ready` first.
``` javascript 
window.addEventListener('lf-sdk-ready', async () => {
// now window.sdk is available
});
```
# Events

- `window.sdk.on()` (Add event listener.)
- `window.sdk.once()` (Add event listener & auto-remove after first emit.)
- `window.sdk.off()` (De-register an event listener.)
  ### events that can be listened to:

- [formSubmit](#formSubmit) 
- [flowPageChange](#flowPageChange)

## formSubmit

On this event its very important to notice that `suspense` function has to be implemented if you are listening to the event.
it will take all functions (that returns a Promise) inside and waiting for them to resolve - it's required in the suspense function to have a **minimum of 1** promise getting `reolved` or `rejected`!

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


## flowPageChange

| name | type                  |
| ---- | --------------------- |
| to   | [flowpage](#flowpage) |
| from | [flowpage](#flowpage) |

# API
the api contains of following objects with getters and setters
You have the possibility to loop though the page and by following the interface structure found below.
- [campaign](#campaign)
- [flowpages](#flowpages)

## flowpages

| name          | type                  | props                                  |
| ------------- | --------------------- | -------------------------------------- |
| getAll()      | `Promise<flowpage[]>` |                                        |
| makeActive()  | `Promise<void>`       |                                        |
| showMessage() | `void`                | `title: string`, `description: string` |

## campaign

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
| section    | [flowpage](#flowpage)                  |
| formFields | [formField[]](#formField)              |

## flowpage
| property   | access    | type                      |
| ---------- | --------- | ------------------------- |
| id         | read only | `number`                  |
| title      | read only | `string` or `undefined`   |
| formFields | read only | [formField[]](#formField) |
| rows       | read only | [row[]](#row)             |


## row
| property | access    | type                    |
| -------- | --------- | ----------------------- |
| id       | read only | `number`                |
| label    | read only | `string` or `undefined` |
| columns  | read only | [column[]](#column)     |
## column
| property | access    | type                    |
| -------- | --------- | ----------------------- |
| id       | read only | `number`                |
| label    | read only | `string` or `undefined` |
| addons   | read only | [addon[]](#addon)       |

## addon
| property     | access    | type                    |
| ------------ | --------- | ----------------------- |
| alias        | read only | `string`                |
| formFields** | read only | [formField](#formField) |

**only accessible on registration addon
## formField
| property | access     | type                    |
| -------- | ---------- | ----------------------- |
| id       | read only  | `number`                |
| label    | read only  | `string` or `undefined` |
| type     | read only  | `string` or `undefined` |
| value    | read/write | `string` or `undefined` |

