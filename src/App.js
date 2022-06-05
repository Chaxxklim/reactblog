/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
	let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천','여자 코트 추천', '재린 코트 추천']);
  let [따봉, 따봉변경] = useState(0);
  
  
  let [logo, setLogo] = useState('ReactBlog');
  // let num = [1, 2];
  // let [a, c] = [1, 2];
  // let a = num[0];
  // let c = num[1];
  // 열심히해야지

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
        <input value='글제목변경' type='button' onClick={()=>{
          let copy = [...글제목];
          copy[0] = '노래하는코트 추천';
          글제목변경(copy);
        }}>
        </input>
      </div>

      <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>{따봉변경(따봉 + 1)} }>좋아요😍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p> 
      </div>
      
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p> 
      </div>
      
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p> 
      </div> 
      
    </div>
  );
}

export default App;
