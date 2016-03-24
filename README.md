# right-pad

right-pad replaces `Math.floor`, `Math.ceil`, and `Math.round` with much more
_apt_ implementations. right-pad, like
[left-pad](https://github.com/azer/left-pad) may break your dependencies.

## Install

    $ npm install zachlatta/right-pad

## Usage

```js
require('right-pad');

Math.floor(10.5)
// =>
//     │
//     │
//     │
//     │
//     │
//     └─────10.5─────

Math.ceil(10.5)
// =>
//     ┌─────10.5─────
//     │
//     │
//     │
//     │
//     │

Math.round(10.5)
// =>            x x x x x
//           x x           x x
//         x                   x
//       x                       x
//       x                       x
//     x                           x
//     x                           x
//     x         1 0 . 5           x
//     x                           x
//     x                           x
//       x                       x
//       x                       x
//         x                   x
//           x x           x x
//               x x x x x
```

## License

right-pad is licensed under the MIT license. See [`LICENSE`](LICENSE) for the
full text.
