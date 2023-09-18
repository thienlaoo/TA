import './App.css';
import { Main } from './components/pages/Main';
import { CharPage } from './components/pages/Charpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './components/Redux/store';
import { Provider } from 'react-redux';

function App() {

    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Main />
                        </>
                    } />

                    <Route path="/heroes/:id" element={<CharPage />} />
                </Routes>
            </Router>
        </Provider>



    );
}

export default App;
