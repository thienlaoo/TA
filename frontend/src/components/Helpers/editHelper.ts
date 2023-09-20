import { Hero } from "../types/Hero";

export async function patchHero(id: string, updatedData: Hero) {
    try {
      const response = await fetch(`http://localhost:3001/heroes/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw error;
    }
  }