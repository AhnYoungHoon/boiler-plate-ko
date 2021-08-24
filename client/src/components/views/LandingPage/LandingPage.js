import React, {useEffect} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'; 
//import { response } from 'express'; //Cannot read property 'prototype' of undefined에러 처리

function LandingPage(props){

    useEffect(()=>{
        axios.get('/api/hello') //서버에 보냄
        .then(response=> {console.log(response.data)}) //서버에서 돌아온 응답 콘솔에 띄움
    }, [])

    const onClickHandler = () =>{
        axios.get('/api/users/logout')
            .then(response=>{
                if(response.data.success){
                    props.history.push("/login");
                }
                else{
                    alert("로그아웃 불가능");
                }
            })
    }
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
             width: '100%', height: '100vh'
        }}>
            <h2>시작페이지</h2>

            <button onClick={onClickHandler}>로그아웃</button>
        </div>
    );
}

export default withRouter(LandingPage)