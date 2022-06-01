import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CustomerForm } from './component/CustomerForm'
import { CustomerList } from './component/CustomerList'
import { NotFoundPage } from '../../layout/NotFoundPage'

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
