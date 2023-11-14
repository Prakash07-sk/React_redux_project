import axios from 'axios';
import { API_Details } from '../../../Redux/Service/APIData';
import { ProductListLoader, RevertProductList, UpdateProductList } from '../../../Redux/Store/ProductListDetails/ProductListDetails.slice';
import { GetProductCategoryList } from './GetProductCategoryLists.util';


export const GetProductBySearch = (payload) => 
async dispatch => {

    dispatch(ProductListLoader());
    try {

        const params = {
            q: payload
        }
        const response = await axios.get(`${API_Details?.rootAPI}/search`, {params});

        if(response?.data) {
            dispatch(UpdateProductList(response?.data?.products));
        }
    }
    catch(err) {
        dispatch(RevertProductList());
    }

    
}

export const getInitialProducts = () => 
async dispatch => {

    dispatch(ProductListLoader());
    axios.get(API_Details?.rootAPI)
    .then(response => {
        dispatch(UpdateProductList(response?.data?.products));
        dispatch(GetProductCategoryList());
    })
    .catch(err => {
        dispatch(RevertProductList());
    })
};

export const getProductByCategory = (payload) => 
async dispatch => {

    dispatch(ProductListLoader());
    try {

        const response = await axios.get(`${API_Details?.rootAPI}/category/${payload}`);

        if(response?.data) {
            dispatch(UpdateProductList(response?.data?.products));
        }
    }
    catch(err) {
        dispatch(RevertProductList());
    }

    
}
