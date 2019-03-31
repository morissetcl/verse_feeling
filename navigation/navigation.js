// Navigation/Navigation.js

import { createStackNavigator, createAppContainer } from 'react-navigation'
import Search from '../components/Search'
import Feeling from '../components/Feeling'

const SearchStackNavigator = createStackNavigator(
  {
    Search: Search,
    Feeling: Feeling
  },
  {
    initialRouteName: 'Search'
  }
)

export default createAppContainer(SearchStackNavigator)
