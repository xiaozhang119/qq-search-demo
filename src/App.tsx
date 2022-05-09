import React from 'react';

import {
  Card,
  Item,
  Info,
} from './components';
import { useSearch } from './hooks';

import './App.css';

function App() {
  const {
    value,
    info,
    loading,
    error,
    onChange,
  } = useSearch();
  return (
    <Card
      className="App"
      title="QQ号查询"
    >
      <Item
        label="QQ:"
        value={value}
        onChange={onChange}
        error={error}
        hasClear
        placeholder="请输入QQ号进行查询"
      />
      <Info
        loading={loading}
        info={info}
      />
    </Card>
  );
}

export default App;
