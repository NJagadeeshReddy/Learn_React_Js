import React from 'react';
import styled from 'styled-components';
let obj = {
  color: "red",
  backgroundColor: "green"
}
let Para = styled.p`
  color:blue;
  text-align:center;
`
let Button = styled.b`

  background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`
let ListItem = styled.li`
 color:white;
 margin-top:center;
`
let Img = styled.img`
 height:300px;
 width: 300px;
 gap:10px;
 cursor: pointer;
`

let Spans = styled.div`
 background-color: green;
 width: 100px;
 height: 100px;
 position:relative;
 top:50%;
 left: 50%;
 right: 50%;
 bottom: 50%;

`
function App1() {
  return (
    <>
      <h1 className="d">hello world</h1>
      <h1 style={obj}>good afternoon</h1>
      <h2 style={{ color: "red", borderColor: "pink", backgroundColor: "yellow" }}> jaga</h2>
      <p>siuahoiweqqoiewjqqjbkjebiu NOIWEAHOI OIQJOIWQEJ</p>
      <Para> qhoije  wqwnkqw iwqiio qwhoqw hiuwq howqjo</Para>
      <Button>cliked</Button>
      <ListItem>Apple</ListItem>
      <div className='img'>
        <Img src='/image/film-.webp' alt="flim"></Img>
        <Img src="/image/mountain.jpg" alt="mount"></Img>
        <Img src="/image/mario.jpg" alt="mario"></Img>
        <Img src="/image/mobile-phone.webp" alt='mobile'></Img>
      </div>
      <Spans></Spans>
    </>
  );
}

export default App1;
