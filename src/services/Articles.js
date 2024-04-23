export async function createArticle(articleData) {
  const response = await fetch(`http://localhost:3001/api/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(articleData)
  });

  if (!response.ok) {
    throw new Error('Error');
  }

  return response.json();
}

export async function fetchArticles(subcategorieType = 'PASTILLA_FRENOS') {
  const response = await fetch(`http://localhost:3001/api/articles?subcategorieType=${subcategorieType}`);

  if (!response.ok) {
    throw new Error('Error');
  }
  return response.json();
}