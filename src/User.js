import React from 'react';

const User = (props) => {
    return (
        <div>
            <h4> Name: {props.name}</h4>
            <h5> Job: {props.job}</h5>
        </div>
    )
}
export default User