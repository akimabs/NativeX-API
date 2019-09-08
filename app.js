require('express-group-routes')

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    PORT = process.env.PORT || 3000

console.log(process.env.DATABASE_URL);

const menuController = require('./controllers/menu')
const categoriesController = require('./controllers/categories')
const transactionController = require('./controllers/transactions')
const orderController = require('./controllers/orders')


app.use(bodyParser.json())
app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/api/v1', (req, res) => res.send('Wellcome to NativeX-API'))

app.group('/api/v1', (router) => {
    // Auth Routes
    router.post('/menu', menuController.store)
    router.get('/menus', menuController.indexAll)
    router.get('/menus/:id', menuController.index)
    router.get('/menu/:id', menuController.show)
    // router.patch('/menu/:id')
    router.delete('/menu/:id', menuController.delete)

    // Categories Routes
    router.post('/category', categoriesController.store)
    router.get('/categories', categoriesController.index)
    router.get('/category/:id', categoriesController.show)
    // router.patch('/menu/:id')
    router.delete('/category/:id', categoriesController.delete)

    // Transactions Routes
    router.post('/transaction', transactionController.store)
    router.get('/transactions', transactionController.index)
    router.get('/transaction/:id', transactionController.show)
    router.patch('/transaction/:id', transactionController.patch)
    router.delete('/transaction/:id', transactionController.delete)

    // Transactions Routes
    router.post('/order', orderController.store)
    router.get('/order/:id', orderController.index)
    router.get('/orders', orderController.indexAll)
    router.get('/order/:id', orderController.show)
    // router.patch('/menu/:id')
    router.delete('/order/:id', orderController.delete)
})



app.listen(PORT, () => console.log(`listening on port ${PORT}!`))
