import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import ItemBlock from "../components/ItemBlock";

const SearchPage = () => {
  const { value } = useParams();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [searchTv, setSearchTv] = React.useState([]);
  const [searchMovie, setSearchMovie] = React.useState([]);
  const [activeCategory, setActiveCategory] = React.useState(0);

  const categoryNames = ["Фільми", "Серіали"];

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ccc9a4bc732f366b3a0a8622dd0ecc77&language=uk&query=${value}&page=1&include_adult=false`
      )
      .then(({ data }) => {
        setSearchMovie(data);
        setIsLoaded(true);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=ccc9a4bc732f366b3a0a8622dd0ecc77&language=uk&query=${value}&page=1&include_adult=false`
      )
      .then(({ data }) => {
        setSearchTv(data);
        setIsLoaded(true);
      });
  }, [value]);

  return (
    <div className="content">
      <div>
        <div className="category">
          <ul className="category-list">
            {categoryNames &&
              categoryNames.map((name, index) => {
                return (
                  <li
                    className={`category-list__item  ${
                      activeCategory === index ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory(index)}
                    key={`${name}_${index}`}
                  >
                    {name}
                    {""}
                    {activeCategory === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14px"
                        viewBox="0 0 24 24"
                        width="14px"
                        fill="#FFFFFF"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        <circle cx="12" cy="12" r="5" />
                      </svg>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="block-wrapper">
        <h2>
          Результати пошуку {activeCategory === 0 ? "фільмів" : "серіалів"} за
          запитом {value}:
        </h2>

        <ItemBlock
          isLoaded={isLoaded}
          category={activeCategory}
          itemsMovies={searchMovie.results}
          itemsTv={searchTv.results}
        />
      </div>
    </div>
  );
};

export default SearchPage;
