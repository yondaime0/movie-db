import Item from './Item';
import { Link } from 'react-router-dom';

function ItemBlock({ category, itemsMovies, itemsTv }) {
  return (
    <div className="item-block">
      {category === 0
        ? itemsMovies &&
          itemsMovies.map((data, index) => {
            return (
              <Link
                className="item-block-link"
                to={`/moviepage/${data.id}`}
                key={`${data.title}_${index}`}
              >
                <Item data={data} />
              </Link>
            );
          })
        : itemsTv &&
          itemsTv.map((data, index) => {
            return (
              <Link
                className="item-block-link"
                to={`/tvpage/${data.id}`}
                key={`${data.title}_${index}`}
              >
                <Item data={data} />
              </Link>
            );
          })}
    </div>
  );
}

export default ItemBlock;