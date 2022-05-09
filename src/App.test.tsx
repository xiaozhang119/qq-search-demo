import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('QQ-search-demo UI test', () => {
  test('page initial test', () => {
    render(<App />);
    const titleEle = screen.getByText(/QQ号查询/i);
    expect(titleEle).toBeInTheDocument();

    const labelEle = screen.getByTestId('test-label');
    expect(labelEle.textContent).toBe('QQ:');

    const inputEle = screen.getAllByTestId('test-input')[0];
    expect(inputEle).toBeTruthy();
    expect(inputEle).toHaveValue('');

    const infoEle = screen.getAllByText('暂无数据，请输入QQ进行查询');
    expect(infoEle).toBeTruthy();
  });
});

describe('QQ-search-demo UE test', () => {
  test('input error value', async () => {
    render(<App />);

    const inputEle = screen.getAllByTestId('test-input')[0];
    fireEvent.change(inputEle, { target: { value: 'xxxx' } });

    expect(inputEle).toHaveValue('xxxx');
    const errorEle = await screen.findByText('请输入正确的QQ号码');
    expect(errorEle).toBeInTheDocument();
  });
});
