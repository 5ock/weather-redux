import React from 'react'

const Btn = ({className, locationName, onClick, disable}) => {
    return (
        <>
            <button className={className} type="button" onClick={onClick} disabled={disable}>{locationName}</button>
        </>
    )
}

export default Btn;