import './Filter.css';
import { useState } from 'react';
import FilterPopupPerformer from './FilterPopup/FilterPopupPerformer';
import FilterPopupYear from './FilterPopup/FilterPopupYear';
import FilterPopupGenre from './FilterPopup/FilterPopupGenre';

function Filter() {
  const [activeFilter, setActiveFilter] = useState(null);

  const filters = [
    { id: 'author', name: 'исполнителю' },
    { id: 'year', name: 'году выпуска' },
    { id: 'genre', name: 'жанру' },
  ];

  const getClassesForFilterBtns = (id) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    `filter__button button-${id} _btn-text`;

  const filterClickHandler = (id) => {
    setActiveFilter(activeFilter === id ? null : id);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      filterClickHandler();
    }
  };

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      {filters.map((filter) => (
        <div
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className={
            activeFilter === filter.id
              ? `${getClassesForFilterBtns(filter.id)} btn-text_active`
              : getClassesForFilterBtns(filter.id)
          }
          key={filter.id}
          onClick={() => filterClickHandler(filter.id)}
        >
          {filter.name}
        </div>
      ))}
      {activeFilter === filters[0].id && <FilterPopupPerformer />}
      {activeFilter === filters[1].id && <FilterPopupYear />}
      {activeFilter === filters[2].id && <FilterPopupGenre />}
    </div>
  );
}

export default Filter;
