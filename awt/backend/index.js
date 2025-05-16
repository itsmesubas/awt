const app = require('express')()

let quotes = [
    {
    'name': 'Dipesh',
    cast: 'Adhikari',
    age: '22',
    address: 'hemja'
    },
    {
    'name': 'Subash',
    cast: 'Dahal',
    age: 22,
    address: 'Hemja'
    }
    
]

app.get('/',(req,res) => {
    res.send('Hello World');
});
app.get('/quotes', (req,res) => {
    res.json(quotes);
});
app.post ('/quotes',(req,res)=>{
    const newQuote={id: Date.now(),text: req.body.text};
    quotes.push(newQuote);
    res.status(201).json(newQuote);
});


app.listen(3000, ()=>{
    console.log('Server is running');
})