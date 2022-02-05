import React from 'react'
import Spinnerimg from './spinner.gif';
function Spinner() {
    return (
        <div className="text-center">
            <img src={Spinnerimg} alt="loading" />
        </div>
    )
}

export default Spinner
