import styles from './styles.module.scss';
import { Button, Input, Link } from '~/libs/components/components.js';
import { useAppForm, useCallback } from '~/libs/hooks/hooks.js';
import {
  type UserSignInRequestDto,
  userSignInValidationSchema,
} from '~/packages/users/users.js';
import { DEFAULT_SIGN_IN_PAYLOAD } from '~/pages/auth/components/sign-in-form/libs/constants.js';
import { AppRoute } from '~/libs/enums/enums.js';
import React from 'react';

type Properties = {
  onSubmit: (payload: UserSignInRequestDto) => void;
};

const SignInForm: React.FC<Properties> = ({ onSubmit }: Properties) => {
  const { control, errors, handleSubmit } = useAppForm<UserSignInRequestDto>({
    defaultValues: DEFAULT_SIGN_IN_PAYLOAD,
    validationSchema: userSignInValidationSchema,
  });

  const handleFormSubmit = useCallback(
    (_evt: React.FormEvent) => {
      void handleSubmit(onSubmit)(_evt);
    },
    [onSubmit, handleSubmit],
  );

  return (
    <form className={styles['form']} onSubmit={handleFormSubmit}>
      <span className={styles['form-title']}>Login</span>
      <div className="form-inputs-wrapper">
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
        <div className={styles['forgot-pass-wrapper']}>
          <span className={styles['forgot-pass-caption']}>
            Forgot password?
          </span>
        </div>
      </div>
      <div className={styles['form-controls-wrapper']}>
        <Button
          type="submit"
          className={styles['submit-btn']}
          label="Sign In"
        />
        <div className={styles['no-account-wrapper']}>
          <span className={styles['no-account-caption']}>
            Don’t have account?{' '}
            <Link to={AppRoute.SIGN_UP} className={styles['no-account-link']}>
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
};

export { SignInForm };
