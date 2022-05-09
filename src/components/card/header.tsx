import React, { FC } from 'react';


import type { CardProps } from './typings';

import './index.css';

const prefixCls = 'zzq-card-header';

const CardHeader: FC<Pick<CardProps, 'title'>> = (props) => {
  const {
    title,
  } = props;

  if (!title) {
    return null;
  }

  return (
    <div
      className={prefixCls}
    >
      {title}
    </div>
  );
};

export default CardHeader;
