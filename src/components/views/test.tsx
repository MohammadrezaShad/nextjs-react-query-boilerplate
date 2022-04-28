import React, {FC} from 'react';
import {useQuery} from 'react-query';

import {BRANDS_QUERY} from '@/src/graphql/operations/query/brands';
import {getBrands} from '@/src/services/get-brands';

interface TestProps {
  // eslint-disable-next-line react/no-unused-prop-types
  t?: any;
}

const Test: FC<TestProps> = props => {
  const {data} = useQuery('brands', getBrands);
  return <div>text</div>;
};

export default Test;
