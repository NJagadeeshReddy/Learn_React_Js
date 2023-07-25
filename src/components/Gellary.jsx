import React from 'react'

const Gellary = (props) => {
    console.log(props) //objects
    let { image, name } = props
    return (
        <>
            <div className="main">
                <div className="head">
                    <img src={image} alt="im" />
                </div>
                <div className="body">
                    <h2>Jaga</h2>
                    <h1>{name}</h1>
                    <p>doloribus ipsam sed modi, expedita similique temporibus, ipsum amet ullam consequatur eius beatae consequuntur.</p>
                </div>
                <div className="foot">
                    <button className='btn' >readmore</button>
                </div>
            </div>

        </>
    )
}

export default Gellary
