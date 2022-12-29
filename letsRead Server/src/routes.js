const account = require('./controller/account')
const BooksController = require('./controller/BooksController')
const genreController = require('./controller/genreController')
const rating = require('./controller/rating')
const review= require('./controller/review')
const readlist= require('./controller/readlist')
const authentication = require('./policies/authentication')
const fellower = require('./controller/fellower')
const posts = require('./controller/posts')
const notify = require('./controller/notify')



module.exports=(app)=>{
    app.get('/books',
    BooksController.index)
    app.get('/search/:search',
    BooksController.searches)
    app.post('/books',
    BooksController.post)
    app.get('/books/:bookId',
    BooksController.show)
    app.put('/books/:bookId',
    BooksController.put)

    app.get("/genres/:name",
    genreController.show)

    //Accounts
    app.post('/SignUp',
    authentication.register,account.register)
    app.post('/session/new',
    account.login)
    app.put("/account",
    account.update)
    app.put("/account/password",
    account.changeP)
    app.get("/account",
    account.show)

    //ratings
    app.post("/review/ratings",
    rating.ratings)
    app.get("/review/ratings",
    rating.get)

    //review
    app.post("/reviews",
    review.post)
    app.get("/reviews/:bookid",
    review.show)

    //bookmarking Books
    app.post("/review/readlist",
    readlist.post)
    app.get("/review/readlist/show",
    readlist.show)
    app.delete("/review/readlist",
    readlist.delete)

    //felllow
    app.post("/user/fellow",fellower.post)
    app.delete("/user/fellow",fellower.delete)
    app.get("/user/fellow",fellower.show)

    //posts
    app.get("/post/show",posts.show)

    //notification
    app.get("/notify/show",notify.get)
}
