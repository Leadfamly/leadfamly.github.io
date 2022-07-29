# Popover

## getAll()
Returns full set of all [Popover](#Popover)[]

### type

```typescript
function getAll():Promise<Popover[]>
```

## makeActive()

### type

```typescript
function makeActive(id: number): Promise<void>
```

### Popover
| property   | access    | type                    |
| ---------- | --------- | ----------------------- |
| id         | read only | `number`                |
| title      | read only | `string` or `undefined` |
| formFields | read only | `formField`             |
| rows       | read only | `row`                   |