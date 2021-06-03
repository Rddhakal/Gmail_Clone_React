import React from 'react'
import '../styles/SideBarOption.css';

const SideBarOption = ({ name, icon }) => {
    return (
        <>
            <div className="sidebar_option">
                {icon}
                <p>{name}</p>
            </div>
        </>
    )
}

export default SideBarOption
