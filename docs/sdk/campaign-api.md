# Campaign
Get information about the campaign.

## getId()
getter that returns the campaign id.
### type

```typescript
function getId():Promise<number | undefined>
```

## Example

```javascript
window.addEventListener('lf-sdk-ready', async () => {
     
     const campaignID = await window.sdk.campaign.getId();

     if(campaignID === 9999) {
         window.alert('Hello World');
     }

});
```

## getName()
getter that returns the campaign id.
### type

```typescript
function getName():Promise<string | undefined>
```

## Example

```javascript
window.addEventListener('lf-sdk-ready', async () => {
     
     const campaignName = await window.sdk.campaign.getName();

     if(campaignName === 'My Game Campaign') {
         window.alert('Hello World');
     }
});
```

## Interface 

| name      | type                           |
| --------- | ------------------------------ |
| getId()   | `Promise<number or undefined>` |
| getName() | `Promise<string>`              |