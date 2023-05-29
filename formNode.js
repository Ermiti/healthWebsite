import { createServer } from 'http';
import qs from 'querystring';
import fs from 'fs';


const server = createServer((req,res) => {
    if(req.url == '/' && req.method == 'GET') {
        res.setHeader('Content-Type' , 'text/html')
        //texts converted to farsi language with https://mothereff.in/html-entities# website
        //inlined css added 
        res.write(`
            <html>
                <head>
                    <title>contact code Amooz</title>
                </head>
                <body style="background:#ccc;">
                <h1 style="text-align: right;">&#x628;&#x631;&#x627;&#x6CC; &#x627;&#x631;&#x62A;&#x628;&#x627;&#x637; &#x628;&#x627; &#x645;&#x627; &#x641;&#x631;&#x645; &#x632;&#x6CC;&#x631; &#x631;&#x627; &#x62A;&#x6A9;&#x645;&#x6CC;&#x644; &#x6A9;&#x646;&#x6CC;&#x62F;</h1>
                <br>
                <form action="" method="POST">
                <label for="name"   style="display: block; margin-bottom: 5px; font-weight: bold; text-align: right;">&#x646;&#x627;&#x645; &#x634;&#x645;&#x627; :</label>
                <input name="name" id="name" style="box-sizing: border-box;
                width: 100%;
                padding: 10px;
                margin-bottom: 10px;
                border: 1px solid #ccc;"/>
                  <!--  <form action="" method="POST"> -->
                  <br>
                  <br>
                    <label for="question" style="display: block; margin-bottom: 5px; font-weight: bold; text-align: right;">&#x633;&#x648;&#x627;&#x644; &#x634;&#x645;&#x627; :</label>
                    <input name="question" id="question" style="box-sizing: border-box;
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 10px;
                    border: 1px solid #ccc;"/>
                    <br>  
                    <br>
              <!--  </form>
              <br>
                    <form action="" method="POST"> -->
                        <label for="email" style="display: block; margin-bottom: 5px; font-weight: bold; text-align: right;">&#x627;&#x6CC;&#x645;&#x6CC;&#x644; :</label>
                        <input name="email" id="email" style="box-sizing: border-box;
                        width: 100%;
                        padding: 10px;
                        margin-bottom: 10px;
                        border: 1px solid #ccc;"/> 
                        <br>
                        <br>
                        <button style=" padding: 10px; background-color: #0099ff; color: #fff; border: none; border-radius: 5px; cursor: pointer;">&#x627;&#x631;&#x633;&#x627;&#x644;</button>
                    </form> 
                   
                </body>
            </html>
        `)
        return res.end();
    }
        else if(req.url == '/' && req.method == 'POST') {
             let body = '';
             req.on('data' , (data) => {
                 body += data;
             })
             req.on('end' , () => {
                 let data = qs.parse(body);
                 fs.appendFileSync('example.sql' ,"\n" + "INSERT INTO myTable (theName, question, email) VALUES ("+ data.name + ", " + data.question +", " + data.email + ");");
                 res.writeHead(302 , {'Location' : '/result'})
                 res.end();
             })

    } else if(req.url == '/result') {
        
        res.setHeader('Content-Type' , 'text/html');
        //inlined css added 
        res.write(`
        <html>
        <title>Document</title>
            <head>
                <title>contact code Amooz</title>
            </head>
            <body>
            <br>
                <h2 style="color:red;">&#x627;&#x631;&#x633;&#x627;&#x644; &#x634;&#x62F;. &#x628;&#x647; &#x632;&#x648;&#x62F;&#x6CC; &#x67E;&#x627;&#x633;&#x62E; &#x631;&#x627; &#x628;&#x647; &#x627;&#x6CC;&#x645;&#x6CC;&#x644; &#x634;&#x645;&#x627; &#x645;&#x6CC;&#x641;&#x631;&#x633;&#x62A;&#x6CC;&#x645;</h2>
                
                  <!--  <button>send Data</button> -->
               
            </body>
        </html>
    `)
      //  res.writeHead()
        return res.end();
    }
})


server.listen(3000 , '127.0.0.1' , () => {
    console.log('server running on localhost:3000...')
})

