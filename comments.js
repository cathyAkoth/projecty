//user visits browser  at http://localhost:3804/
//   - browser conducts READ operation by sending a GET request to the server
//   - server recieves a GET request and handles it using the express get() method
// - this express get() method has 2 argument app.get(path/endpoint, callback)
// the first arg = path/endpoint: appears after the domain name ('/')
// the endpoints should match
// the second arg:  = a call back has 2 args also (req,res), it used the res object
// to send a responce back to the browser. it does this by using the send() method (res.send())
// For callbacks: we are using ES6 arrow functions instead of the older way of writing function
