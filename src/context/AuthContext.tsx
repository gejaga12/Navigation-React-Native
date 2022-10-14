import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';

// DEFINIR COMO LUCE O QUE INFO TENDRE AQUÍ
export interface AuthState {
  isLoggendIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// ESTADO INICIAL
export const authInitialState: AuthState = {
  isLoggendIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

// CREO INTERFAZ PARA DECIRLE A REACT COMO LUCE Y COMO USAREMOS EL CONTEXT
export interface AuthContextProps {
  authState: AuthState;
  singIn: () => void;
  logout: () => void;
  changeFavIcon: (iconName: string) => void;
}

// CREAR EL CONTEXTO
export const AuthContext = createContext({} as AuthContextProps);

// COMPONENTE PROOVEDOR DEL ESTADO
export const AuhtProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  // LOGGEARSE
  const singIn = () => {
    dispatch({ type: 'singIn' });
  };

  // CAMBIAR ICONO FAVORITO
  const changeFavIcon = (iconName: string) => {
    dispatch({ type: 'changeFavIcon', payload: iconName });
  };

  // DESLOGUEARSE
  const logout = () => {
    dispatch({ type: 'logout' })
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        singIn,
        logout,
        changeFavIcon,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
