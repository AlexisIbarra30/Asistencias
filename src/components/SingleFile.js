import React from 'react';

const SingleFile = (props) => (
    <div className='registerItem'>
        <div className='imageContainer'>
            <img className='registerimage' src='./images/doc.png' />
            <p className='loginText'> {props.name} </p>
        </div>
        <button onClick={ () => {
            props.handleDelete(props.index)
        }}> remover </button>
    </div>
);

export default SingleFile;