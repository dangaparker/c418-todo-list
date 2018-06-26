import React from 'react';

export default props => {
    console.log('item props', props)
    return (
        <li className='collection-item row blue lighten-5 to-do-item'>
            <div className={`col s10 ${props.complete ? 'complete' : ''}`}>
                {props.title}
            </div>
            <div className="col s2 right-align">
                <button  onClick={props.delete} className='btn red'>Delete</button>
            </div>

        </li>
    )
}