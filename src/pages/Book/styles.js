import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 100,
  },

  input: {
    fontSize: 16,
    borderBottomColor: '#7159c1',
    borderBottomWidth: 1,
    marginBottom: 25

  },
  
  buttomContainer: {
    alignItems: 'center',
    marginVertical: 70,
  },

  cameraButtom: {
    width: 60,
    height: 60,
    backgroundColor: '#7159c1',
    borderRadius: 60/2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
  },


  cadastrarButtom: {
    width: 280,
    height: 60,
    backgroundColor: '#7159c1',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },

  buttomText: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff'
  },

  cancelarButtom: {
    width: 280,
    height: 60,
    backgroundColor: '#f0932b',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }


})