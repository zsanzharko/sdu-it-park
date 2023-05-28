import { useState } from 'react';
import { Buffer } from 'buffer';
import { IActualPagePost } from '../../utils/types';
import { PostImageSlider } from '../../components/PostImageSlider';
import { fetchData } from '../../utils/functions';
import './style.scss';

interface IComment {
  messageId: number;
  repliedMessageId: number | null;
  text: string;
  creatorId: number;
  createdDate: number;
}

export const ActualPagePost: React.FC<IActualPagePost> = ({
  title,
  photoList,
  content,
  id,
  createdDate,
  tags,
}) => {
  const decoded = Buffer.from(content.contentByte, 'base64').toString('utf8');
  const [comments, setComments] = useState<IComment[]>([]);
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const date = new Date(createdDate).toDateString();

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
      <p className="actual-page__post-text">{date}</p>
      <p className="actual-page__post-tags">{tags.map((tag) => `#${tag}`).join(', ')}</p>
      <div className="actual-page__post-images">
        <PostImageSlider slides={photoList} />
      </div>
      {!isCommentsVisible && (
        <button type="button" onClick={getComments}>
          comments
        </button>
      )}
      <div className="actual-page__post-comments">
        {comments.length > 0 ? comments.map((comment) => comment.text) : ''}
      </div>
    </div>
  );
};
