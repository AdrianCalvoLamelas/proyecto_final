import './Categories.css';
import { CategoriesSlide } from '../../components/categories-slide/Categories-slide';
import { Subcategories } from '../../components/subcategories/subcategories';
import { useState } from "react";
import { useQuery } from 'react-query';
import { fetchCategories } from '../../services/Categories';
import { Search } from '../../components/search/search';

export const Categories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["fetchCategories"],
    queryFn: () => fetchCategories(),
  });

  const [selectedCategoria, setSelectedCategoria] = useState(null);

  const handleSelectCategorie = (categorie) => {
    setSelectedCategoria(categorie);
  }

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Search/>
      <div className="categorias-container">
        <h2>LAS CATEGORÍAS DE REPUESTOS...</h2>
        <div className='categories-slide'>
          <CategoriesSlide categories={data} onSelect={handleSelectCategorie}/>
        </div>
        {
          selectedCategoria && <Subcategories subcategories={selectedCategoria.sections}/>
        }
      </div>
    </>
    
  );
}

