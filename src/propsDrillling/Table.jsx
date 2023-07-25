import React, { Component } from 'react'
import TableHead from "./TableHead"
import TableBody from "./TableBody"

export default class Table extends Component {
  render() {

    const { user } = this.props
    return (
      <div>
        <TableHead />
        <TableBody userdata={user} />
      </div>
    )
  }
}
