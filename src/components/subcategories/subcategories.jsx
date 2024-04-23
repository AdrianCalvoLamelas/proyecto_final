import './subcategories.css';
import PropTypes from 'prop-types';

export const Subcategories = ({subcategories}) => {

  const handleClick = () => {
    window.location = '/articles';
  };

  return(
    <div className='container'>
      {
        subcategories.length &&
        subcategories.map((subcategorie, index) => {
          return <div
            key={index} className="category-item"
            onClick={() => handleClick(subcategorie)}
          >
            <img src={subcategorie.image} alt='imagen'/>
            <p>{subcategorie.title}</p>
          </div>
        })
      }
    </div>
  )
}

Subcategories.prototypes = {
  subcategories: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })),
  onSelect: PropTypes.func.isRequired
}