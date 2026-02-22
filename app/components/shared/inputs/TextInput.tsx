"use client";
import {
  Controller,
  useFormContext,
  FieldValues,
  Path,
} from 'react-hook-form';
import {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useId,
  useState,
} from 'react';

type InputTypes =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'search'
  | 'url'
  | 'tel'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'month'
  | 'week';

interface TextInputProps<T extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  name: Path<T>;
  label?: ReactNode;
  containerClassName?: string;
  type?: InputTypes;
}

function classNames(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps<any>>(
  (
    {
      name,
      label,
      type = 'text',
      containerClassName,
      className,
      ...props
    },
    ref
  ) => {
    const { control } = useFormContext();
    const inputId = useId();
    const [showPassword, setShowPassword] = useState(false);

    return (
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => {
          const { error } = fieldState;
          const isPassword = type === 'password';
          const inputType = isPassword
            ? showPassword
              ? 'text'
              : 'password'
            : type;

          return (
            <div className={classNames('space-y-2', containerClassName)}>
              {label && (
                <label
                  htmlFor={inputId}
                  className="block text-sm font-medium text-gray-700"
                >
                  {label}
                </label>
              )}

              <div className="relative">
                <input
                  {...field}
                  {...props}
                  ref={ref}
                  id={inputId}
                  type={inputType}
                  aria-invalid={!!error}
                  aria-describedby={error ? `${inputId}-error` : undefined}
                  className={classNames(
                    'w-full px-4 py-3 border bg-white text-gray-900 placeholder-gray-500 transition-all',
                    'focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent',
                    error
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300',
                    isPassword && 'pr-16',
                    className
                  )}
                />

                {isPassword && (
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                )}
              </div>

              {error && (
                <p
                  id={`${inputId}-error`}
                  className="text-sm text-red-500"
                >
                  {error.message}
                </p>
              )}
            </div>
          );
        }}
      />
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
