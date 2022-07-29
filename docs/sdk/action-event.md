# Action Event

## suspense()
::: info IMPORTANT
On this event its very important to notice that `suspense` function has to be implemented if you are listening to the event.
it will take all functions (that returns a Promise) inside and waiting for them to resolve - it's required in the suspense function to have a **minimum of 1** promise getting `reolved` or `rejected`!
:::

### type
```typescript
function suspense(fn: () => Promise<void>): void
```

## Example

```javascript
     window.sdk.on('action', (event) => {
        e.suspense(async () => {
        await someAsynchronousAction();
        });
     })
```

## preventDefault()
Cancel any queued action while suspensing the action. when suspense is resolved, no action would happen.

### type
```typescript
function preventDefault(): void
```

```javascript
window.addEventListener('lf-sdk-ready', async () => {
  window.sdk.on('action', (e) => {
    e.suspense(async () => {
      e.preventDefault()
      resolve();
    });
  });
});
```


## Origin
returns an object that contains information of the origin of action.
there is the following origin sources:

### Flowpage
| property   | access    | type                    |
| ---------- | --------- | ----------------------- |
| id         | read only | `number`                |
| title      | read only | `string` or `undefined` |
| formFields | read only | `formField`             |
| rows       | read only | `row`                   |

### button addon
| property | access    | type                    |
| -------- | --------- | ----------------------- |
| alias    | read only | `string`                |
| label    | read only | `string` or `undefined` |

### image addon
| property | access     | type                    |
| -------- | ---------- | ----------------------- |
| alias    | read only  | `string`                |
| alt      | read/write | `string` or `undefined` |
| source   | read/write | `string` or `undefined` |

### column
| property | access    | type                    |
| -------- | --------- | ----------------------- |
| id       | read only | `number`                |
| label    | read only | `string` or `undefined` |
| addons   | read only |                         |