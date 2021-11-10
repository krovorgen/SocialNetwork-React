import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
  title: 'atoms/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox checked={checked} onChangeChecked={setChecked}>
      Check me
    </Checkbox>
  );
};
