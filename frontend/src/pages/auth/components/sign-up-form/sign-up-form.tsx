import styles from './styles.module.scss';
import { Button, Input, Link } from '~/libs/components/components.js';
import { useAppForm } from '~/libs/hooks/hooks.js';
import {
  type UserSignUpRequestDto,
  userSignUpValidationSchema,
} from '~/packages/users/users.js';
import { DEFAULT_SIGN_UP_PAYLOAD } from '~/pages/auth/components/sign-up-form/libs/constants.js';
import { AppRoute } from '~/libs/enums/app-route.enum.js';
import { useCallback } from '~/libs/hooks/hooks';
import React from 'react';

type Properties = {
  onSubmit: (payload: UserSignUpRequestDto) => void;
};
const SignUpForm: React.FC<Properties> = ({ onSubmit }: Properties) => {
  const { control, errors, handleSubmit } = useAppForm<UserSignUpRequestDto>({
    defaultValues: DEFAULT_SIGN_UP_PAYLOAD,
    validationSchema: userSignUpValidationSchema,
  });

  const handleFormSubmit = useCallback(
    (_evt: React.FormEvent) => {
      void handleSubmit(onSubmit)(_evt);
    },
    [onSubmit, handleSubmit],
  );

  return (
    <form className={styles['form']} onSubmit={handleFormSubmit}>
      <span className={styles['form-title']}>Sign Up</span>
      <div className="form-inputs-wrapper">
        <Input
          placeholder="First name"
          type="text"
          control={control}
          errors={errors}
          name="firstName"
          label="First name"
          className={styles['form-input']}
        />
        <Input
          placeholder="Last name"
          type="text"
          control={control}
          errors={errors}
          name="lastName"
          label="Last name"
          className={styles['form-input']}
        />
        <Input
          placeholder="Email"
          control={control}
          errors={errors}
          name="email"
          label="Email"
          className={styles['form-input']}
        />
        <Input
          placeholder="Password"
          type="password"
          control={control}
          errors={errors}
          name="password"
          label="Password"
          className={styles['form-input']}
        />
      </div>
      <div className={styles['form-controls-wrapper']}>
        <Button
          type="submit"
          className={styles['submit-btn']}
          label="Sign Up"
        />
        <div className={styles['no-account-wrapper']}>
          <span className={styles['no-account-caption']}>
            Already have an account?{' '}
            <Link to={AppRoute.SIGN_IN} className={styles['no-account-link']}>
              Log in
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
};

export { SignUpForm };
