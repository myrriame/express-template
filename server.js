const express = require('express')
const app = express();
const PORT = 3005;

app.use(express.json());
app.use(express.urlencoded())
app.use(express.static('client'))

app.get('/', (req, res) => {
    res.send('index.html')
})

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
})