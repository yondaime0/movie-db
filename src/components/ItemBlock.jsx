import Item from "./Item";
import { Link } from "react-router-dom";

const ItemBlock = ({ isLoaded, category, itemsMovies, itemsTv }) => {
  return (
    <div className="item-block">
      {isLoaded ? (
        category === 0 ? (
          itemsMovies && itemsMovies.length === 0 ? (
            <div>Нічого не знайдено за цим запитом</div>
          ) : (
            itemsMovies &&
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
          )
        ) : itemsTv && itemsTv.length === 0 ? (
          <div>Нічого не знайдено за цим запитом</div>
        ) : (
          itemsTv &&
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
          })
        )
      ) : (
        Array(12)
          .fill(0)
          .map((_, index) => (
            <Link className="item-block-link" key={`${_}_${index}`}>
              <Item data={{ poster_path: false }} />
            </Link>
          ))
      )}
    </div>
  );
};

export default ItemBlock;
