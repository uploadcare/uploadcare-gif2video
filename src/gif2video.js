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
 * @returns {{tagName: string, attributes: Object, sources: Array}}
 */
export function gif2video(gif) {
  if (!gif) {
    throw new Error(ERROR_NO_PARAM)
  }
  check(gif)

  const {src} = gif

  let sources = SUPPORTED_FORMATS.map(format => ({
    tagName: 'source',
    attributes: {
      src: `${src}gif2video/-/format/${format}/`,
      type: `video/${format}`,
    },
  }))

  return {
    tagName: 'video',
    attributes: {
      'autoplay': true,
      'loop': true,
      'muted': true,
      'webkit-playsinline': true,
      'playsinline': true,
    },
    sources,
  }
}
