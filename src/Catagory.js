import React from 'react'

const Catagory=({Catagories,Acatagory,filterItems}) => {
    return (
        <div className="btn-container">
            {Catagories.map((category, index) => {
        return (
          <button
            type="button"
            className={`${
              Acatagory === category ? "filter-btn active" : "filter-btn"
            }`}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
        </div>
    )
}

export default Catagory
