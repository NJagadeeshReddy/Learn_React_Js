import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Api = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        // fetch("https://api.github.com/users")
        // .then(res => res.json())
        // .then(data=> { 
        //         console.log(data)
        //         setState(data)
        //     })

        axios.get("https://akabab.github.io/superhero-api/api/all.json")
            .then((res) => setState(res.data))
    }, [])

    return (
        <>
            <h1 className='hint' > Api data </h1>
            <div className='api'>

                {state.map((temp, index) => {
                    let { id, name, images } = temp
                    return (
                        <>
                            <ol className='ol'>
                                <h1 key={index}>userlist {index}</h1>
                                <li>{name}</li>
                                <li>{id}</li>
                                <li> <img src={images} height={80} width={20} alt="no imgae" /> </li>
                            </ol>
                        </>
                    )
                })}

            </div>
        </>
    )
}

export default Api
// https://jsonplaceholder.typicode.com/users