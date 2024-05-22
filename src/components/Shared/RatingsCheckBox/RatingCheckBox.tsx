'use client';
import React, { useEffect, useState } from 'react';
import { Checkbox, Divider } from 'antd';
import type { CheckboxProps } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';
import { AiFillStar } from 'react-icons/ai';

type CheckboxValueType = string;

const CheckboxGroup = Checkbox.Group;

const ratings = [
  { label: <div style={{ display: 'flex', alignItems: 'center' }}><span style={{ marginRight: 4 }}>1</span><AiFillStar style={{ color: '#ffe234' }} /></div>, value: '1' },
  { label: <div style={{ display: 'flex', alignItems: 'center' }}><span style={{ marginRight: 4 }}>2</span><AiFillStar style={{ color: '#ffe234'}} /></div>, value: '2' },
  { label: <div style={{ display: 'flex', alignItems: 'center' }}><span style={{ marginRight: 4 }}>3</span><AiFillStar style={{ color: '#ffe234'}} /></div>, value: '3' },
  { label: <div style={{ display: 'flex', alignItems: 'center' }}><span style={{ marginRight: 4 }}>4</span><AiFillStar style={{ color: '#ffe234'}} /></div>, value: '4' },
  { label: <div style={{ display: 'flex', alignItems: 'center' }}><span style={{ marginRight: 4 }}>5</span><AiFillStar style={{ color:'#ffe234'}} /></div>, value: '5' }
];

const RatingsCheckBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);

  const checkAll = ratings.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < ratings.length;

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
    setCheckedList(e.target.checked ? ratings.map(r => r.value) : []);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    // Clear existing rating parameters
    params.delete('rating');

    if (checkedList && checkedList.length > 0) {
      checkedList.forEach(rating => params.append('rating', rating));
    }

    router.push(`/laptops?${params.toString()}`, { scroll: false });
  }, [checkedList, router, searchParams]);

  return (
    <div>
      <div className="flex items-center justify-center p-4">
        <div className="z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
          <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
            Ratings
          </h6>
          <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
            Check all
          </Checkbox>
          <Divider />
          <CheckboxGroup options={ratings} value={checkedList} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default RatingsCheckBox;
