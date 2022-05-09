const coinConvert = (dollars) => {
    const soles = 3.25;
    const pesosMexicanos = 18;
    const pesosChilenos = 660;
  
    return [(soles*dollars), (pesosMexicanos*dollars), (pesosChilenos*dollars)];
  };
  
  module.exports = coinConvert;
  

