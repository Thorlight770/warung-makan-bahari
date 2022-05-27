import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CustomerForm } from './CustomerForm'
import { CustomerList } from './CustomerList'
import { NotFoundPage } from './NotFoundPage'

export const Customer = () => {
  return (
    <Routes>
      <Route index element={<CustomerList/>}/>
      <Route path='form' element={<CustomerForm/>}/>
      <Route path='list' element={<CustomerList/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  )
}
