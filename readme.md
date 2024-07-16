# New Year Countdown Using Callback hell

## What are Callbacks?

**Callbacks are used to make asynchrounous codes work in a synchronous way.
Callbacks are mostly used in code where the remaining code rely on the
asynchronous operations' data. For example if a code to be executed after
getting data from a API call or by executing another timer after a existing
timer ends.**

## What is Callback Hell?

Callback hell are situations where there is multiple nestings of callbacks
inside a callback to make an asynchronous task work in a synchronous way.

This can be visually seen by a pattern formed in the code where the indentations
will get tapered to the final executed code as shown below. In the below code
you could see a triangle formed which is known as a common visual representation
of **_"Callback Hell"_**

```js
setTimeout(() => {
  count.innerHTML = 9;
  setTimeout(() => {
    count.innerHTML = 8;
    setTimeout(() => {
      count.innerHTML = 7;
      setTimeout(() => {
        count.innerHTML = 6;
        setTimeout(() => {
          count.innerHTML = 5;
          setTimeout(() => {
            count.innerHTML = 4;
            setTimeout(() => {
              count.innerHTML = 3;
              setTimeout(() => {
                count.innerHTML = 2;
                setTimeout(() => {
                  count.innerHTML = 1;
                  setTimeout(() => {
                    count.classList.remove("countdown");
                    count.classList.add("newyear");
                    count.innerHTML = "Happy New Year";
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
```

### Approach

> I used my second example in the callback explanation (i.e) to start a timer
> after a existing timer ends using setTimeout function with a time of 1 second.

> This will lead to multiple nesting of callback inside callback which is know
> to be a **_"Callback Hell"_**
