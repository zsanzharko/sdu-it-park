/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { PageTitle } from '../../components/PageTitle';
import { FormInput } from '../../components/FormInput';
import { LoadingIcon } from '../../assets/icons/LoadingIcon';
import { ErrorModal } from '../../components/ErrorModal';
import './style.scss';

export const CooperationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm();
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (data: FieldValues) => {
    try {
      setPending(true);
      await fetch('https://api.apispreadsheets.com/data/xXAdQJzZEKY3RM6v/', {
        method: 'POST',
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 201) {
          setMessage('Ваши данные успешно отправились!');
        } else {
          setMessage('Что-то пошло не так, попробуйте позже');
        }
      });
      reset();
    } catch (err) {
      setMessage((err as Error).message);
    } finally {
      setPending(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <PageTitle name="сотрудничество" />
      <FormInput
        placeholder="фио"
        label="Введите имя:"
        register={register('name', { required: '* необходимо заполнить это поле!' })}
        onKeyUp={() => {
          trigger('name');
        }}
        message={errors.name?.message as string}
      />
      <FormInput
        placeholder="почта"
        label="Введите почту:"
        register={register('email', {
          required: '* необходимо заполнить это поле!',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: `* некорректная почта`,
          },
        })}
        onKeyUp={() => {
          trigger('email');
        }}
        message={errors.email?.message as string}
      />
      <div className="form-input__radio-buttons">
        <p className="form-input__text">Выберите роль:</p>
        <label className="form-input__label">
          <FormInput
            type="radio"
            value="ассистент"
            register={register('role', { required: '* необходимо выбрать один из вариантов!' })}
            onKeyUp={() => {
              trigger('role');
            }}
          />
          ассистент
        </label>
        <label className="form-input__label">
          <FormInput
            type="radio"
            value="ментор"
            register={register('role', { required: '* необходимо выбрать один из вариантов!' })}
            onKeyUp={() => {
              trigger('role');
            }}
          />
          ментор
        </label>
        <label className="form-input__label">
          <FormInput
            type="radio"
            value="спонсор"
            register={register('role', { required: '* необходимо выбрать один из вариантов!' })}
            onKeyUp={() => {
              trigger('role');
            }}
          />
          спонсор
        </label>
        <label className="form-input__label">
          <FormInput
            type="radio"
            value="партнер"
            register={register('role', { required: '* необходимо выбрать один из вариантов!' })}
            onKeyUp={() => {
              trigger('role');
            }}
          />
          партнер
        </label>
        {errors.role?.message ? (
          <p className="form-input__error">{errors.role?.message as string}</p>
        ) : (
          ''
        )}
      </div>
      <div className="form-input">
        <div className="form-input__text">
          Добавьте необходимую дополнительную информацию о вас:
        </div>
        <textarea
          className="form-input__textarea"
          placeholder="..."
          {...register('text', { required: '* необходимо добавить описание!' })}
        />
        {errors.text?.message ? (
          <p className="form-input__error">{errors.text?.message as string}</p>
        ) : (
          ''
        )}
      </div>
      {pending ? (
        <LoadingIcon />
      ) : (
        <button className="form__button" type="submit">
          отправить
        </button>
      )}
      {message && <ErrorModal message={message} setMessage={setMessage} />}
    </form>
  );
};
