'use client';
import React, { useEffect, useState } from 'react';
import { Checkbox, Divider } from 'antd';
import type { CheckboxProps } from 'antd';
import { useRouter } from 'next/navigation';

type TBrands = {
  _id:string;
  name:string;
  image:string;
};
type CheckboxValueType = string;

const CheckboxGroup = Checkbox.Group;

const BrandsCheckBox = ({ brands }: { brands: TBrands[] }) => {
  const router = useRouter();
  const brandNames = brands.map(brand => brand.name);
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);

  const checkAll = brandNames.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < brandNames.length;

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
    setCheckedList(e.target.checked ? brandNames : []);
  };

  useEffect(() => {
    if (checkedList && checkedList.length > 0) {
      const params = new URLSearchParams();
      checkedList.forEach(brand => params.append('brand', brand));
      router.push(`/laptops?${params.toString().toLowerCase()}`, { scroll: false });
    }
  }, [checkedList, router]);

  return (
    <div>
      <div className="flex items-center justify-center p-4">
        <div className="z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
          <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Brands</h6>
          <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
            Check all
          </Checkbox>
          <Divider />
          <CheckboxGroup options={brandNames} value={checkedList} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default BrandsCheckBox;
