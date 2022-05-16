import React from 'react';
import {QueryClient} from 'react-query';

export const useQueryClient = () => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 20 * 1000,
          },
        },
      }),
  );
  return queryClient;
};
