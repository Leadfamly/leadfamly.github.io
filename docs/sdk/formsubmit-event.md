# formSubmit

## suspense()

::: info IMPORTANT
On this event its very important to notice that `suspense` function has to be implemented if you are listening to the event.
it will take all functions (that returns a Promise) inside and waiting for them to resolve - it's required in the suspense function to have a **minimum of 1** promise getting `reolved` or `rejected`!
:::

### type
```typescript
function suspense(fn: () => Promise<void>): void
```

### example

```javascript
window.addEventListener('lf-sdk-ready', async () => {
  window.sdk.on('formSubmit', (e) => {
    e.suspense(async () => {
      await someAsynchronousAction();
    });
  });
});
```

**Note:** please see [promise example](https://github.com/Leadfamly/sdk-docs/blob/main/examples/promiseUsage.js) form more detailed usage.

## formFields Array
A getter that returns the all the form fields in the registration form getting submitted.

### example

```javascript
window.addEventListener('lf-sdk-ready', async () => {
  window.sdk.on('formSubmit', (e) => {
        e.formFields.forEach((field) => {
          if(field.label === 'Name') {
            window.alert(field.value);
          }
        })
  });
});
```

## section Object

A getter that returns the current section that unfolds content inside.

### example

```javascript
window.addEventListener('lf-sdk-ready', async () => {
  window.sdk.on('formSubmit', (e) => {
    window.alert(e.section.title);
  });
});
```

## Interfaces

### FormField
| property | access     | type     |
| -------- | ---------- | -------- |
| id       | read only  | `number` |
| label    | read only  | `string  | undefined` |
| type     | read only  | `string  | undefined` |
| value    | read/write | `string  | undefined` |
| valid    | read/write | `boolean | undefined` |

### FlowPage
| property   | access    | type                      |
| ---------- | --------- | ------------------------- |
| id         | read only | `number`                  |
| title      | read only | `string` or `undefined`   |
| formFields | read only | [FormField[]](#formField) |
| rows       | read only | [Row[]](#row)             |


### Row
| property | access    | type                    |
| -------- | --------- | ----------------------- |
| id       | read only | `number`                |
| label    | read only | `string` or `undefined` |
| columns  | read only | [Column[]](#column)     |

### Column
| property | access    | type                    |
| -------- | --------- | ----------------------- |
| id       | read only | `number`                |
| label    | read only | `string` or `undefined` |
| addons   | read only | [Addon[]](#addon)       |

### Addon
| property     | access    | type                    |
| ------------ | --------- | ----------------------- |
| alias        | read only | `string`                |
| formFields** | read only | [FormField](#formField) |