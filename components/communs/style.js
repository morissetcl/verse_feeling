'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#f4f3f3'
  },
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#05004e',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    borderRadius: 10
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    position: 'relative',
    padding: 10,
    color: '#05004e'
  },
  badges: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '2%'
  },
  badge: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 12,
    paddingTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  text: {
    color: 'white'
  }
});
