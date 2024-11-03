import React, { forwardRef } from 'react';
import { StyleInut, ErrorMessage } from "./Input.style";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  errorText?: string;
  isError: boolean;
}

export const Input = forwardRef<HTMLInputElement, IInput>(({
  type,
  placeholder,
  onChange,
  value = '', // Убедитесь, что значение по умолчанию - пустая строка
  errorText,
  isError,
  ...props
}, ref) => {
  return (
    <div>
      <StyleInut
        ref={ref}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value} // Убедитесь, что передаете value
        $isError={isError}
        {...props}
      />
      {isError && <ErrorMessage>{errorText}</ErrorMessage>}
    </div>
  );
});
