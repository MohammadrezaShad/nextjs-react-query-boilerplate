import {dehydrate, QueryClient, useQuery} from 'react-query';
import Typography from '@plaza-ui/core/lib/components/Typography';
import type {GetServerSidePropsContext, NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';

import Test from '@/src/components/views/test';
import {getBrands} from '@/src/services/get-brands';

const Wrap = styled.div`
  background-color: ${({theme}) => theme.colors.danger.origin}; ;
`;

const Home: NextPage = () => {
  const {t} = useTranslation('common');

  return (
    <Wrap>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Test />
    </Wrap>
  );
};

export default Home;

export async function getServerSideProps({req, locale}: GetServerSidePropsContext) {
  const translations = await serverSideTranslations(locale, ['common']);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('brands', getBrands);
  const dehydratedState = dehydrate(queryClient);

  return {
    props: {
      dehydratedState,
      ...translations,
    },
  };
}
