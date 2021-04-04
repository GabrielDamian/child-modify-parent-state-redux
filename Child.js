import React from 'react';
import store from './Redux/store';
import {change_color_to} from './Redux/actionCreator';


function Element()
{
    function handleColor(new_color)
    {
        store.dispatch(change_color_to(new_color))
    }
    return(
        <>
        <p>Child element</p>
        <button onClick={()=>{handleColor('red')}}>Red</button>
        <button onClick={()=>{handleColor('blue')}}>Blue</button>
        </>
    )
}
export default Element;