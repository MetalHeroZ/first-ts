(() => {
  const login = (data: {
    email: string,
    password: number,
  }) => {
    console.log(data.email, data.password);
  };

  // login('hola@yo.com', 'hi1234');
  login({
    email: 'hola@yo.com',
    password: 1234,
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  }) => {
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
  console.log(products);
})();
