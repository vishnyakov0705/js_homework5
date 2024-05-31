let services = 
{
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",
  price: function() 
  {
    let total = 0;
    for (let service in this) 
    {
      if (typeof this[service] === 'string' && this[service].includes('грн')) 
      {
        total += parseInt(this[service]);
      }
    }
    return total;
  },
  minPrice: function() 
  {
    let min = Infinity;
    for (let service in this) 
    {
      if (typeof this[service] === 'string' && this[service].includes('грн')) 
      {
        let price = parseInt(this[service]);
        if (price < min) {
          min = price;
        }
      }
    }
    return min;
  },
  maxPrice: function() 
  {
    let max = -Infinity;
    for (let service in this) 
    {
      if (typeof this[service] === 'string' && this[service].includes('грн')) 
      {
        let price = parseInt(this[service]);
        if (price > max) {
          max = price;
        }
      }
    }
    return max;
  }
};

//нові послуги
services['Розбити скло'] = "200 грн";
services['Зломати крісло'] = "3000 грн";


console.log("Загальна вартість послуг: " + services.price() + " грн");
console.log("Мінімальна вартість послуг: " + services.minPrice() + " грн");
console.log("Максимальна вартість послуг: " + services.maxPrice() + " грн");