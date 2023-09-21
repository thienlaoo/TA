import { CreateHero } from "../types/Hero";

export async function postHelper(heroData: CreateHero) {
    const url = 'http://localhost:3001/heroes';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(heroData)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data && data.success) {
        return data;
    } else {
        throw new Error('Failed to create hero');
    }
}
