var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date= data.date;
    var content = data.content;
    var HTMLTemplate =  `
    <html>
        <head>
            <title>
                ${title}
            </title>
             <link href = "/ui/style.css" rel="stylesheet"/>
            <style>
           
            </style>
        </head>
       
        <body>
            <div class = "container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    
    return(HTMLTemplate);
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one', function (req, res) {
   res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/main.js', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'main.js')); 
});
var articleOne = {
    title: 'Article One | Tushar Maurya',
    heading: 'Article One',
    date: 'Aug 4, 2017',
    content: ` <p>
                    content goes here. content goes here. content goes here. content goes here. content goes here. content goes here. content goes here. content goes here. content goes here. content goes here.
                </p>
                <p>
                    content goes here. content goes here. content goes here. content goes here. content goes here. content goes here. content goes here. content goes here. content goes here. content goes here.
                </p>
                <p>
                    content goes here. content goes here. content goes here. content goes here. content goes here. content goes here. content goes here. content goes here. content goes here. content goes here.
                </p>`
    
    
};



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
