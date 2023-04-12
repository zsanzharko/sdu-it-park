import './style.scss';

interface IPageTitle {
  name: string;
}

export const PageTitle: React.FC<IPageTitle> = ({ name }) => {
  return <h2 className="page-title">{name}</h2>;
};
