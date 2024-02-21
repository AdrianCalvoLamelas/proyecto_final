import PropTypes from 'prop-types';
import './Menu.css';
import { pagesRoutes } from "../../routes/routes";
import LanguageSelector from "../language-selector/language-selector";

export const Menu = (selectedPath: string): JSX.Element => {

  return(

    <>
      <div className="sideBarMenu">
        <LanguageSelector />
        <div >
          {pagesRoutes.map((item) => (
            <div key={item.key} className="sideBarMenuItem">
              <a href={'/' + item.path} className={ selectedPath === item.path ? "selectedItem" : ""}>
                <div className="itemContent">
                  <span className="label">{item.key}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

Menu.prototypes = {
  selectedPath: PropTypes.string,
  elements: PropTypes.object.isRequired
}