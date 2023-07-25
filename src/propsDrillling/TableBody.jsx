import React from 'react'

const TableBody = (props) => {

    console.log(props)
    const { userdata } = props
    const remove = (index) => {
        if (index === userdata.index) {
            return userdata
        }
    }
    const rows = userdata.map((user, index) => {
        return (
            <tr>
                <td>{user.name}</td>
                <td>{user.id}</td>
                <td><button onClick={() => remove(index)}>delete-{index}</button> </td>
            </tr>
        )
    })
    return (
        <div>
            <tbody>
                {rows}
            </tbody>

        </div>
    )
}

export default TableBody
