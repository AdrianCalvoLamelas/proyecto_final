import './Categories.css';
import { CategoriesSlide } from '../../components/categories-slide/Categories-slide';
import { Subcategories } from '../../components/subcategories/subcategories';
import { useState, useEffect } from "react";
import { useCategories } from '../../hooks/useCategories';

export const Categories = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { fetchCategories } = useCategories();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await fetchCategories();
        setData(categories);
        setIsLoading(false);
      } catch (error) {
        console.log("error")
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const [selectedCategoria, setSelectedCategoria] = useState(null);

  const handleSelectCategorie = (categorie) => {
    setSelectedCategoria(categorie);
  }

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <>
      <div className="categorias-container">
        <h2>LAS CATEGORÍAS DE REPUESTOS</h2>
        <div className='categories-slide'>
          <CategoriesSlide categories={data} onSelect={handleSelectCategorie}/>
        </div>
        {
          selectedCategoria && 
          <>
            <h2>SUBCATEGORÍAS</h2>
            <Subcategories subcategories={selectedCategoria.sections}/>
          </>
        }
      </div>
    </>
    
  );
}

