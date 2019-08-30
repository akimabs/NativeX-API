const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    port = 3000

app.use(bodyParser.json())
app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.send('Anajay lo'))

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}!`))
