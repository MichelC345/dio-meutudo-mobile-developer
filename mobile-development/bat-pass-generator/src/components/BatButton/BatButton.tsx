import React, {useEffect, useState} from 'react';
import {Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';

//pass as parameter: handle(), text
export function BatButton({onPress, text}: {onPress: () => void, text: string}) {

  //when user types, update the state
  //
  //console.log('batbutton', text);
  return (
    <>
      <Pressable
        onPress={onPress}
        style={styles.button}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </>
  );
}