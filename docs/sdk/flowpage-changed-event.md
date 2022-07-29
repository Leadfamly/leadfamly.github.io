# FlowPage Changed Event

## Add event listener.
the `event` that you get from `flowPageChange` has two objects `to` and `from`
`to` is never undefined, this event can only happen, when a flowpage changes, and succesfully change to new flowpage.
`from` however can also be `undefined`, as the first flowpage that get into the flow will always be `undefined`

### type
```typescript
function suspense(fn: () => Promise<void>): void
```

## Example

```javascript
     window.sdk.on('flowPageChange', (event) => {
         if(event.to.title === 'Presentation page') {
             window.alert('Hello World')
         }
     })
```

## FlowPage Changed Event

| name | type                  |
| ---- | --------------------- |
| to   | [flowpage](#flowpage) |
| from | [flowpage](#flowpage) or `undefined` |

## flowpage

| property   | access    | type                      |
| ---------- | --------- | ------------------------- |
| id         | read only | `number`                  |
| title      | read only | `string` or `undefined`   |
| formFields | read only | `formField` |
| rows       | read only | `row`          |