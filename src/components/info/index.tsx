import React, { FC, useMemo } from 'react';

import {
  Card,
  Spin,
} from '..';
import './index.css';

const spinStyle = {
  width: 280,
};

const Info: FC<any> = (props) => {
  const {
    info,
    loading,
  } = props;
  const infoNode = useMemo(() => {
    if (!info) {
      return (
        <div
          className="no-data"
          key="no-data"
        >
          暂无数据，请输入QQ进行查询
        </div>
      );
    }
    const {
      qq,
      name,
      qlogo,
    } = info;
    return [
      <Card
        ghost
        key="qlogo"
      >
        {/* 图片的处理上，实际业务中可以封装组件针对资源加载失败做一些适配处理，时间问题这里不再深入封装处理 */}
        <img
          src={qlogo}
          alt=""
          className="q-logo"
        />
      </Card>,
      <Card
        ghost
        className="q-info-wrapper"
        key="q-name-wrapper"
      >
        <span
          className="q-name"
          key="q-name"
          data-testid="q-name"
        >
          QQ昵称：{name || '--'}
        </span>
        <span
          className="qq"
          key="qq"
          data-testid="qq"
        >
          QQ号：{qq || '--'}
        </span>
      </Card>
    ];
  }, [info]);

  return (
    <Spin
      visible={loading}
      style={spinStyle}
    >
      <Card
        direction='row'
        className="info"
      >
        {infoNode}
      </Card>
    </Spin>
  );
}

export default Info;
