/* eslint-disable react/button-has-type */
// Import Swiper styles
import React, {FC} from 'react';
import {useQuery} from 'react-query';
import {Swiper, SwiperSlide} from 'swiper/react';

import ThemeContext from '@/src/contexts/theme-context';
import graphQLClient from '@/src/graphql/graphql-client';
import {getBrands} from '@/src/services/get-brands';

import 'swiper/css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TestProps {}

const Test: FC<TestProps> = props => {
  const {data, refetch} = useQuery('brands', getBrands);
  const {theme, toggleTheme} = React.useContext(ThemeContext);

  const toggle = () => {
    toggleTheme?.();
  };

  return (
    <div>
      <button onClick={() => refetch()}>refetch</button>
      <button onClick={toggle}>toggleTheme</button>
      <Swiper dir='rtl' className='mySwiper'>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Test;
