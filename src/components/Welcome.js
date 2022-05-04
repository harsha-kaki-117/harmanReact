import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
      const {name,alias} = this.props
    return (
      <div>Welcome mr {name} and your alias is {alias}</div>
    )
  }
}

export default Welcome