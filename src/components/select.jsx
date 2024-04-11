import React, { forwardRef, useId } from 'react';

function Select({
options,
label,
className,
...props




},ref) {

   const id=useId()

    return (
        <div className='w-full'>
            {

                label&&<label htmlFor={id} className=''></label>}
            
            <select {...props} id={id} ref={ref} className={`px-3 py-2 rounded-lg bg-white text-black border border-gray-200 w-full ${className}`}>


                       { options?.map((option)=>(


                        <option value={option} key={option}>
                            {option}

                        </option>
                       ))
                           


                       }

            </select>
            
            
            
        </div>
    );
}

export default React.forwardRef(Select)