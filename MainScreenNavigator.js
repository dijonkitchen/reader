import { StackNavigator } from 'react-navigation';

import Stories from './Stories';

export default MainScreenNavigator = StackNavigator({
  Home: {
    screen: Stories,
  },
});
