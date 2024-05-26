import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext';

export const useArticles = () => {
  const { user, logout } = useContext(AuthContext);

  const createArticle = async (articleData) => {
    const response = await fetch('http://localhost:3001/api/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },
      body: JSON.stringify(articleData),
    });

    if (!response.ok) {
      if (response.status === 401) {
        logout();
      }

      throw new Error('Error');
    }

    return response.json();
  };

  const fetchArticles = async (subcategorieType) => {
    const response = await fetch(`http://localhost:3001/api/articles?subcategorieType=${subcategorieType}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        logout();
      }

      throw new Error('Error');
    }

    return response.json();
  };

  const deleteArticle = async (articleId) => {
    const response = await fetch(`http://localhost:3001/api/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        logout();
      }

      throw new Error('Error al borrar el artículo');
    }

    return response.json();
  };

  const updateArticle = async (updatedArticleData) => {
    const response = await fetch(`http://localhost:3001/api/articles/${updatedArticleData._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`,
      },
      body: JSON.stringify(updatedArticleData),
    });

    if (!response.ok) {
      if (response.status === 401) {
        logout();
      }

      throw new Error('Error al actualizar el artículo');
    }

    return response.json();
  };

  return {
    createArticle,
    fetchArticles,
    deleteArticle,
    updateArticle,
  };
};
