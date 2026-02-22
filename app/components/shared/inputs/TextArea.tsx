"use client";
import {
  Controller,
  useFormContext,
  FieldValues,
  Path,
} from "react-hook-form";
import {
  ReactNode,
  TextareaHTMLAttributes,
  useId,
  useRef,
  useEffect,
} from "react";

interface TextAreaProps<T extends FieldValues>
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name"> {
  name: Path<T>;
  label?: ReactNode;
  containerClassName?: string;
  autoResize?: boolean;
  required?: boolean;
}

function classNames(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TextArea<T extends FieldValues>({
  name,
  label,
  containerClassName,
  className,
  autoResize = false,
  required,
  ...props
}: TextAreaProps<T>) {
  const { control } = useFormContext();
  const textareaId = useId();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const adjustHeight = () => {
    if (!autoResize || !textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  useEffect(() => {
    adjustHeight();
  }, []);

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required ?? false }}
      render={({ field, fieldState }) => {
        const { error } = fieldState;

        return (
          <div className={classNames("space-y-1", containerClassName)}>
            {label && (
              <label
                htmlFor={textareaId}
                className="block text-sm font-medium text-gray-700"
              >
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
              </label>
            )}

            <textarea
              {...field}
              {...props}
              id={textareaId}
              ref={(el) => {
                field.ref(el);
                textareaRef.current = el;
              }}
              rows={4}
              onInput={(e) => {
                field.onChange(e);
                adjustHeight();
              }}
              aria-invalid={!!error}
              aria-describedby={error ? `${textareaId}-error` : undefined}
              className={classNames(
                "w-full px-4 py-3 border bg-white text-gray-900 placeholder-gray-400 transition-all resize-none",
                "focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent",
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300",
                className
              )}
            />

            {error && (
              <p
                id={`${textareaId}-error`}
                className="text-sm text-red-500 mt-1"
              >
                {typeof error.message === "string"
                  ? error.message
                  : "This field is required"}
              </p>
            )}
          </div>
        );
      }}
    />
  );
}
