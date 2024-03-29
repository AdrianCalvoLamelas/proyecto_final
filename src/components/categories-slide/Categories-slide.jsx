import './Categories-slide.css';
import { useState } from "react";
import PropTypes from 'prop-types';

export const CategoriesSlide = ({categories, onSelect}) => {

  const [selectedCategoria, setSelectedCategoria] = useState(null);

  const handleClick = (categoria) => {
    setSelectedCategoria(categoria);
    onSelect(categoria);
  };

  return (
    <div className="categorias-slider">
    {categories.map((categoria, index) => (
      <div
        key={index}
        className={`categoria ${selectedCategoria === categoria ? 'selected' : ''}`}
        onClick={() => handleClick(categoria)}
      >
        <img src={categoria.image} alt={categoria.name} />
        <h3>{categoria.name}</h3>
      </div>
    ))}
  </div>
  );
}


CategoriesSlide.prototypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })),
  onSelect: PropTypes.func.isRequired
}

