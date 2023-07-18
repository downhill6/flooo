import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function TransparentModal(props: {
  visible: boolean;
  onPress?: () => void;
}) {
  const {top} = useSafeAreaInsets();
  const {visible, onPress} = props;

  return visible ? (
    <TouchableWithoutFeedback onPress={onPress} accessible={false}>
      <View style={{...styles.container, top: top}} />
    </TouchableWithoutFeedback>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
});
