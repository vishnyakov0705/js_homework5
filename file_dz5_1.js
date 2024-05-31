let obj = 
{
  name: 'Sirko',
  age: 32,
  occupation: 'User',
  getInfo: function() 
  {
    for (let key in this) 
    {
      if (this.hasOwnProperty(key) && typeof this[key] !== 'function') 
      {
        console.log(key + ': ' + this[key]);
      }
    }
  }
};

//метод getInfo
obj.getInfo();

//новa властивість до об'єкта
obj.newProperty = 'New value';

//викликаємо метод getInfo, щоб побачити всі властивості, включаючи нову
obj.getInfo();