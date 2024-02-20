import PropTypes from 'prop-types';
import './Menu.css';

export const Menu = ({ selectedPath, elements }) => {

  return(

    <div className="sideBarMenu">
      <div >
        {elements.map((item) => (
          <div className="sideBarMenuItem">
            <a href={item.link} className={ selectedPath === item.link ? "selectedItem" : ""}>
              <div className="itemContent">
                <span className="label">{item.name}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

Menu.prototypes = {
  selectedPath: PropTypes.string,
  elements: PropTypes.object.isRequired
}