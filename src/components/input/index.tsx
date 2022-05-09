import React, { FC, useState, useEffect, useCallback, ChangeEvent, useMemo, } from 'react';
import cx from 'classnames';

import Icon from './icon';

import type { InputProps } from './typings';

import './index.css';

const prefixCls = 'zzq-input';

const Input: FC<InputProps> = (props) => {
  const {
    onChange,
    initValue,
    value: valueProps,
    size,
    hasClear,
    ...other
  } = props;
  const [value, setValue] = useState(initValue || valueProps);
  const [clearVisible, setClearVisible] = useState(!!value && hasClear);

  useEffect(() => {
    setValue(valueProps);
  }, [valueProps]);

  useEffect(() => {
    setClearVisible(!!valueProps && hasClear)
  }, [valueProps, hasClear]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
  }, [onChange]);

  // 类名计算缓存处理，优化diff执行
  const inputCls = useMemo(() => cx({
    [`${prefixCls}-item`]: true,
    [`${prefixCls}-item-s`]: size === 's',
    [`${prefixCls}-item-m`]: size === 'm',
    [`${prefixCls}-item-l`]: size === 'l',
  }), [size]);

  // 清除按钮点击事件
  const onClear = useCallback(() => {
    onChange && onChange();
  }, [onChange]);

  return (
    <span
      className={prefixCls}
    >
      <input
        {...other}
        value={value}
        onChange={handleChange}
        className={inputCls}
      />
      {clearVisible && <Icon
        onClick={onClear}
      />}
    </span>
  );
};

export default Input;
