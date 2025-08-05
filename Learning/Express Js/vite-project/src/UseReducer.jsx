import React, {useReducer} from 'react';

function reduce(state, action) {
    switch(action.type) {
        case 'increment' : 
        return{count:state.count + 1}
        case 'decrement' : 
        return {count : state.count - 1}
        
        default : 
        throw new Error
        
    }
}



function ReducerHook() {
    return (
        <div>
            <p></p>
        </div>
    );
}

