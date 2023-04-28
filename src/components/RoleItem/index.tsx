import './style.scss';

interface IRoleItem {
  id: number;
  src: React.ReactNode;
  text: string;
}

export const RoleItem: React.FC<IRoleItem> = ({ src, text }) => {
  return (
    <div className="role-item">
      <div className="role-item__image">{src}</div>
      <p className="role-item__text">{text}</p>
    </div>
  );
};
