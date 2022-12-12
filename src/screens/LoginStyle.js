import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainGradient: {
    flex: 1,
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView3: {
    marginVertical: -30,
  },
  mainView: {
    marginVertical: 10,
  },
  mainView2: {
    marginVertical: 30,
  },
  userImage: {
    display: 'flex',
    height: 180,
    width: 180,
  },
  vendorText: {
    color: '#3F007E',
    fontSize: 18,
    fontWeight: '600',
  },
  input: {
    borderColor: '#428BC1',
    borderWidth: 1,
    width: 300,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  registerTouch: {},
  registerText: {
    color: '#fff',
    fontWeight: '600',
    paddingHorizontal: 70,
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFE600',
  },
  registerGradiant: {
    borderRadius: 10,
  },
  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#FFF',
    color: '#000',
    backgroundColor: '#FFF',
  },
  underlineStyleHighLighted: {
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default styles;
