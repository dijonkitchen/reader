import { StackNavigator } from 'react-navigation';

import Stories from './Stories';
import Story from './Story';

export default StackNavigator({
  Home: {
    screen: Stories,
  },
  Story: {
    screen: Story,
  },
});
