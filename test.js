const http = require('http');

const getOptions = {
    hostname: 'localhost',
    port: 5000,
    path: '/mahasiswa',
    method: 'GET'
};

const getReq = http.request(getOptions, (res) => {
    let data = '';

    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        console.log('GET /mahasiswa');
        console.log(JSON.parse(data));
    });
});

getReq.end();

const postData = JSON.stringify({
    id: 3,
    nama: 'Budi',
    jurusan: 'Sistem Informasi'
});

const postOptions = {
    hostname: 'localhost',
    port: 5000,
    path: '/mahasiswa',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length
    }
};

const postReq = http.request(postOptions, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        console.log('\nPOST /mahasiswa');
        console.log(JSON.parse(data));
    });
});

postReq.write(postData);
postReq.end();


const deleteOptions = {
    hostname: 'localhost',
    port: 5000,
    path: '/mahasiswa/1',
    method: 'DELETE'
};

const deleteReq = http.request(deleteOptions, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        console.log('\nDELETE /mahasiswa/1');
        console.log(JSON.parse(data));
    });
});

deleteReq.end();
