import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useContext } from "react";
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { ConfirmationModal } from '../confirm-modal/Confirm-modal';
import { AuthContext } from '../../context/auth/AuthContext';
import { FormArticle } from "../../components/articles-form/articles-form";
import { useArticles } from '../../hooks/useArticles';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './article.css'

export const Article = ({ article, onRemoveArticle, reloadData, isEditingArticle, setIsEditingArticle}) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showFormArticle, setShowFormArticle] = useState(false);
  const [articleEdit, setArticleEdit] = useState();
  const { updateArticle } = useArticles();
  const { user } = useContext( AuthContext );

  const handleRemoveArticle = () => {
    setShowConfirmationModal(true);
  };

  const handleConfirmRemove = () => {
    onRemoveArticle(article);
    setShowConfirmationModal(false);
  };

  const handleCancelRemove = () => {
    setShowConfirmationModal(false);
  };

  const onEditArticle = async (article) => {
    setArticleEdit(article);
    setIsEditingArticle(true);
    setShowFormArticle(true);
  }

  const onCancelForm = () => {
    setIsEditingArticle(false);
    setShowFormArticle(false);
  }

  const onSubmitNewArticle = async (article) => {
    try {
        await updateArticle(article);
        setArticleEdit();
        toast.success("Articulo guardado correctamente")
        await reloadData();
        setIsEditingArticle(false);
        return setShowFormArticle(false);
      
    } catch (error) {
      toast.error("Error al guardar el articulo");
    }
  }

  return (
    <>
    {
      showFormArticle ?
      <FormArticle onSubmit={onSubmitNewArticle} onCancel={onCancelForm} articleToEdit={articleEdit}/> :
      <div className="article">
        <ToastContainer position="top-center"/>
        <div className="article-imagen">
          <img src={article.image} alt={article.nombre} />
        </div>
        <div className="article-info">
          <h2>{article.title}</h2>
          <span>{article.number} {article.brand}</span>
          <p>{article.description}</p>
          <p>Compatible con: {article.vehicleName} {article.vehicleModel}</p>
          <p className="price">{article.price} €</p>
        </div>
        {
          user.role === 'admin' && !isEditingArticle &&
          <div className="actions">
            <FontAwesomeIcon icon={faTrashAlt} onClick={handleRemoveArticle} className="icon-articles"/>
            <FontAwesomeIcon icon={faEdit} onClick={() => onEditArticle(article)} className="icon-articles"/>
          </div>
        }
        {showConfirmationModal && (
          <ConfirmationModal
            message="¿Estás seguro de que quieres eliminar este artículo?"
            onConfirm={handleConfirmRemove}
            onCancel={handleCancelRemove}
          />
        )}
      </div>
    }
    </>
  );
};
