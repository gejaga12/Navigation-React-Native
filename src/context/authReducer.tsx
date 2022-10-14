import { AuthState } from './AuthContext';

type AuthAction = 
| { type: 'singIn' }
| { type: 'logout' }
| { type: 'changeFavIcon', payload: string }
| { type: 'changeUsername', payload: string }

// GENERA ESTADO
export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'singIn':
      return { ...state, isLoggendIn: true, username: 'gerardo' };

    case 'logout':
      return { ...state, isLoggendIn: false, username: undefined, favoriteIcon: undefined };
    
    case 'changeFavIcon':
      return { ...state, favoriteIcon: action.payload};

    case 'changeUsername':
      return { ...state, username: action.payload};
    
    default:
      return state;
  }
};
