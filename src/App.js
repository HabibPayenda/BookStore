import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import BooksScreen from './Screens/BooksScreen';
import CategoriesScreen from './Screens/CategoriesScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BooksScreen />} />
          <Route index element={<BooksScreen />} />
          <Route path="categories" element={<CategoriesScreen />} />
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
}

export default App;
