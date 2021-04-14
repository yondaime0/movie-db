import React from 'react';

const Sort = React.memo(function Sort({
  activeSortType,
  items,
  onClickSortType,
}) {
  return (
    <div className="sort">
      <span>Сортувати по:</span>
      <div className="sort-list">
        {items.map((data, index) => {
          return (
            <li
              className={`sort-list__item ${
                activeSortType === data.type ? 'active' : ''
              }`}
              onClick={() => onClickSortType(data.type)}
              key={`${data.name}_${index}`}
            >
              {data.name}{' '}
              {activeSortType === data.type ? (
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
      </div>
    </div>
  );
});

export default Sort;
