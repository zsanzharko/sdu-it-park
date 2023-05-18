import { DecorationMountain } from '../../components/DecorationMountain';
import { CooperationForm } from '../../layouts/CooperationForm';
import './style.scss';

export const Cooperation: React.FC = () => {
  // const [url, setUrl] = useState<React.ReactNode>();

  // useEffect(() => {
  //   // TODO: fetch url
  //   setUrl(
  //     <iframe className="cooperation-page__iframe" title="link" src="" width="1152" height="1570">
  //       Загрузка…
  //     </iframe>
  //   );
  // }, []);

  return (
    <div className="cooperation-page">
      <div className="cooperation-page__wrapper">
        <DecorationMountain />
        <CooperationForm />
      </div>
    </div>
  );
};
