import React from 'react';
import cx from 'classnames';
import { BaseProps } from '../../common/props';

export const Intent = {
  NONE: 'none' as 'none',
  PRIMARY: 'primary' as 'primary',
  SUCCESS: 'success' as 'success',
  WARNING: 'warning' as 'warning',
  DANGER: 'danger' as 'danger'
};

export type Intent = typeof Intent[keyof typeof Intent];

export interface ButtonProps
  extends BaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: Intent;
  inverted?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Button: React.FC<ButtonProps> = function Button(props) {
  const baseClassName = 'rounded py-2 px-4';
  function getIntentClass(
    intent: Intent = Intent.NONE,
    inverted = false
  ): string {
    switch (intent) {
      case Intent.NONE:
        return 'bg-white border border-black text-black hover:bg-gray-100';
      case Intent.PRIMARY:
        if (inverted)
          return 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-100';
        return 'bg-blue-500 text-white hover:bg-blue-700';
      case Intent.SUCCESS:
        if (inverted)
          return 'bg-transparent border border-green-500 text-green-500 hover:bg-green-100';
        return 'bg-green-500 text-white hover:bg-green-700';
      case Intent.WARNING:
        if (inverted)
          return 'bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-100';
        return 'bg-orange-500 text-white hover:bg-orange-700';
      case Intent.DANGER:
        if (inverted)
          return 'bg-transparent border border-red-500 text-red-500 hover:bg-red-100';
        return 'bg-red-500 text-white hover:bg-red-700';
    }
  }

  const className = cx(
    baseClassName,
    getIntentClass(props.intent, props.inverted),
    props.className
  );

  return <button {...props} className={className} />;
};
