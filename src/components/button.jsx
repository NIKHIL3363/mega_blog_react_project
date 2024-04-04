import React from 'react';

function Button({children,type='buttom',bgcolor='bg-blue-500',textcolor='text-white',classname='', ...props}) {
    return (
       <button className={`px-4 py-4 rounded-lg ${classname}${textcolor}${bgcolor}`} {...props}>
            {children}


       </button>
       


    );
}

export default Button;