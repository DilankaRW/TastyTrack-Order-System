import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const initialValues={
  fullName:"",
  email:"",
  password:"",
  role:"ROLE_CUSTOMER"
}
export const RegisterForm = () => {
  const navigate=useNavigate()
  const handleSubmit=()=>{

  }
  return (
    <div>
      <Typography variant='h5' className='text-center'>
        Register
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
          as={TextField}
          name="fullName"
          label="full name"
          fullWidth
          variant="outlined"
          margin="normal"
          />

          <Field
          as={TextField}
          name="email"
          label="email"
          fullWidth
          variant="outlined"
          margin="normal"
          />
          
          <Field
          as={TextField}
          name="password"
          label="password"
          fullWidth
          variant="outlined"
          margin="normal"
          />

          <Button sx={{mt:2, padding:"1rem"}} fullWidth type='submit' variant='contained'>Register</Button>
        </Form>
      </Formik>
      <Typography variant='body2' align='center' sx={{mt:3}}>
        If have an account already?
        <Button size='small' onClick={()=>navigate("/account/register")}>login</Button>
      </Typography>
    </div>
  )
}
