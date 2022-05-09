import React, { FC, useMemo, } from 'react';
import cx from 'classnames';

import CardHeader from './header';

import type { CardProps } from './typings';

import './index.css';

const prefixCls = 'zzq-card';

const Card: FC<CardProps> = (props) => {
  const {
    title,
    children,
    ghost,
    className,
    direction,
  } = props;


  const cardCls = useMemo(() => cx(className, {
    [prefixCls]: true,
    [`${prefixCls}-ghost`]: ghost,
  }), [ghost, className]);


  const bodyCls = useMemo(() => cx({
    [`${prefixCls}-body`]: true,
    [`${prefixCls}-body-row`]: direction === 'row',
  }), [direction]);

  return (
    <div
      className={cardCls}
    >
      <CardHeader
        title={title}
      />
      <div
        className={bodyCls}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
