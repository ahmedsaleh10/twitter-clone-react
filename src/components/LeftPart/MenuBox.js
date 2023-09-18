import React from 'react'

const MenuBox = (props) => {
  return (
    <div className="menuBox white-text">
        {props.item.icon}
        <p>{props.item.title}</p>
    </div>
  )
}

export default MenuBox