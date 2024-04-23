import { useState } from "react";
import { FormArticle } from "../../components/articles-form/articles-form";
import { useQuery } from 'react-query';
import { createArticle, fetchArticles } from '../../services/Articles';
import './articles.css';

export const Articles = () => {

  const { data, isLoading } = useQuery({
    queryKey: ["fetchArticles"],
    queryFn: () => fetchArticles()
  });

  const [showFormArticle, setShowFormArticle] = useState(false);

  const createNewArticle = () => {
    setShowFormArticle(true);
  }

  const onCreateNewArticle = async (article) => {
    try {
      await createArticle(article);
    } catch (error) {
      console.log("error")
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <button onClick={createNewArticle}>Crear Nuevo</button>
      {
        showFormArticle &&
        <FormArticle onSubmit={onCreateNewArticle}/>
      }
      {
        data.map((article) => {
          return <div className="articulo">
          <div className="articulo-imagen">
            <img src={article.image} alt={article.nombre} />
          </div>
          <div className="articulo-info">
            <h2>{article.title}</h2>
            <p>{article.number}</p>
            <p>Marca: {article.brand}</p>
            <p>Precio: {article.price}</p>
            <p>Description: {article.description}</p>
          </div>
        </div>
        })
      }
    </>
  );
}