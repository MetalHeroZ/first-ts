import _ from 'lodash';

const data = [
  {
    username: 'vlad',
    role: 'admin'
  },
  {
    username: 'valentina',
    role: 'seller'
  },
  {
    username: 'jose',
    role: 'seller'
  },
  {
    username: 'maria',
    role: 'customer'
  }
];

const rta = _.groupBy(data, (item) => item.role)
console.log(rta);
