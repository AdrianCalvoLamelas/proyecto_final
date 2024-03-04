import { Categorias } from "../../components/categorias/Categorias"

export const Suspension = () => {

  const categories = {
    type: 'suspension',
    sections: [


      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},
      {image: '', title: ''},

    ]
  }
  
  return(
    <Categorias categories={categories.sections}/>
  )
}