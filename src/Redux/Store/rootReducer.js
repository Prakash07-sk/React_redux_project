import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import ProductReducer from './ProductListDetails/ProductListDetails.slice';

const rootPersistConfig = {
    key: 'root',
    storage
};


const rootReducer = combineReducers({
    ProductListDetails: ProductReducer
})


export { rootPersistConfig, rootReducer };