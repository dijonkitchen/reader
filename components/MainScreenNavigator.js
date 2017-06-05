import { StackNavigator } from 'react-navigation';

import Stories from './Stories';
import Story from './Story';

export default MainScreenNavigator = StackNavigator({
  Home: {
    screen: Stories,
  },
  Story: {
    screen: Story,
  },
});
