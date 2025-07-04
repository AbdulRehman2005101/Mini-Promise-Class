# fakePromise – Simple Custom Promise Explanation

This is a minimal implementation of how JavaScript Promises work internally. It helps understand the core idea behind Promises using basic class structure.

---

## How it works – Step by Step

### 1. Constructor is called

When `new fakePromise(executor)` is called:

- The constructor is executed immediately.
- Two properties are created:
  - `onSuccess` is initialized to `null`.
  - `onfailure` is initialized to `null`.

### 2. Resolve and Reject functions are defined

Inside the constructor:

- A `resolve` function is created. If `onSuccess` is defined later, it will be called with the resolved value.
- A `reject` function is also created. If `onfailure` is defined later, it will be called with the rejected value.

### 3. The executor function runs

- The function passed to the constructor (`executor`) is called immediately.
- It receives the `resolve` and `reject` functions as arguments.
- This function will eventually call either `resolve(value)` or `reject(error)`.

### 4. `then()` method

- When `.then()` is called, it sets the `onSuccess` property to the provided callback function.
- If `resolve` is called after this, it will trigger the `onSuccess` function.

### 5. `catch()` method

- When `.catch()` is called, it sets the `onfailure` property to the provided callback function.
- If `reject` is called after this, it will trigger the `onfailure` function.

---

## Example

```js
const p = new fakePromise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Data loaded");
    } else {
        reject("Failed to load");
    }
});

p.then(data => {
    console.log("Resolved:", data);
}).catch(err => {
    console.log("Rejected:", err);
});
