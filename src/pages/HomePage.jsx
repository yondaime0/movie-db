import ItemBlock from '../components/ItemBlock';
import Categories from '../components/Categories';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCategory,
  setSort,
  setPageIncrement,
  setPageDecrement,
} from '../redux/actions/filters';
import { fetchItems } from '../redux/actions/items';

import React from 'react';
import Sort from '../components/Sort';

const categoryNames = ['Фільми', 'Серіали'];
const sortItems = [
  { name: 'популярності', type: 'popular' },
  { name: 'рейтингу', type: 'top_rated' },
];

function HomePage() {
  const dispatch = useDispatch();
  const movies = useSelector(({ items }) => items.movies);
  const tv = useSelector(({ items }) => items.tv);
  const isLoaded = useSelector(({ items }) => items.isLoaded);
  const { category, sort, page } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchItems(category, sort, page));
  }, [category, sort, page]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSort(type));
  });

  const onSelectPageIncrement = React.useCallback(() => {
    dispatch(setPageIncrement());
  });

  const onSelectPageDecrement = React.useCallback(() => {
    dispatch(setPageDecrement());
  });

  return (
    <div className="content">
      <div>
        <Categories
          categoryNames={categoryNames}
          activeCategory={category}
          onClickCategory={onSelectCategory}
        />
        <Sort
          activeSortType={sort}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>

      <div className="block-wrapper">
        <h2>{category === 0 ? 'Фільми' : 'Серіали'}</h2>

        <ItemBlock
          category={category}
          itemsMovies={movies.results}
          itemsTv={tv.results}
        />
        <div className="btn-page">
          <button
            disabled={page === 1 ? true : false}
            onClick={() => onSelectPageDecrement()}
            className="previous-page-btn"
          >
            Попередня сторінка
          </button>
          <span>{page}</span>
          <button
            onClick={() => onSelectPageIncrement()}
            className="next-page-btn"
          >
            Наступна сторінка
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
