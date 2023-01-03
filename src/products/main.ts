import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'Prod1',
  createdAt: new Date(1998,3,25),
  stock: 10,
});
addProduct({
  title: 'Prod2',
  createdAt: new Date(1998,4,7),
  stock: 12,
  size: 'S'
});

console.log(products);
const total = calcStock();
console.log('total', total);
