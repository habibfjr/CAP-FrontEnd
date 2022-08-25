import {legacy_createStore as createStore} from 'redux';
import rootReducer from './rootReducer';

const saveState = (state) => {
    const convertState = JSON.stringify(state)
    localStorage.setItem('state', convertState)
}

const loadState = () => {
    const convertedState = localStorage.getItem('state')
    if (convertedState === null){
        return undefined
    }
    return JSON.parse(convertedState)
}

const persistedState = loadState()

const store = createStore(rootReducer, persistedState)

store.subscribe(()=> saveState(store.getState()))

export default store