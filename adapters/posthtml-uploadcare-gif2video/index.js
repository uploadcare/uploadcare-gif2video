const gif2video = require('uploadcare-gif2video')

module.exports = (tree) => {
  tree.match({tag: 'img'}, node => {
    if ((/^(http|https):\/\/ucarecdn\.com(.+?)\.video\.gif/).test(node.attrs.src)) {
      const {tagName, attributes, children} = gif2video({src: node.attrs.src})

      return {
        tag: tagName,
        attrs: attributes,
        content: children.map(child => ({
          tag: child.tagName,
          attrs: child.attributes,
        })),
      }
    }
  })
}
