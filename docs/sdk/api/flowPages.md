# flowPages

Manipulate with the flow, but be aware that you cannot manipulate with the platform.
So, if the platform are moving to another flowpage (for intance if game is running out of time) then it *will* go there nomatter what.

The way we imagined usage of these actions are when an event happens, you are supposed to `suspense` and pause the application, and if you want to force the user into an alternative flowpage then the next in line, you can `reject()` the promise there.


## Interface 

| name          | type                  | props                                  |
| ------------- | --------------------- | -------------------------------------- |
| getAll()      | `Promise<flowpage[]>` |                                        |
| makeActive()  | `Promise<void>`       |                                        |
| showMessage() | `void`                | `title: string`, `description: string` |