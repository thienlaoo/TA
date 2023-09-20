import http from 'http';

const dataCaptainMarvel = JSON.stringify({
    nickname: 'Captain Marvel',
    real_name: 'Carol Danvers',
    origin_description: "Carol Danvers was a U.S. Air Force pilot whose life changed when she was exposed to alien technology, giving her incredible powers...",
    superpowers: 'Superhuman strength, flight, energy projection, and absorption...',
    catch_phrase: "I'm Captain Marvel, and I'm here to save the day!",
    images: ["https://b1.filmpro.ru/c/822890.700xp.jpg", "https://content.onliner.by/news/1400x5616/02abde9abf99fcf677ad79614018e471.jpeg"],
    imageToShow: 0,
});

const optionsCaptainMarvel = {
    hostname: 'localhost',
    port: 3001,
    path: '/heroes',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': dataCaptainMarvel.length,
    },
};

const reqCaptainMarvel = http.request(optionsCaptainMarvel, (resCaptainMarvel) => {
    let responseCaptainMarvel = '';

    resCaptainMarvel.on('data', (chunk) => {
        responseCaptainMarvel += chunk;
    });

    resCaptainMarvel.on('end', () => {
        if (resCaptainMarvel.statusCode === 201) {
            console.log('Created hero (Captain Marvel):', JSON.parse(responseCaptainMarvel));
        } else {
            console.error('Error creating hero (Captain Marvel):', responseCaptainMarvel);
        }
    });
});

reqCaptainMarvel.on('error', (error) => {
    console.error('Request error (Captain Marvel):', error);
});

reqCaptainMarvel.write(dataCaptainMarvel);
reqCaptainMarvel.end();
