import React from 'react';
import './FormInput.css';

function FormInput({handleChange, label, ...otherProps}){
   return (
       <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps} required/>
            {label? (<label className={`${otherProps.value.length?'shrink':''} form-input-label`}>{label}</label>):null}
       </div>
   );
}

export default FormInput;