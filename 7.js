const userMap = new Map() ;
function addUser(age, name, mail) {
  const userInfo = { age, mail }  ;
  userMap.set(name, userInfo)  ;
}

function updateUser(age, name, mail) {
  if (userMap.has(name)) {
    const userInfo = userMap.get(name)  ;
    userInfo.age = age ;
    userInfo.email = mail ;
  }
}

function deleteUse(name) {
  userMap.delete(name) ;
}

addUser(23, "Kailash", "kailash@gmail.com");
addUser(19, "Vikram", "vikram@gamil.com");
console.log(userMap);

updateUser(22, "kailash", "example@gmail.com");
console.log(userMap);

deleteUse("vikram");
console.log(userMap);
