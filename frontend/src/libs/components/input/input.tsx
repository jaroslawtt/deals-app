import { Control, FieldErrors, FieldPath, FieldValues } from 'react-hook-form';
import styles from './styles.module.scss';
import { useFormController } from '~/libs/hooks/hooks.js';
import { getValidClassNames } from '~/libs/helpers/helpers.js';
import { ErrorMessage } from '~/libs/components/components.js';

type Properties<T extends FieldValues> = {
  control: Control<T, null>;
  errors: FieldErrors<T>;
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
  inputMode?: 'email' | 'text';
  className?: string | undefined;
};

const Input = <T extends FieldValues>({
  control,
  errors,
  name,
  label,
  placeholder,
  type = 'text',
  inputMode,
  className,
}: Properties<T>) => {
  const { field } = useFormController({ name, control });

  const error = errors[name]?.message;
  const hasError = Boolean(error);

  const validClassNames = getValidClassNames(
    styles['input'],
    hasError && styles['has-error'],
    className,
  );

  return (
    <label className={styles['label']}>
      <span className={styles['input-label']}>{label}</span>
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        inputMode={inputMode}
        className={validClassNames}
      />
      <ErrorMessage error={error as string} />
    </label>
  );
};

export { Input };
