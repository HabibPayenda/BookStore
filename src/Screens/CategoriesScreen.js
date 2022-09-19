import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
import { checkStatus } from '../Redux/Categories/categories';

const CategoriesScreen = () => {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.categories.categories);
  return (
    <>
      <Header />
      <div>
        <button className="categoriesBtn" type="button" onClick={() => dispatch(checkStatus(true))}>
          Check Status
        </button>
        { categories[0] ? 'Available' : ''}
      </div>
    </>
  );
};

export default CategoriesScreen;
