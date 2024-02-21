import PropTypes from 'prop-types';
import './Categorias.css';



export const Categorias = ({categories}) => {

  return(
    <div className='container'>
      {
        categories.map((categorie, index) => {
          return <div key={index}>
            <img src={categorie.image} alt='imagen'/>
            <p>{categorie.title}</p>
          </div>
        })
      }
    </div>
  )

}

Categorias.prototypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    imagen: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }))
}
