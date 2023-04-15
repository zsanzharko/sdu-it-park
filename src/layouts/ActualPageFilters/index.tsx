import { AnnouncementIcon } from '../../assets/icons/AnnouncementIcon';
import { CalendarIcon } from '../../assets/icons/CalendarIcon';
import { FireIcon } from '../../assets/icons/FireIcon';
import { NewsIcon } from '../../assets/icons/NewsIcon';
import { ProjectIcon } from '../../assets/icons/ProjectIcon';
import { SearchIcon } from '../../assets/icons/SearchIcon';
import './style.scss';

export const ActualPageFilters: React.FC = () => {
  return (
    <div className="actual-page__filters">
      <div className="actual-page__filters-search">
        <SearchIcon />
        <input type="text" className="filters-search__input" />
      </div>
      <div className="actual-page__filters-list">
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
      </div>
      <div className="actual-page__filters-list">
        <p className="filters-list__title">Сортировать по</p>
        <button className="filters-list__button" type="button">
          <CalendarIcon />
          Дате
        </button>
        <button className="filters-list__button" type="button">
          <FireIcon />
          Релевантности
        </button>
      </div>
    </div>
  );
};
