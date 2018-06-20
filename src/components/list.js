import React from 'react';
import listData from '../data/list';

export default props => {
    console.log('List Data:', listData);
    const listElements = listData.map((item, index) => {
        return <li className='collection-item' key={index}>{item.title}</li>
    })

    return (
        <ul className='collection'>
            {listElements}
        </ul>
    )
};