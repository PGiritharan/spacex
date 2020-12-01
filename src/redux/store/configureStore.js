import { createStore, combineReducers } from 'redux';
import constantReducer from '../reducer/constantReducer';
import filterReducer from '../reducer/filterReducer';
import launchReducer from '../reducer/launchReducer';

const configureStore = () => {
    const store = createStore(
        combineReducers({
            constants: constantReducer,
            filters: filterReducer,
            launches: launchReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};

export default configureStore;