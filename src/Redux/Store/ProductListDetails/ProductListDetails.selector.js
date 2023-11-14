import { createSelector } from "@reduxjs/toolkit";



 const getRetrieveData = (state) => state?.ProductListDetails;

 export const getProductList = createSelector(getRetrieveData, (state) => state?.productList);
 export const getProductCatagory = createSelector(getRetrieveData, (state) => state?.productCatagory);
 export const isPageLoading = createSelector(getRetrieveData, (state) => state?.isLoading);