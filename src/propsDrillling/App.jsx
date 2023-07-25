import React, { Component } from 'react'
import Table from './Table'

export default class App extends Component {
  render() {

    const userdata = [

      {
        name: "jsp",
        id: 786
      },
      {
        name: "qsp",
        id: 366
      },
      {
        name: "king",
        id: 673
      }
    ]
    return (
      <div>
        <Table user={userdata} />
      </div>
    )
  }
}
