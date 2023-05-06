import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { PageTitle } from '../../components/PageTitle';
import { ActualPageFilters } from '../../layouts/ActualPageFilters';
import { IStore } from '../../utils/types';
import { LoadingIcon } from '../../assets/icons/LoadingIcon';
import { ActualPagePost } from '../../layouts/ActualPagePost';
import { useAppDispatch } from '../../store/store.dispath';

import './style.scss';
import { fetchActualPostsData } from '../../store/slices/actualPosts.slice';

export const Actual: React.FC = () => {
  const { posts, isNew, pending } = useSelector((state: IStore) => state.actualPostsData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isNew) {
      dispatch(fetchActualPostsData());
    }
  }, [dispatch, isNew]);

  return (
    <div className="actual-page">
      <button type="button" className="actual-page__wrapper-scroll">
        <p className="scroll-text scroll-text__arrow">❮</p>
        <p className="scroll-text">Наверх</p>
      </button>
      <div className="actual-page__wrapper">
        <div className="actual-page__posts">
          <PageTitle name="актуальное" />
          {posts.length > 0 &&
            !pending &&
            posts.map((post) => {
              return <ActualPagePost key={post.id} {...post} />;
            })}
          {pending && <LoadingIcon />}
        </div>
        <ActualPageFilters />
      </div>
    </div>
  );
};
