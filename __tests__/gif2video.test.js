import {ERROR_NO_PARAM, ERROR_NO_SRC, ERROR_SRC_NOT_STRING, ERROR_SRC_NOT_CDN} from '../src/error-messages'
import {gif2video} from '../src/gif2video'

const GIF_UUID = 'af0136cc-c60a-49a3-a10f-f9319f0ce7e1'
const GIF_URL = `https://ucarecdn.com/${GIF_UUID}/`

describe('gif2video', () => {
  test('to be a function', () => {
    expect(typeof gif2video).toBe('function')
  })
})

describe('gif2video throw error if', () => {
  test('no param', () => {
    expect(() => {gif2video()}).toThrow(ERROR_NO_PARAM)
  })

  test('param doesn\'t contain src', () => {
    expect(() => {gif2video({})}).toThrow(ERROR_NO_SRC)
  })

  test('src is not a string', () => {
    expect(() => {gif2video({src: {}})}).toThrow(ERROR_SRC_NOT_STRING)
  })

  test('src is not start from ucarecdn', () => {
    expect(() => {gif2video({src: 'https://placekitten.com/200/300'})}).toThrow(ERROR_SRC_NOT_CDN)
  })
})

describe('gif2video with only src return', () => {
  const result = gif2video({src: GIF_URL})

  test('object', () => {
    expect(typeof result).toBe('object')
  })

  test('object with tagName = "video"', () => {
    expect(result.tagName).toBe('video')
  })
})
