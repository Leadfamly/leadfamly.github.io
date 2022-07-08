# FlowPages

Manipulate with the flow, but be aware that you cannot manipulate with the platform.
So, if the platform are moving to another flowpage (for intance if game is running out of time) then it *will* go there nomatter what.

The way we imagined usage of these actions are when an event happens, you are supposed to `suspense` and pause the application, and if you want to force the user into an alternative flowpage then the next in line, you can `reject()` the promise there.

## getAll()
Returns full set of all [FlowPage](#flowpage)[]

### type

```typescript
function getAll():Promise<FlowPage[]>
```

## makeActive()

### type

```typescript
function makeActive(id: number): Promise<void>
```

## showMessage()
Send user to a page with a `title` and a `description` - useful if you want get the user out of the flow, based on your own logic - showing a custom error page

### type

```typescript
function showMessage(title: string, description: string): Promise<void>
```



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