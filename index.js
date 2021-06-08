// Dependencies.
const express = require('express');

// Instantiations.
const app = express();

// configurations
app.set('view engine', 'pug');
app.set('views', './views');

//middleware.
app.use(express.urlencoded({extended: true}))
app.use('/home',(req, res, next) => {
  console.log("A new request received at " + Date.now());
  next();  
});

app.get('/home', (req, res) => {
 res.send('Home Page');
});




app.get('/about', (req, res) => {
 res.send('About Page');
});

// Routing
app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/index.html')
    //res.send('Homepage! Hello world.');
  });

  app.get('/me', (req, res) => {
  res.render('index');
  });

  // For invalid routes
  app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});
    
app.post('/', (req, res) => {
console.log(req.body) 
  })
  
app.get('/about',(req, res)=>{ // Get method taking 2 arguments 'req,res'
res.send('about page. nice')
})
// path parameters.
app.get('/user/:name',(req,res)=>{
res.send('hello'+req.params.name)
})

//Querry parameters.
app.get('/users', (req, res)=> {
res.send("This is class" + req.query.class + "cohort" +  req.query.cohort  )})
  
// Server
app.listen(3000, () => console.log('listening on port 3000'));// Should always be the last statement.// The listen method creates the server


