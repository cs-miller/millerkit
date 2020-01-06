import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, radios, text, withKnobs } from '@storybook/addon-knobs';
import { Button, Intent } from './Button';

export default {
  title: 'Button',
  decorators: [withKnobs],
  component: Button
};

export const Configurable = (): React.ReactNode => (
  <Button
    onClick={action('onClick')}
    inverted={boolean('Inverted', false)}
    intent={radios('Intent', Intent, Intent.NONE)}
  >
    {text('Text', 'Click Me')}
  </Button>
);
