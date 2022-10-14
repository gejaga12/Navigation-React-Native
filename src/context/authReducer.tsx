import { AuthState } from './AuthContext';

type AuthAction = 
| { type: 'singIn' }
| { type: 'changeFavIcon', payload: string };


// GENERA ESTADO
export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'singIn':
      return { ...state, isLoggendIn: true, username: 'gerardo' };
    case 'changeFavIcon':
      return { ...state, favoriteIcon: action.payload} 
    default:
      return state;
  }
};
