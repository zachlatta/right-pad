# right-pad

right-pad replaces `Math.floor`, `Math.ceil`, and `Math.round` with much more
_apt_ implementations. right-pad, like
[left-pad](https://github.com/azer/left-pad), may break your dependencies.

```js
Math.floor(10.5);
// =>
//     │
//     │
//     │
//     │
//     │
//     |_____10.5_____
```

## Install

    $ npm install zachlatta/right-pad

## Usage

```js
require('right-pad');

Math.floor(10.5);
// =>
//     │
//     │
//     │
//     │
//     │
//     |_____10.5_____

Math.ceil(10.5);
// =>
//     _____10.5_____
//     |
//     │
//     │
//     │
//     │
//     │

Math.round(10.5);
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

This was a late night, sleep deprived idea of [Michael Hulet](https://github.com/raysarebest)
