import {
  DehydratedState,
  Hydrate,
  QueryClientProvider as ReactQueryClientProvider,
} from 'react-query';

import {useQueryClient} from '@/src/hooks/use-query-client';

interface QueryClientProvider {
  dehydratedState: DehydratedState;
}

const QueryClientProvider = ({
  children,
  dehydratedState,
}: React.PropsWithChildren<QueryClientProvider>) => {
  const queryClient = useQueryClient();

  return (
    <ReactQueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
    </ReactQueryClientProvider>
  );
};

export default QueryClientProvider;
