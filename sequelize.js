const Sequelize = require('sequelize')
const AuthorModel = require('./models/author')
const BookModel = require('./models/book')
// const {database1, root, pasword, localhost, mysql} =require('./constants')
const sequelize = new Sequelize('database1', 'root', 'password', {
host: 'localhost',
dialect: 'mysql',
pool: {
max: 10,
min: 0,
acquire: 30000,
idle: 10000
}
})



sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully praveen.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const Book = BookModel(sequelize, Sequelize)
const Author = AuthorModel(sequelize, Sequelize)
// Author has Many to book
Author.hasMany(Book)
sequelize.sync({ force: false })
.then(() => {
console.log(`Database & tables created here!`)
})
module.exports = {
Author,
Book
}