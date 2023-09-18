import { Header } from '../Header';
import { Footer } from '../Footer/Footer';
import { Cardlist } from '../Cardlist/Cardlist';
import { useEffect} from 'react';
import { getAllHeroes } from '../Helpers/fetchHelper';
import { useDispatch, useSelector } from 'react-redux';
import { setHeroes } from '../Redux/actions';
import { RootState } from '../types/Hero';



  export const Main = () => {
    const dispatch = useDispatch();
    
    const heroes = useSelector((state: RootState) => state.heroes);

    useEffect(() => {
        getAllHeroes('http://localhost:3001/heroes')
            .then((data) => {
                dispatch(setHeroes(data));
            })
            .catch((error) => {
                console.log('Fetch error:', error);
            });
    }, [dispatch]);

    return (
        <div className="App">
            <Header />
            <Cardlist heroes={heroes} />
            <Footer />
        </div>
    );
}