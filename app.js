require('express-group-routes')

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    PORT = 3000


const menuController = require('./controllers/menu')
const categoriesController = require('./controllers/categories')
const transactionController = require('./controllers/transactions')
const orderController = require('./controllers/orders')


app.use(bodyParser.json())
app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.send('Wellcome to NativeX-API'))

app.group('/api/v1', (router) => {
    // Auth Routes
    router.post('/menu', menuController.store)
    router.get('/menus', menuController.index)
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
    // router.patch('/menu/:id')
    router.delete('/transaction/:id', transactionController.delete)

    // Transactions Routes
    router.post('/order', orderController.store)
    router.get('/orders', orderController.index)
    router.get('/order/:id', orderController.show)
    // router.patch('/menu/:id')
    router.delete('/order/:id', orderController.delete)
})



app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}!`))
