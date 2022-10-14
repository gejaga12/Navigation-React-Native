import { StyleSheet } from 'react-native';

export const colores = {
  primary: '#70dccb',
}

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 10,
  },
  botonGrandeTexto: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  menuBoton: {
      marginVertical: 20
  },
  menuTexto: {
    fontSize: 20,
  },
});
