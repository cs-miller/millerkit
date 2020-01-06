import React from 'react';

export type HTMLDivProps = React.HTMLAttributes<HTMLDivElement>;

export type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface BaseProps {
  /** A space-delimited list of class names to pass along to a child element. */
  className?: string;
}
