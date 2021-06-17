//required package 
const express = require('express');
const mongoose =  require('mongoose');
const cookieParser = require('cookie-parser');

//Linked local modules
// const captcha = require('./components/captch');
const upload = require('./components/resume');
const workbook = require('./components/workbook');
const authRoutes = require('./components/auth');
const { requireAuth, checkUser } = require('./components/authMiddleware');

// const { requireAuth } = require('./components/authMiddleware');

//express->app
const app = express();

//dynamic port
const port = process.env.PORT || 3000;


// predefined routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(captcha);
app.use(cookieParser());
app.unsubscribe(express.static('public'));
app.set('view engine', 'ejs');


    
// routes for internal pages
app.get('/', (_, res) => res.sendFile(__dirname + '/html/index.html'));
app.get('/success', (_, res) => res.sendFile(__dirname + '/html/Success.html'));
app.get('*', checkUser);
app.get('/admin', requireAuth , (_, res) => res.sendFile(__dirname + '/html/admin.html'));
app.use(workbook);
app.use(authRoutes);
app.use(upload);


// get css js img routes
app.get('/admin.css', (_, res) => res.sendFile(__dirname + '/css/admin.css'));
app.get('/index.css', (_, res) => res.sendFile(__dirname + '/css/index.css'));
app.get('/index.js', (_, res) => res.sendFile(__dirname + '/js/index.js'));
app.get('/admin.js', (_, res) => res.sendFile(__dirname + '/js/admin.js'));

app.get('/images/:img', (req,res)=>{res.set({'Content-Type': 'image/png'})
.sendFile(__dirname + '/public/images/' + `${req.params.img}`);});
app.use((_, res)=>{res.status(404).render('404',{ err: 'Invalid URL, specified URL not found' });
});


//start listening
app.listen(port, console.log(`Server running ${port}`));
