/* eslint-disable jsx-a11y/label-has-associated-control */
import { FieldValues, useForm } from 'react-hook-form';
import './style.scss';
import { PageTitle } from '../../components/PageTitle';

export const CooperationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data: FieldValues) => {
    console.log(data);
    // Todo: use this data;
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <PageTitle name="сотрудничество" />
      <input
        type="name"
        className="form__input"
        autoComplete="true"
        placeholder="Введите ваше имя"
        {...register('name', { required: '* необходимо заполнить это поле!' })}
        onKeyUp={() => {
          trigger('name');
        }}
      />
      {errors.name?.message ? <p className="form__error">{errors.name?.message as string}</p> : ''}
      <input
        type="email"
        className="form__input"
        placeholder="Введите вашу почту"
        autoComplete="true"
        {...register('email', {
          required: '* необходимо заполнить это поле!',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: `* некорректная почта`,
          },
        })}
        onKeyUp={() => {
          trigger('email');
        }}
      />
      {errors.email?.message ? (
        <p className="form__error">{errors.email?.message as string}</p>
      ) : (
        ''
      )}
      <div className="form__radio-buttons">
        <label className="form__radio-button__label">
          <input
            type="radio"
            className="form__radion-button"
            {...register('role', { required: '* необходимо выбрать один из вариантов!' })}
            onKeyUp={() => {
              trigger('role');
            }}
          />
          ассистент
        </label>
        <label className="form__radio-button__label">
          <input
            type="radio"
            className="form__radion-button"
            {...register('role', { required: '* необходимо выбрать один из вариантов!' })}
            onKeyUp={() => {
              trigger('role');
            }}
          />
          ментор
        </label>
        <label className="form__radio-button__label">
          <input
            type="radio"
            className="form__radion-button"
            {...register('role', { required: '* необходимо выбрать один из вариантов!' })}
            onKeyUp={() => {
              trigger('role');
            }}
          />
          спонсор
        </label>
        <label className="form__radio-button__label">
          <input
            type="radio"
            className="form__radion-button"
            {...register('role', { required: '* необходимо выбрать один из вариантов!' })}
            onKeyUp={() => {
              trigger('role');
            }}
          />
          партнер
        </label>
      </div>
      {errors.role?.message ? <p className="form__error">{errors.role?.message as string}</p> : ''}
      <textarea
        className="form__textarea"
        placeholder="добавьте необходимую дополнительную информацию о вас"
        {...register('text', { required: '* необходимо добавить описание!' })}
      />
      {errors.text?.message ? <p className="form__error">{errors.text?.message as string}</p> : ''}
      <button className="form__button" type="submit">
        отправить
      </button>
    </form>
  );
};
