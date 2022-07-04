# Campaign
Get information about the campaign.

## Example

```javascript
window.addEventListener('lf-sdk-ready', async () => {
     
     const campaignID = await window.sdk.campaign.getId();

     if(campaignID === 9999) {
         window.alert('Hello World');
     }

});
```


## Interface 

| name      | type                           |
| --------- | ------------------------------ |
| getId()   | `Promise<number or undefined>` |
| getName() | `Promise<string>`              |