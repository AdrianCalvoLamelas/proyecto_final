import { useState, useEffect, useContext } from "react";
import { FormArticle } from "../../components/articles-form/articles-form";
import { Article } from '../../components/article/article'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { Search } from '../../components/search/search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../context/auth/AuthContext';
import { useArticles } from '../../hooks/useArticles';
import 'react-toastify/dist/ReactToastify.css';
import './articles.css';

export const Articles = () => {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { categorieType } = useParams();
  const [showFormArticle, setShowFormArticle] = useState(false);
  const [isEditingArticle, setIsEditingArticle] = useState(false);
  const { user } = useContext( AuthContext );

  const { fetchArticles, createArticle, deleteArticle } = useArticles();
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const articles = await fetchArticles(categorieType);
      setData(articles);
      setIsLoading(false);
    } catch (error) {
      toast.error("Error al cargar los articulos");
      setIsLoading(false);
    }
  };

  const createNewArticle = () => {
    setShowFormArticle(true);
    setIsEditingArticle(true);
  }

  const onCancelForm = () => {
    setShowFormArticle(false);
    setIsEditingArticle(false);
  }

  const onSubmitNewArticle = async (article) => {
    try {
      article.subcategorieType = categorieType;
      await createArticle(article);
      setShowFormArticle(false);
      setIsEditingArticle(false);
      await fetchData();
      toast.success("Articulo guardado correctamente")
    } catch (error) {
      toast.error("Error al guardar el articulo");
    }
  }

  const onRemoveArticle = async (article) => {
    try {
      await deleteArticle(article._id);
      toast.success("Articulo eliminado correctamente");
      await fetchData();
    } catch (error) {
      toast.error("Error al eliminar el articulo");
    }
  }

  const onFilterByVehicle = (vehicle, model) => {
    if (!vehicle) {
      return setFilteredData();
    }

    if (model) {
      const df = data.filter(article => article.vehicleName === vehicle.name && article.vehicleModel === model);
      setFilteredData(df);
    } else {
      const df = data.filter(article => article.vehicleName === vehicle.name);
      setFilteredData(df);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div>
        <Search onSubmit={onFilterByVehicle}/>
      </div>
      <ToastContainer position="top-center"/>
      {
        !filteredData && !data.length && !showFormArticle &&
        <div className="no-data">No hay articulos que mostrar</div>
      }
      {
        filteredData ?
        filteredData.map((article) => {
          return <Article key={article._id} article={article} onRemoveArticle={onRemoveArticle} reloadData={fetchData} isEditingArticle={isEditingArticle}
          setIsEditingArticle={setIsEditingArticle}/>
        }) :
        data.map((article) => {
          return <Article key={article._id} article={article} onRemoveArticle={onRemoveArticle} reloadData={fetchData} isEditingArticle={isEditingArticle}
          setIsEditingArticle={setIsEditingArticle}/>
        })
      }
      {
        !showFormArticle && !isEditingArticle && user.role === 'admin' &&
        <div onClick={createNewArticle} className="new-article-container">
          <span>Añadir un nuevo Articulo</span>
          <FontAwesomeIcon icon={faPlusCircle} className="icon-articles"/>
        </div>
      }
      {
        showFormArticle &&
        <FormArticle onSubmit={onSubmitNewArticle} onCancel={onCancelForm}/>
      }
    </>
  );
}