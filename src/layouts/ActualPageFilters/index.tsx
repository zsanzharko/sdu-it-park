import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { AnnouncementIcon } from '../../assets/icons/AnnouncementIcon';
import { CalendarIcon } from '../../assets/icons/CalendarIcon';
// import { FireIcon } from '../../assets/icons/FireIcon';
// import { NewsIcon } from '../../assets/icons/NewsIcon';
// import { ProjectIcon } from '../../assets/icons/ProjectIcon';
import { SearchIcon } from '../../assets/icons/SearchIcon';
import { filterByTitle, sortByDate } from '../../store/slices/actualPosts.slice';
import './style.scss';

export const ActualPageFilters: React.FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleFilterByTitle = () => {
    dispatch(filterByTitle(value));
  };

  const handleSortByDate = () => {
    dispatch(sortByDate());
  };

  return (
    <div className="actual-page__filters">
      <div className="actual-page__filters-search">
        <button
          className="actual-page__filters-search__button"
          type="button"
          onClick={handleFilterByTitle}
        >
          <SearchIcon />
        </button>
        <input
          type="text"
          className="filters-search__input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleFilterByTitle();
          }}
        />
      </div>
      {/* <div className="actual-page__filters-list">
        <p className="filters-list__title">Лента</p>
        <button className="filters-list__button" type="button">
          <NewsIcon />
          Новости
        </button>
        <button className="filters-list__button" type="button">
          <ProjectIcon />
          Проекты
        </button>
        <button className="filters-list__button" type="button">
          <AnnouncementIcon />
          Анонсы
        </button>
      </div> */}
      <div className="actual-page__filters-list">
        <p className="filters-list__title">Сортировать по</p>
        <button className="filters-list__button" type="button" onClick={handleSortByDate}>
          <CalendarIcon />
          Дате
        </button>
        {/* <button className="filters-list__button" type="button">
          <FireIcon />
          Релевантности
        </button> */}
      </div>
    </div>
  );
};
