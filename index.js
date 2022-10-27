const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./Data/categories.json');
const news = require('./Data/news.json');


app.get('/', (req, res) => {
    res.send('category running')
});

app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/news', (req, res) =>{
    res.send(news);
});


app.get('/category/:id/checkout', (req, res) => {
    const id = req.params.id;
    
        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news);
    
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '06') {
        res.send(news);
    }
    else {
        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news);
    }
})
app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    if (id === '06') {
        res.send(news);
    }
    else {
        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news);
    }
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
    
});

app.listen(port, () => {
    console.log('server running on port',port)
})