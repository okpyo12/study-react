import { useCallback, useState } from 'react';
import { Route, Routes } from '../node_modules/react-router-dom/index';
import Categories from './components/Categories';
import NewsList from './components/NewsList';
import NewPage from './pages/NewPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewPage/>}/>
      <Route path="/:category" element={<NewPage/>}/>
    </Routes>
  );
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => setCategory(category), []);

  // return (
  //   <>
  //     <Categories category={category} onSelect={onSelect} />
  //     <NewsList category={category} />
  //   </>
  // );
};

export default App;
