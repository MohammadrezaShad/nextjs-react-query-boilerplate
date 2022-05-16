import React from 'react';

import DeviceTypeContext from '@/src/contexts/device-type-context';
import {DeviceType} from '@/src/types/main';

interface DeviceTypeProviderProps {
  deviceType: DeviceType;
}

const DeviceTypeProvider = ({
  children,
  deviceType,
}: React.PropsWithChildren<DeviceTypeProviderProps>) => {
  const value = React.useMemo(() => ({deviceType}), [deviceType]);
  return <DeviceTypeContext.Provider value={value}>{children}</DeviceTypeContext.Provider>;
};

export default DeviceTypeProvider;
