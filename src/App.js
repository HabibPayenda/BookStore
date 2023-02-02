import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import BooksScreen from './Screens/BooksScreen';
import CategoriesScreen from './Screens/CategoriesScreen';
import Comment from './components/Comment';
import Edit from './components/Edit';
import Update from './components/UpdateProgress';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BooksScreen />} />
          <Route index element={<BooksScreen />} />
          <Route path="book/comments" element={<Comment />} />
          <Route path="book/update" element={<Update />} />
          <Route path="book/edit" element={<Edit />} />
          <Route path="categories" element={<CategoriesScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
