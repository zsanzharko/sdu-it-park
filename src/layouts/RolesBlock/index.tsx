import { InvestorIcon } from '../../assets/icons/InvestorIcon';
import { MentorIcon } from '../../assets/icons/MentorIcon';
import { PartnershipIcon } from '../../assets/icons/PartnershipIcon';
import { StudentIcon } from '../../assets/icons/StudentIcon';
import { RoleItem } from '../../components/RoleItem';
import './style.scss';

export const RolesBlock: React.FC = () => {
  const roles = [
    {
      id: 0,
      src: <StudentIcon />,
      text: 'студент',
    },
    {
      id: 1,
      src: <PartnershipIcon />,
      text: 'партнер-клиент',
    },
    {
      id: 2,
      src: <InvestorIcon />,
      text: 'инвестор',
    },
    {
      id: 3,
      src: <MentorIcon />,
      text: 'менторство',
    },
  ];

  return (
    <div className="roles-block">
      <div className="roles-block__wrapper">
        {roles.map((role) => (
          <RoleItem key={role.id} {...role} />
        ))}
      </div>
    </div>
  );
};
