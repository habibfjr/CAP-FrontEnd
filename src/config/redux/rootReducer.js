import { combineReducers } from 'redux';

import productOrderReducer from './product-cart/reducer';

const rootReducer = combineReducers({
    productOrder: productOrderReducer
});

export default rootReducer;