# posthtml-uploadcare-gif2video

Convert img with GIF to video.

Plugin for [PostHTML](https://github.com/posthtml/posthtml).

**Before**

```html
<img src="https://ucarecdn.com/af0136cc-c60a-49a3-a10f-f9319f0ce7e1/road.video.gif" />
```

**After**

```html
<video autoplay loop muted webkit-playsinline playsinline>
  <source src="https://ucarecdn.com/af0136cc-c60a-49a3-a10f-f9319f0ce7e1/gif2video/-/format/webm/road.video.gif" type="video/webm">
  <source src="https://ucarecdn.com/af0136cc-c60a-49a3-a10f-f9319f0ce7e1/gif2video/-/format/mp4/road.video.gif" type="video/mp4">
</video>
```

## Install

```
npm install posthtml-uploadcare-gif2video --save
```

## Usage

```javascript
const posthtml = require('posthtml')

posthtml()
  .use(require('posthtml-uploadcare-gif2video'))
  .process(html/*, options */)
  .then(result => console.log(result.html))
```
