import * as actions from './actionType';

function reducer(state={}, action)
{
    switch(action.type)
    {
        case actions.CHANGE_TO_RED:
            return {
                color: 'red'
            }
        case actions.CHANGE_TO_BLUE:
            return {
                color: 'blue'
            }
        default:
             return state;

    }
}
export default reducer;
