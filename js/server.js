const http = require('http');

// Формеруем запрос
const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts',
    method: 'GET'
};


// Отправляем запрос
const req = http.request(options, (res) => {
    let data = ''

    res.on('data',(chunk) => {
        data += chunk;
    });
    //Завершаем хапрос
    res.on('end', () => {
        console.log('Body:',JSON.parse(data))
    })
    .on('error', (err) => {
        console.log('Error:',err)
    }).end();
});

const host = 'localhost';

// or port 3000
const port = '8000';

// http://localhost:8000

const requestlistener = function (req, res) {
    res.writeHead(200);
    res.end('Hello.server working well!');
}

const server = http.createServer(requestlistener);
server.listen(port, host, () => {
    console.log(`Сервер запущен на http://${host}${port}`)
});