(() => {
  type UserID = string | number;
  let userId: UserID;


  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    } else {
      console.log(`number ${userId.toFixed(1)}`);
    }
  }
  greeting(12, 'M');
  greeting(123, 'XL');
})();
