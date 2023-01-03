(() =>{
  let prices = [1,2,3,4,5,1,'hola',true];
  // prices.push('asd');
  // prices.push(true);
  // prices.push({});
  prices.push(123);

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | object)[] = ['hola',true];
  mixed.push(123);
  mixed.push(false);
  mixed.push('asd');
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2,3,4,5,1];
  numbers.map(item => item * 2);
})();
