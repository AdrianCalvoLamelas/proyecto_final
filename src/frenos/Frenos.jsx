import { Categorias } from "../components/categorias/Categorias"

export const Frenos = () => {

  const categories = [
    {image: 'https://scdn.autodoc.de/catalog/categories/100x100/10130.png', title: 'Pastillas de Frenos'},
    {image: 'https://scdn.autodoc.de/catalog/categories/100x100/10132.png', title: 'Discos de Frenos'},
    {image: 'https://scdn.autodoc.de/catalog/categories/100x100/10907.png', title: 'Pinzas de Frenos'},
    {image: 'https://scdn.autodoc.de/catalog/categories/100x100/12308.png', title: 'Líquido de Frenos'},
    
  ]
  return(
    <Categorias categories={categories}/>
  )
}