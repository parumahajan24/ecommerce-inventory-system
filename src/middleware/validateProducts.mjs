export const validateProducts = (product) => {
    if (!product.name) throw new Error('Product name is required');
    if (!product.price || isNaN(product.price)) throw new Error('Valid price is required');
    return true;
  };