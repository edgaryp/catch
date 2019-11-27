import numberToCurrency from './numberToCurrency';

class Products {
  constructor(products = null) {
    this.products = products;
  }
  setCurrencyToProducts(products) {
    return products.map(product => ({
      ...product,
      $salePrice: numberToCurrency(product.salePrice),
      $retailPrice: numberToCurrency(product.retailPrice)
    }));
  }
  getProducts() {
    return this.setCurrencyToProducts(this.products);
  }
}

export default Products;
