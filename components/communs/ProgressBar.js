import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import ProgressBarAnimated from 'react-native-progress-bar-animated';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: props.value
    }
  }

  render() {
    barWidth = Dimensions.get('screen').width;
    return (
      <View>
        <ProgressBarAnimated
          width={barWidth}
          value={this.state.progress}
          backgroundColorOnComplete="#6CC644"
          borderColor='#f4f3f3'
          barAnimationDuration={0}
          borderRadius={0}
          backgroundColor='#05004e'
        />
      </View>
    )
  }
}

export default ProgressBar
