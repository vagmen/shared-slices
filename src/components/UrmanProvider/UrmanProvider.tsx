"use client";

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

const defaultComponents: UrmanComponents = {
  ImageComponent: "img",
};

const UrmanContext = createContext<UrmanComponents>(defaultComponents);

export const useUrmanComponents = () => {
  const context = useContext(UrmanContext);
  return {
    ...defaultComponents,
    ...context,
  } as Required<UrmanComponents>;
};

const UrmanProvider: React.FC<UrmanProviderProps> = ({
  children,
  components,
}) => {
  return (
    <UrmanContext.Provider value={components}>{children}</UrmanContext.Provider>
  );
};

export default UrmanProvider;
