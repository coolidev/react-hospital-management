import React from 'react'
import "./NavItem.css"
function NavItem(props) {
    return (
        <div className="navItem">
            <p className = "navText">{props.linkName}</p>
        </div>
    )
}

export default NavItem
