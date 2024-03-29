export async function fetchCategories() {
  const response = await fetch(`http://localhost:3000/api/categories`);

  if (!response.ok) {
    throw new Error('Error');
  }

  return response.json();
}