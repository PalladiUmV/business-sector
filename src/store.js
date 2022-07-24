import { createStore } from 'redux';
import reducer from '../src/redux/reducers/reducer';



const store = createStore(reducer);
export default store;
