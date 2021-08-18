import React from 'react';


const Rating = (props) => {
    return (
        <div>
            <i className={`fas fa-star ${props.rating > 0 && "orange"}`}></i>
            <i className={`fas fa-star ${props.rating > 1 && "orange"}`}></i>
            <i className={`fas fa-star ${props.rating > 2 && "orange"}`}></i>
            <i className={`fas fa-star ${props.rating > 3 && "orange"}`}></i>
            <i className={`fas fa-star ${props.rating > 4 && "orange"}`}></i>
        </div>
    )
}
export default Rating