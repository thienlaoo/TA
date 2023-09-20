export async function deleteHero(heroId: number) {
    const endpoint = `http://localhost:3001/heroes/${heroId}`;

    try {
        const response = await fetch(endpoint, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return 'Hero deleted successfully';
    } catch (error) {
        console.error('Error deleting hero:', error);
        throw error;
    }
}