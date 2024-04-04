import React from 'react';
import { c } from 'vite/dist/node/types.d-aGj9QkWt';

function Container({children}) {
    return (
        <div className='w-full max-w-7xl mx-auto px-4'>
            {children}
        </div>
    );
}

export default Container;