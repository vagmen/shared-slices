import React, { createContext, useContext } from "react";

export interface UrmanComponents {
  LinkComponent?: React.ElementType;
  ImageComponent?: React.ElementType;
  // Можно добавить другие компоненты по мере необходимости
}

interface UrmanProviderProps {
  children: React.ReactNode;
  components: UrmanComponents;
}

const UrmanContext = createContext<UrmanComponents>({});

export const useUrmanComponents = () => useContext(UrmanContext);

const UrmanProvider: React.FC<UrmanProviderProps> = ({
  children,
  components,
}) => {
  return (
    <UrmanContext.Provider value={components}>{children}</UrmanContext.Provider>
  );
};

export default UrmanProvider;
