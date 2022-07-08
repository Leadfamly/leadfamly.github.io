# Getting Started

This __Software develop kit__ allow developers take control of the flow of your campaigns you run.
## Events
Collection of events to subscribe to:

We have 3 methods on the SDK, you can *add* an always listener, listen *once* or *remove* a listener.

::: info
**A feature to know:**
The event can contain a callback function `suspense()` when using this, it will look at *ALL* promises inside, when those are resolved, it will use the flow logic for the next action. Making it very important to know the platform in some extent.
:::

## API

The API is a simple way of communicating with the platform. The `window.sdk` Object, has a collection of endpoints.

### Endpoint list
- [Campaign](./api/campaign)
- [FlowPages](./api/flowPages)