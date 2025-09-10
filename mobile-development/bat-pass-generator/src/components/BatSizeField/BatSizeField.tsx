import React, {useEffect, useState} from 'react';
import {Text, Pressable } from 'react-native';
import { View } from 'react-native';
import { Dispatch, SetStateAction } from 'react';

import { styles } from './BatSizeFieldStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';

export function BatSizeField({onType, size}: {onType: Dispatch<SetStateAction<number>>, size: string}) {
  return (
    <>
      <View style={styles.field}>

        <Text style={styles.title}>
          Password Size:
        </Text>

        <View style={styles.viewText}>
          <BatTextInput pass={size} placeholderText="size" style={styles.textInput} onChangeText={onType}/>
        </View>
      </View>
    </>
  );
}