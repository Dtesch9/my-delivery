import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface Props {
  name: string;
  Icon?: React.ComponentType<IconBaseProps>;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({ name, Icon, ...rest }) => {
  const inputElementRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    setIsFilled(!!rest.value);
  }, [rest.value]);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputElementRef.current,
    });
  }, [registerField, fieldName]);

  const handleInputFocus = useCallback(() => {
    setIsFilled(false);
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFilled(!!inputElementRef.current?.value);
    setIsFocused(false);
  }, []);

  return (
    <Container
      data-testid="input-container"
      isFocused={Number(isFocused)}
      isFilled={Number(isFilled)}
    >
      {Icon && <Icon size={20} />}

      <input
        ref={inputElementRef}
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </Container>
  );
};

export default Input;
