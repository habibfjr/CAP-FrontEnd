export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const REMOVE_ALL = 'REMOVE_ALL';
export const CHANGE_QTY = 'CHANGE_QTY';

export const addItemToCart = data =>{
    return {
        type: ADD_ITEM,
        value: data
    };
};

export const removeItemFromCart = data => {
    return {
        type: REMOVE_ITEM,
        value: data
    };
};

export const removeAllItem = data => {
    return {
        type: REMOVE_ALL,
        value: data
    }
}

export const changeItemQty = data => {
    return {
        type: CHANGE_QTY,
        value: data
    }
}