import React from 'react';
import './CustomButton.css';

function CustomButton({size,children,inverted,...otherButtonProps}){
   return(
           <input {...otherButtonProps} className={`${size} ${inverted?'inverted':''}`}  value={children} readOnly/>
   );
}

export default CustomButton;