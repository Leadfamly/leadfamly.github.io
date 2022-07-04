# Introduction to our event listener
We have 3 methods on the SDK, you can *add* an always listener, listen *once* or *remove* a listener.

## Add event listener.

```javascript
 window.sdk.on('eventName', (e) => {
     ...
 })

```

## Add event listener & auto-remove after first emit.

```javascript
 window.sdk.once('eventName', (e) => {
     ...
 })

```
## De-Register an event Listener

`window.sdk.off()` 

```javascript
 window.sdk.off('eventName', (e) => {
     ...
 })

```