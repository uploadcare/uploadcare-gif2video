import React, {Component} from 'react'
import gif2video from 'uploadcare-gif2video'

class Gif2Video extends Component {
  render() {
    const {tagName, attributes, children} = gif2video(this.props.src)

    return <tagName {...attributes}>
      {children.map(child => <child.tagName {...child.attributes}></child.tagName>)}
    </tagName>
  }
}

export default Gif2Video
