import React from 'react';
import { Wrapper } from './IconButton.styles';

export type IconButtonProps = {
  children: React.ReactNode;
  component?: any;
  isActive?: boolean;
  isDisabled?: boolean;
  isPrimary?: boolean;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  [x: string]: any;
};

/**
 * Primary UI component for user interaction
 */
const IconButton = ({
  children,
  className,
  component = 'button',
  isActive = false,
  isDisabled = false,
  isPrimary = false,
  onClick,
  ...rest
}: IconButtonProps) => {
  const classes = [];

  if (isActive) {
    classes.push('is_active');
  }

  if (isPrimary) {
    classes.push('is_primary');
  }

  if (className) {
    classes.push(className);
  }

  return (
    <Wrapper
      forwardedAs={component}
      className={`${classes.join(' ')}`}
      disabled={isDisabled}
      onClick={onClick}
      {...rest}>
      {children}
    </Wrapper>
  );
};

export default IconButton;
