import http from 'http';

const data = JSON.stringify({
  nickname: 'Superman',
  real_name: 'Clark Kent',
  origin_description: "He was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
  superpowers: 'solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...',
  catch_phrase: "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
  images: ['https://example.com/superman1.jpg', 'https://example.com/superman2.jpg'],
});

const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/heroes',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
};

const req = http.request(options, (res) => {
  let response = '';

  res.on('data', (chunk) => {
    response += chunk;
  });

  res.on('end', () => {
    if (res.statusCode === 201) {
      console.log('Created hero:', JSON.parse(response));
    } else {
      console.error('Error creating hero:', response);
    }
  });
});

req.on('error', (error) => {
  console.error('Request error:', error);
});

req.write(data);
req.end();
