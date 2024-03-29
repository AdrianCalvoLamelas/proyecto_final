import { useState } from "react";
import { FormArticle } from "../../components/articles-form/articles-form";

export const Articles = () => {

  const articles = [
    {
      "nombre": "Bomba de combustible",
      "marca": "Bosch",
      "precio": "120.99€",
      "imagen": "url_de_la_imagen_1.jpg"
    },
    {
      "nombre": "Filtro de aire",
      "marca": "Mann-Filter",
      "precio": "15.50€",
      "imagen": "url_de_la_imagen_2.jpg"
    },
    {
      "nombre": "Pastillas de freno",
      "marca": "Brembo",
      "precio": "50.00€",
      "imagen": "url_de_la_imagen_3.jpg"
    },
    {
      "nombre": "Lámpara halógena H7",
      "marca": "Philips",
      "precio": "9.99€",
      "imagen": "url_de_la_imagen_4.jpg"
    }
  ];

  const [showFormArticle, setShowFormArticle] = useState(false);

  const createNewArticle = () => {
    setShowFormArticle(true);
  }

  const onCreateNewArticle = () => {
    alert('Creado');
  }

  return (
    <>
      <button onClick={createNewArticle}>Crear Nuevo</button>
      {
        showFormArticle &&
        <FormArticle onSubmit={onCreateNewArticle}/>
      }
      {
        articles.map((article) => {
          return <div className="articulo">
          <div className="articulo-imagen">
            <img src={article.imagen} alt={article.nombre} />
          </div>
          <div className="articulo-info">
            <h2 className="articulo-nombre">{article.nombre}</h2>
            <p className="articulo-marca">Marca: {article.marca}</p>
            <p className="articulo-precio">Precio: {article.precio}</p>
          </div>
        </div>
        })
      }
    </>
  );
}