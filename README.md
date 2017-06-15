# uploadcare-gif2video

Convert img with GIF to video.

## Install

```
npm install uploadcare-gif2video --save
```

## Usage

```javascript
import gif2video from 'uploadcare-gi2video'

const video = gif2video({src: 'https://ucarecdn.com/af0136cc-c60a-49a3-a10f-f9319f0ce7e1/'})
```

`video` now contain follow object,

```javascript
video = {
  tagName: 'video',
  attributes: {
    autoplay: true,
    loop: true,
    muted: true,
    'webkit-playsinline': true,
    playsinline: true,
  },
  sources: [
    {
      tagName: 'source',
      attributes: {
        src: `https://ucarecdn.com/af0136cc-c60a-49a3-a10f-f9319f0ce7e1/gif2video/-/format/webm/`,
        type: `video/webm`
      }
    },
    {
      tagName: 'source',
      attributes: {
        src: `https://ucarecdn.com/af0136cc-c60a-49a3-a10f-f9319f0ce7e1/gif2video/-/format/mp4/`,
        type: `video/mp4`
      }
    },
  ]
}
```
