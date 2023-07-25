import React from 'react'
import styled from 'styled-components'

let Img = styled.img`
 height:300px;
 width: 300px;
 border-radius: 10px;
 gap:20px;
 cursor: pointer;
`
let Div = styled.div`
  display: grid;
  grid-template-columns:auto auto auto;
  gap:20px;
`

const Gallary = () => {
    return (
        <>
            <h1><u>Image Gallary</u></h1>
            <Div>
                <Img src='/image/1.jpg' alt='1'></Img>
                <Img src='/image/film-.webp' alt="flim"></Img>
                <Img src='/image/2.jpg' alt='2'></Img>
                <Img src="/image/mario.jpg" alt="mario"></Img>
                <Img src='/image/WhatsApp .jpg' alt='my'></Img>
                <Img src="/image/mobile-phone.webp" alt='mobile'></Img>
                <Img src='/image/3.jpg' alt='3'></Img>
                <Img src="/image/mountain.jpg" alt="mount"></Img>
                <Img src='/image/4.jpg' alt='4'></Img>
            </Div>

        </>
    )
}

export default Gallary
