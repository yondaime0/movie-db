import React from 'react';

const Categories = React.memo(function Categories({
  categoryNames,
  activeCategory,
  onClickCategory,
}) {
  return (
    <div className="category">
      <ul className="category-list">
        {categoryNames.map((name, index) => {
          return (
            <li
              className={`category-list__item  ${
                activeCategory === index ? 'active' : ''
              }`}
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}
            >
              {name}{' '}
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
                ''
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Categories;
