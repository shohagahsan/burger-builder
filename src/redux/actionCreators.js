import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addIngredient = igtype => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        payload: igtype,
    }
}

export const removeIngredient = igtype => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        payload: igtype,
    }
}

export const updatePurchasable = () => {
    return {
        type: actionTypes.UPDATE_PURCHASABLE,
    }
}

export const resetIngredients = () => {
    return {
        type: actionTypes.RESET_INGREDIENTS,
    }
}

export const loadOrders = orders => {
    return {
        type: actionTypes.LOAD_ORDERS,
        payload: orders,
    }
}

export const loadOrderFailed = () => {
    return {
        type: actionTypes.LOAD_ORDER_FAILED,
    }
}

export const fetchOrders = () => dispatch => {
    axios.get("https://burger-builder-b136b-default-rtdb.firebaseio.com/order.json")
        .then(response => {
            dispatch(loadOrders(response.data));
        })
}