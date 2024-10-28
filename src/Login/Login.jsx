import React from 'react'
import '../Login/Login.css';
import Input from '../Components/Input/Input'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button'

const Login = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/no-contact'); // replace '/contact' with the actual route path to the Contact page
    };

    const createAccountClick = () => {
        navigate('/create-account'); // replace '/contact' with the actual route path to the Contact page
    };



    return (
        <div className='page_decoration'>
            <Header />
            <div className='input-page'>
                <Input
                    labelName='Email' //type email
                    inputType='email' //label name email
                    inputName='email'
                    placeholder='name@email.com'
                />
                <Input
                    labelName='Password' //type email
                    inputType='password' //label name email
                    inputName='password'
                    placeholder=''
                />

                <div className='support-btn'>
                    <Button btnName='Remember me' className ='btn-primary' />
                    <Button  btnName='Forgot password ?' className='btn-secondary'/>
                </div>

                <div className='main-btn'>
                    <Button handleChange={handleLoginClick} btnName='Login' className ='main-btn-primary' />
                    <Button handleChange={createAccountClick}  btnName='Create New Account' className='main-btn-secondary'/>
                </div>

            </div>
        </div>
    )
}

export default Login
