'use client';
import React, { useEffect, useState } from 'react';
import { Checkbox, Divider } from 'antd';
import type { CheckboxProps } from 'antd';
import { useRouter } from 'next/navigation';

type CheckboxValueType = string;

const CheckboxGroup = Checkbox.Group;

const priceRanges = [
  '300-500',
  '500-650',
  '650-800',
  '800-950',
  '950-1100',
  '1100-1300',
  '1300-1500',
  '1500-1700'
];

const PriceCheckBox = () => {
  const router = useRouter();
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);

  const checkAll = priceRanges.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < priceRanges.length;

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
    setCheckedList(e.target.checked ? priceRanges : []);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    // Clear existing price parameters
    params.delete('price');

    if (checkedList.length > 0) {
      checkedList.forEach(price => params.append('price', price));
    }

    router.push(`/laptops?${params.toString()}`, { scroll: false });
  }, [checkedList, router]);

  return (
    <div>
      <div className="flex items-center justify-center p-4">
        <div className="z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
          <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
            Price Ranges
          </h6>
          <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
            Check all
          </Checkbox>
          <Divider />
          <CheckboxGroup options={priceRanges} value={checkedList} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default PriceCheckBox;
