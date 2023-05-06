import { Buffer } from 'buffer';
import { IActualPagePost } from '../../utils/types';
import './style.scss';
import { PostImageSlider } from '../../components/PostImageSlider';

export const ActualPagePost: React.FC<IActualPagePost> = ({ title, postPhotoList, content }) => {
  const decoded = Buffer.from(content, 'base64').toString('utf8');

  return (
    <div className="actual-page__post">
      <h2 className="actual-page__post-title">{title}</h2>
      <p className="actual-page__text">{decoded}</p>
      <div className="actual-page__images">
        <PostImageSlider slides={postPhotoList} />
      </div>
    </div>
  );
};
