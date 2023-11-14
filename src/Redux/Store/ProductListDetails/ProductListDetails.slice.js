import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isLoading: false,
    productList: [],
    productCatagory: [],
    error: null
}

const ProductListSlicer = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        ProductListLoader: (state) => ({
            ...state,
            loading: true,
            error: null
        }),
        UpdateProductCatagory: (state, action) => ({
            ...state,
            loading: false,
            productCatagory: action.payload
        }),
        UpdateProductList: (state, action) => ({
            ...state,
            loading: false,
            productList: action.payload
        }),
        RevertProductList: () => ({
            ...initialState,
        })
    }
});

export const {ProductListLoader, UpdateProductCatagory, UpdateProductList, RevertProductList} = ProductListSlicer.actions;
export default ProductListSlicer.reducer;