(() => {
  let myDynamicVar: any;
  myDynamicVar = 123;
  myDynamicVar = 'hola';
  myDynamicVar = true;
  myDynamicVar = {};
  myDynamicVar = [];
  // etc.

  myDynamicVar = 'hola';
  const rta = (myDynamicVar as string).toLowerCase()
  console.log('rta', rta);

  myDynamicVar = 123;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log('rta2', rta2);

})();
