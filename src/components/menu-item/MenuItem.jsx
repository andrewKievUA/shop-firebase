import React from 'react'
import "./menu-item.styles.scss"

export default function MenuItem({el}) {

   
    return (
      
    <div className={`${el.size?el.size:``} menu-item`}  style={{backgroundImage: `url(${el.imageUrl})`}}>

         
            <div className="content">
                <h1 className="title">{el.title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
     
    </div>
      
    )
}
