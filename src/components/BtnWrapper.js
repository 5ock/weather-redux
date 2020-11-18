import React from 'react';
import LocationBtn from '../contaners/LocationBtn';

import '../assets/btnWrapper.css'

const BtnWrapper = () => {
    return (
        <div className="loactionBlock">
            <LocationBtn className="btn" locationName='臺北市' />
            <LocationBtn className="btn" locationName='新北市' />
            <LocationBtn className="btn" locationName='臺中市' />
        </div>
    )
};

export default BtnWrapper;

