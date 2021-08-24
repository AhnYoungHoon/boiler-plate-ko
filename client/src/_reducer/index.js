import { combineReducers} from 'redux';
import user from './user_reducer';

const rootReducer= combineReducers({ //여러 리듀서들을 combine리듀서스를 통해 rootReducer에서 하나로 합쳐줌
    user
})

export default rootReducer;