import axios from 'axios';
import React, {useEffect} from 'react';
import Axios from 'axios';
import { useDispatch} from 'react-redux';
import { auth } from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null){
    //SpecificComponent : 컴포넌트 종류(랜딩,로그인, 레지스터..)
//option: null    =>  아무나 출입이 가능한 페이지
    //true    =>  로그인한 유저만 출입이 가능한 페이지
    //false   =>  로그인한 유저는 출입 불가능한 페이지
    //adminRoute:관리자만 들어가길 원한다면=>true

    function AuthenticationCheck(props){
        const dispatch=useDispatch();
        useEffect(() => {
            dispatch(auth()).then(response=>{
                console.log(response);
                //로그인하지 않은 상태
                if(!response.payload.isAuth){
                    if(option){ //option이 true인 경우 다른 페이지로 보냄(막음)
                        props.history.push('/login');
                    }
                }else{
                    //로그인 한 상태
                    if(adminRoute && !response.payload.isAdmin){//isAdmin이 false인경우
                        //Admin만 들어갈수있는 페이지
                        props.history.push('/');
                    }
                    else{
                        if(option === false){ //로그인한 유저가 출입불가능한 페이지
                            props.history.push('/');
                        }
                    }
                }
            })

           
        }, [])

        return (
            <SpecificComponent />
        )
    }
    return AuthenticationCheck;
}