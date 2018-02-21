import React from 'react';
import classes from './Person.css';

const person = (props) => {
    return (
        <div className={classes.Person}>
        <p onClick = {props.click}>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type='text' onChange = {props.nameChanged} value = {props.name}/>
        <input type='text' onChange = {props.ageChanged} value = {props.age}/>
        </div>
    )
};

export default person;