import { StackNavigator } from 'react-navigation';

import Stories from './Stories';
import ShortStory from './ShortStory';

export default MainScreenNavigator = StackNavigator({
  Home: {
    screen: Stories,
  },
  Story: {
    screen: ShortStory,
  },
});
