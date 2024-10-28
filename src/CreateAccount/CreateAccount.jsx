import React from 'react'
import '../CreateAccount/CreateAccount.css'
import Header from '../Components/Header/Header'
import Input from '../Components/Input/Input'
import { useNavigate } from 'react-router-dom'
import Button from '../Components/Button/Button'

const CreateAccount = () => {
    const navigate = useNavigate();

    const handleCreateAccount = () => {
        navigate('/')
    }

    return (
        <div className='page_decoration'>
            <Header />

            <div className='create-account-input'> 
                    <Input
                        labelName='Name'
                        inputType='text'
                        inputName='name'
                        placeholder=''
                    />
                    <Input
                        labelName='Surename'
                        inputType='text'
                        inputName='surename'
                        placeholder=''
                    />
                    <Input
                        labelName='Email'
                        inputType='email'
                        inputName='email'
                        placeholder='your@gmial'
                    />
                    <Input
                        labelName='Password'
                        inputType='password'
                        inputName='password'
                        placeholder=''
                    />
                    <Input
                        labelName='Reapet Password'
                        inputType='password'
                        inputName='password'
                        placeholder=''
                    />
                    <p>I agree with <a href="#">Terms & Conditions</a>. </p>
                    <div className='main-btn'>
                <Button handleChange={handleCreateAccount} className='main-btn-secondary' btnName='Create Account' />
                </div>
                </div>
            </div>
    )
}

export default CreateAccount
