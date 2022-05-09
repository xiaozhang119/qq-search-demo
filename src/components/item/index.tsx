import React, { FC } from 'react';

import {
  Input,
} from '../';

import { ItemProps } from './typings';

import './index.css';

const Item: FC<ItemProps> = (props) => {
  const {
    label,
    value,
    onChange,
    error,
    ...other
  } = props;
  return (
    <div
      className="zzq-item"
    >
      <div
        className="label-wrapper"
      >
        <label
          className="label"
          data-testid="test-label"
        >
          {label}
        </label>
      </div>
      <div>
        <Input
          size="m"
          hasClear
          value={value}
          onChange={onChange}
          data-testid="test-input"
          {...other}
        />
        <div
          className="zzq-item-explain-error"
          data-testid="zzq-item-explain-error"
        >
          {error}
        </div>
      </div>

    </div>
  );
}

export default Item;
