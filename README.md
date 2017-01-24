# tessel-modern-blinky

A modern ES2015 boilerplate version of the Tessel blinky project. Just follow these steps:

1. Fork this repo on GitHub.
1. Clone it to your local computer.
1. `npm install` the dependencies
1. `npm start` to test on your Tessel

Do the LEDs blink? If so, you have successfully compiled your ES6 code.

## Writing your own app.
You can use this as a boilerplate for other Tessel projects that you write.
Now that you have the blinky code building and running, you can change `src/app.js` to do whatever you want.

## `props` that are passed to `app`
The bootstrap code calls `app` with a set of `props` (a single argument) as defined below:

* `tessel` This is the `tessel` object from `require('tessel')`. It is passed to `app` so that you can better write tests that "mock" the `tessel` object.
* `log` this is the function `console.log` in "development" mode and a `noop` function in "production" mode.
* `ledGreen` A shortcut to `tessel.led[2]` (re-think this?)
* `ledBlue` A shortcut to `tessel.led[3]`

## npm Script Commands

### `npm start`
This will lint your code, "compile" it, and execute the Tessel `t2 run` command. Use this during development to test your code on the Tessel.

### `npm run deploy`
This will lint your code, "compile" it for "production", and execute the Tessel `t2 push` command. Use this when you are satisfied with your code and with to deploy it to the Tessel. The code is compiled differently than with using `npm start`. The code is minimized and dead code is removed. Also, any code that is inside of `if` blocks like this will be removed.

```js
if (process.env.NODE_ENV !== 'production') {
  log('This will NOT appear in "deployed" code');
}
```

### `npm startprod`
Same as `npm start` above, but runs the "production" code.

## Vision
I see this boilerplate building, with help from the community, to include:

- [ ] Add testing (i.e. `npm test`) with [Jest](https://github.com/facebook/jest)
- [ ] Write a "mock" for `tessel` to be used for testing.
- [ ] Add a `CONTRIBUTING.md` file with instructions.
- [ ] others?
