# Replacement Tags

Utilize our Tag replacement system thoughout the application.

## getAll()

Returns a snapshot of all Replacement Tags available on the page.

### type

```typescript
function getAll():Promise<ReplacementTag[]
```

### example

```javascript
window.addEventListener('lf-sdk-ready', async () => {
     
     const replacementTags = await window.sdk.replacementTags.getAll();

     console.log(replacementTags);
});
```


## setTag()
Creates a replacement tag with a custom lookup `key` and `value`

### type

```typescript
function setTag(key: string, value: string):Promise<void>
```
### example

```javascript
window.addEventListener('lf-sdk-ready', async () => {
     
    await window.sdk.replacementTags.setTag('my_custom_tag', 'HelloWorld');

});
```

## applyTag()
returns the string value of the Replacement Tag `key` provided.

### type

```typescript
function applyTag(value: string):Promise<void>
```


## ReplacementTag 

| prop  | type     |
| ----- | -------- |
| name  | `string` |
| value | `string` |