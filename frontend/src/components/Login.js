import React, { useRef, useState } from 'react' ; 
import { doAjax } from '../utils/ajax' ; 
import { Admin_dashboard } from './adminDashboard';
import { DashBoard } from './Dashboard';
import { Register } from './Register';
import '../containers/home.css';


export const Login =()=>{
    const userid = useRef(''); 
    const password =useRef('') ; 
    const[message , setMessage] = useState(''); 

    const doLogin =()=>{
        
        let uid = userid.current.value ; 
        let pwd = password.current.value ; 
        const userObject = {"userid":uid , "password":pwd} ; 
        const json = JSON.stringify(userObject) ; 
        console.log('JSON is --------- ', json, ' Object is----- ',userObject );
        const promise = doAjax('http://localhost:1234/login' ,'POST' , json) ;
        promise.then(response =>{
            response.json().then(data=>{
                setMessage(data.message) ; 
            }).catch(error =>{
                console.log("----------------------invalid JSON " , error) ; 
            })
        }).catch(err=>{
            console.log("Error on Server Call " , err) ; 
        })
    }

    if(userid.current.value === "Raghav"  && password.current.value === "Maheshwari"){
        return (<Admin_dashboard msg = {message}/>)
    }
    if(message.startsWith("Welcome")){
       // return(<h1>Success</h1>)
       console.log("------------YESSSSSSSSSSSSSSSSSSSSSSSSSS") ; 
         return (<DashBoard msg = {message}/>)
    }
    else{
        console.log("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO") ; 
        return(
            <>
            <div className = "flex-container">
                <div className = "row">
                    <div className ="col-md-6">
                        <h1>Login</h1>
        <h2>{message}</h2>
        <div className='form-group'>
            <label>Userid</label>
            <input ref={userid} className='form-control' type='text' placeholder='Type Userid Here'/>
        </div>
        <div className='form-group'>
            <label>Password</label>
            <input ref={password} className='form-control' type='password' placeholder='Type Password Here'/>
        </div>
        <br />
        
        <div className='form-group'>
            <button onClick={doLogin} className='btn btn-primary'>Login</button>
            &nbsp;&nbsp;
            <button className='btn btn-secondary' onClick ={(e) => { e.preventDefault();window.location.href='http://localhost:3000';}}>Reset</button>    
            </div>
            </div>
            
            <div className = "col-md-6">
                <Register/>
                </div>            
        </div>
        </div>
    </>
        )
    }
}
