import { Header } from '../Header';
import { Footer } from '../Footer/Footer';
import { Cardlist } from '../Cardlist/Cardlist';
import { Superman } from '../types/temp';

export const Main = () => {

    const supermens: Superman[] = [];

for (let i = 0; i < 20; i++) {
  const superman = {
    nickname: 'Superman',
    real_name: 'Clark Kent',
    origin_description:
      "He was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
    superpowers: [
      'solar energy absorption and healing factor',
      'solar flare and heat vision',
      'solar invulnerability',
      'flight',
    ],
    catch_phrase: 'Look, up in the sky, it\'s a bird, it\'s a plane, it\'s Superman!',
    images: [
      'https://example.com/superman1.jpg',
      'https://example.com/superman2.jpg',
    ],
  };

  supermens.push(superman);
}
   
  return (
    <div className="App">
        <Header/>
        <Cardlist supermens={supermens}/>
        <Footer/>
    </div>
  );
}