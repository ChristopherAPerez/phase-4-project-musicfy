import React from 'react';


function Options( { option } ){

    console.log(option)

    return (
        <option value={option}>{option}</option>
    )
}

export default Options;