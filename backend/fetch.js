const heroData = {
    nickname: "super",
    real_name: "qwe",
    origin_description: "zxc",
    superpowers: "qweqweqweqweq",
    catch_phrase: "zxc",
    images: ['https://www.example.com/page1']
};

fetch('http://localhost:3001/heroes', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(heroData)
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Hero created successfully:', data);
    })
    .catch(error => {
        console.error('Error creating hero:', error);
    });
