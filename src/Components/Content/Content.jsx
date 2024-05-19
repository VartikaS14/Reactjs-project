import React from 'react'
import './Content.css'

export const Content = ({
    title,
    description,
  }) => {
    return (
      <div className="content-container">
        {title && <h1 className="content-title">{title}</h1>}
        {description && <p className="content-description">{description}</p>}
        
      </div>
    );
  };
