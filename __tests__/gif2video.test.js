import {gif2video} from '../src/gif2video'

describe('gif2video', () => {
  test('throw error if no params', () => {
    expect(gif2video()).toThrow()
  })
})
