import './style.scss';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IFormInput {
  type?: string;
  label?: string;
  placeholder?: string;
  register: UseFormRegisterReturn<string>;
  onKeyUp: () => void;
  message?: string;
  value?: string;
}

export const FormInput: React.FC<IFormInput> = ({
  type = 'text',
  label,
  placeholder,
  register,
  onKeyUp,
  message = '',
  value,
}) => {
  return (
    <div className="form-input">
      {type !== 'radio' && <p className="form-input__text">{label}</p>}
      <input
        type={type}
        value={value}
        className={type === 'radio' ? 'form-input__radio' : 'form-input__input'}
        autoComplete="true"
        placeholder={placeholder}
        {...register}
        onKeyUp={onKeyUp}
      />
      {message ? <p className="form-input__error">{message}</p> : ''}
    </div>
  );
};
