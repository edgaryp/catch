const numberToCurrency = number => {
  return `$${number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
};

export default numberToCurrency;
