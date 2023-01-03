(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data)
  };

  addProduct({
    title: 'Prod1',
    createdAt: new Date(1998,3,25),
    stock: 12,
  });
  addProduct({
    title: 'Prod2',
    createdAt: new Date(1998,4,7),
    stock: 12,
    size: 'S'
  });
  products.push({
    title: 'Prod3',
    createdAt: new Date(1998,9,7),
    stock: 2,
    size: 'XL'
  });
  console.log(products);
})();
