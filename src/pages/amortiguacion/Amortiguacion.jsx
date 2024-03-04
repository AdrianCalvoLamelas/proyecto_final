import { Categorias } from "../../components/categorias/Categorias"

export const Amortiguacion = () => {

  const categories = {
    type: 'Amortiguacion',
    sections: [
      {image: '', title: ''},
    ]
  }
  
  return(
    <Categorias categories={categories.sections}/>
  )
}