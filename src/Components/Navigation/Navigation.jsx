import React from 'react'
import Button from '../Button/Button'
import './Navigation.css'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'


const Navigation = (props) => {


  const addContact = useNavigate()

  const contactAdd = () =>{
    addContact ('/add-contact')
  }

  return (
    <div>
      <Header/>
    <div className='search_section'>
    <div className='search-btn'>
      <Button  image = {<img src='./image/searchicon.png' alt='icon' />} text={props.text}/>
    </div>
    <div className='upadate_btn'>
    <Button handleChange = {contactAdd} image ={<img src='./image/addicon.png' alt='addContact button' />} />
    </div>
    </div>
    
    </div>
  )
}

export default Navigation
