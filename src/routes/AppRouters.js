import { Outlet, Route, Routes } from "react-router-dom";
import Home from '../page/home/Home';
import {ProductList} from '../page/product/component/ProductList';
import {ProductForm} from '../page/product/component/ProductForm';
import ProductListBloc from "../bloc/ProductListBloc";
import ProductFormBloc from '../bloc/ProductFormBloc';
import ProductService from '../page/product/services/ProductService';
import CustomerList from '../page/customer/component/CustomerList';
import CustomerForm from "../page/customer/component/CustomerForm";

const AppRouters = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Outlet />} >
                <Route index element={<ProductList bloc={() => ProductListBloc(ProductService)}/>} />
                <Route path="form" element={<ProductForm bloc={() => ProductFormBloc(ProductService)}/>} />
                <Route path="form/:id" element={<ProductForm bloc={() => ProductFormBloc(ProductService)}/>} />
            </Route>
            <Route path="customers" element={<Outlet />}>
                <Route index element={<CustomerList />} />
                <Route path="form" element={<CustomerForm />}/>
            </Route>
        </Routes>
    )
};

export default AppRouters;