
export async function details(id) {
    const url = `https://5fc9346b2af77700165ae514.mockapi.io/products/${id}`;
    const response = await fetch(url);
    const body = await response.json();
    return body;
  }