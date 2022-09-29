import {Login} from '../components/Login' ; 
import { Register } from '../components/Register';
import React from 'react' ; 
import {Footer} from '../components/Footer';
import '../containers/home.css';
import Logo from '../components/Logo';

export const Home =()=>{
    return(
        <>
        <Logo/>
        <h1 className = 'text-center 'style={{color: "#F1F2F6" , backgroundColor: "#3242a3"}}>Rythm</h1>
        <Login/>
        <hr/>
        {/* <Register/> */}

        <hr/>
        <Footer/>

        </>
    );
}