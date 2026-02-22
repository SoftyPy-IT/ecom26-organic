"use client";

import {
  FieldValues,
  Path,
  useController,
  useFormContext,
} from "react-hook-form";
import { forwardRef, ReactNode, SelectHTMLAttributes, useId } from "react";

type Option = {
  label: ReactNode;
  value: string;
};

interface SelectProps<T extends FieldValues>
  extends Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "name" | "value" | "defaultValue" | "onChange"
  > {
  name: Path<T>;
  label?: ReactNode;
  options: Option[];
}

const Select = forwardRef(function Select<T extends FieldValues>(
  { name, label, options, className, ...props }: SelectProps<T>,
  ref: React.Ref<HTMLSelectElement>
) {
  const { control } = useFormContext<T>();
  const id = useId();

  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <select
        {...field}
        {...props}
        ref={ref}
        id={id}
        value={field.value ?? ""}
        aria-invalid={!!error}
        className={`
          w-full border bg-white px-4 py-3 text-sm text-gray-900
          focus:outline-none focus:ring-2 focus:ring-green-500
          ${error ? "border-red-500" : "border-gray-300"}
          ${className ?? ""}
        `}
      >
        <option value="">Select rating</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-sm text-red-500">{error.message}</p>
      )}
    </div>
  );
});

Select.displayName = "Select";

export default Select;
