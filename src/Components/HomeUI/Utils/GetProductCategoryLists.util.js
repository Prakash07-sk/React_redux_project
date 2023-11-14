import axios from 'axios';
import { API_Details } from '../../../Redux/Service/APIData';
import { ProductListLoader, RevertProductList, UpdateProductCatagory } from '../../../Redux/Store/ProductListDetails/ProductListDetails.slice';


export const GetProductCategoryList = () => 
async dispatch => {

    dispatch(ProductListLoader());
    try {

        const response = await axios.get(`${API_Details?.rootAPI}/categories`)

        if(response?.data) {
            dispatch(UpdateProductCatagory(response?.data));
        }
    }
    catch(err) {
        dispatch(RevertProductList());
    }
}

