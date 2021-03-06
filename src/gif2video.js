import {ERROR_NO_PARAM, ERROR_NO_SRC, ERROR_SRC_NOT_STRING, ERROR_SRC_NOT_CDN} from './error-messages'

const SUPPORTED_FORMATS = ['webm', 'mp4']

/**
 * Check gif
 * @param gif
 */
function check(gif) {
  if (!gif.src) {
    throw new Error(ERROR_NO_SRC)
  }
  if (typeof gif.src !== 'string') {
    throw new Error(ERROR_SRC_NOT_STRING)
  }
  if (!(/^(http|https):\/\/ucarecdn\.com/).test(gif.src)) {
    throw new Error(ERROR_SRC_NOT_CDN)
  }
}

/**
 * Transform git object to video tag AST
 * @param gif
 * @returns {{tagName: string, attributes: Object, children: Array} | null}
 */
export function gif2video(gif) {
  if (!gif) {
    throw new Error(ERROR_NO_PARAM)
  }
  check(gif)

  const {src} = gif
  const splitedSrc = src.match(/^(http|https):\/\/ucarecdn\.com\/(.+?)\/(.+?\.gif|)/)

  if (splitedSrc === null) {
    return null
  }

  const UUID = splitedSrc[2]
  const filename = splitedSrc[3]

  return {
    tagName: 'video',
    attributes: {
      'autoplay': true,
      'loop': true,
      'muted': true,
      'webkit-playsinline': true,
      'playsinline': true,
    },
    children: SUPPORTED_FORMATS.map(format => ({
      tagName: 'source',
      attributes: {
        src: `https://ucarecdn.com/${UUID}/gif2video/-/format/${format}/${filename}`,
        type: `video/${format}`,
      },
    })),
  }
}
