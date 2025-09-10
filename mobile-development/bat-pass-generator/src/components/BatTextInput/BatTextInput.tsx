import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatTextInputProps{
  pass:string,
  placeholderText: string
}

export function BatTextInput(props : BatTextInputProps) {
  return (
      <TextInput
        style={styles.inputer}
        value={props.pass}
        placeholder={props.placeholderText}
        {...props}
        style={[styles.inputer, props.style]}
      />
  );
}