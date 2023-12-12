function property(obj, propName) {
    return obj.hasOwnProperty(propName);
  }
  
  const best = { name: "Alice", age: 25 };
  console.log(property(best, "name")); 
  console.log(property(best, "city")); 
  









