import http from 'http';

const updatedData = JSON.stringify({
  images: [
    "https://cdn.shazoo.ru/319341_YmJpleQwji_8181229a8c0f38e90398608707868778.jpg",
    "https://s0.rbk.ru/v6_top_pics/media/img/6/69/346933020499696.webp"
  ],
});

const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/heroes/12',
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': updatedData.length,
  },
};

const req = http.request(options, (res) => {
  let response = '';

  res.on('data', (chunk) => {
    response += chunk;
  });

  res.on('end', () => {
    if (res.statusCode === 200) {
      console.log('Updated hero:', JSON.parse(response));
    } else {
      console.error('Error updating hero:', response);
    }
  });
});

req.on('error', (error) => {
  console.error('Request error:', error);
});

req.write(updatedData);
req.end();
