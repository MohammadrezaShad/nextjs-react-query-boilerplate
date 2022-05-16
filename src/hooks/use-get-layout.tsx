import MainLayout from '@/src/components/layouts/main/main-layout';
import type {AppExtendedProps} from '@/types/main';

type UseGetLayoutProps = Pick<AppExtendedProps, 'Component' | 'deviceType'>;

export const useGetLayout = ({Component, deviceType}: UseGetLayoutProps) => {
  const getLayout =
    Component.getLayout ||
    ((page: React.ReactNode) => <MainLayout deviceType={deviceType}>{page}</MainLayout>);

  return getLayout;
};
