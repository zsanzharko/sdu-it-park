import { useState } from 'react';
import { Buffer } from 'buffer';
import { IActualPagePost } from '../../utils/types';
import './style.scss';
import { PostImageSlider } from '../../components/PostImageSlider';
import { fetchData } from '../../utils/functions';

interface IComment {
  messageId: number;
  repliedMessageId: number | null;
  text: string;
  creatorId: number;
  createdDate: number;
}

export const ActualPagePost: React.FC<IActualPagePost> = ({ title, photoList, content, id }) => {
  const decoded = Buffer.from(content.contentByte, 'base64').toString('utf8');
  const [comments, setComments] = useState<IComment[]>([]);
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);

  const getComments = async () => {
    try {
      await fetchData(`/api/v1/posts/${id}/comments`).then((res) => setComments(res));
    } catch (err) {
      throw new Error((err as Error).message);
    } finally {
      setIsCommentsVisible(true);
    }
  };

  return (
    <div className="actual-page__post">
      <h2 className="actual-page__post-title">{title}</h2>
      <p className="actual-page__post-text">{decoded}</p>
      <div className="actual-page__post-images">
        <PostImageSlider slides={photoList} />
      </div>
      {!isCommentsVisible && (
        <button type="button" onClick={getComments}>
          Show Comments
        </button>
      )}
      <div className="actual-page__post-comments">
        {comments.length > 0 ? comments.map((comment) => comment.text) : ''}
      </div>
    </div>
  );
};
