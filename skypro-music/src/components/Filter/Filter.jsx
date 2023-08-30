import { useState } from 'react';
import * as S from './Filter.styles';
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

  const filterClickHandler = (id) => {
    setActiveFilter(activeFilter === id ? null : id);
  };

  return (
    <S.CenterBlockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      {filters.map((filter) => (
        <S.FilterButton
          $active={activeFilter === filter.id}
          key={filter.id}
          onClick={() => filterClickHandler(filter.id)}
        >
          {filter.name}
        </S.FilterButton>
      ))}
      {activeFilter === filters[0].id && <FilterPopupPerformer />}
      {activeFilter === filters[1].id && <FilterPopupYear />}
      {activeFilter === filters[2].id && <FilterPopupGenre />}
    </S.CenterBlockFilter>
  );
}

export default Filter;
