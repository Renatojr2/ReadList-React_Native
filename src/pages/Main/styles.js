import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20

  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#7159c1'
  },

  addbuttom: {
    height: 40,
    width: 40,
    borderRadius: 40/2,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center'

  },

  itemButtom: {

  },

  textItem: {
    fontSize: 25,
  }
})