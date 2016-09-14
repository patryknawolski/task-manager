var faker = require('faker')

function generateDatabase () {
  var users = []
  var usersQuantity = 5
  var tasks = []
  var tasksQuantity = 50

  // Generate users
  for (var id = 0; id < usersQuantity; id++) {
    var email = faker.internet.email()
    var password = faker.internet.password()
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    if (id === 0) {
      email = "test@test.com"
      password = "password"
      firstName = "Patryk"
      lastName = "Nawolski"
    }

    users.push({
      "id": id,
      "email": email,
      "password": password, 
      "first_name": firstName,
      "last_name": lastName,
    })
  }

  // Generate tasks
  for (var id = 0; id < tasksQuantity; id++) {
    var userId = getRandomNumberFromRange(0, usersQuantity - 1)

    tasks.push({
      "id": id,
      "userId": userId,
      "name": faker.lorem.sentence()
    })
  }

  return {
    "users": users,
    "tasks": tasks
  }
}

function getRandomNumberFromRange (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = generateDatabase