import React, {useEffect, useState} from 'react';
import {Text, Pressable } from 'react-native';
import generatePass from '../../services/passwordService';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import { BatButton } from '../BatButton/BatButton';
import { BatSizeField } from '../BatSizeField/BatSizeField';

import * as Clipboard from 'expo-clipboard';

import { styles } from './BatFormStyles';

export function BatForm() {
  const MIN = 4, MAX = 20;
  let size;
  const [pass, setPass] = useState('')
  const [errorMsg, setErrorMsg] = useState('');
  let [sizeText, setSizeText] = useState("8");


  function handleGenerateButton() {
    if (!sizeText || sizeText.length == 0) {
      setErrorMsg("Please enter a password size!");
      return;
    }
    if (!/^\d*$/.test(sizeText)) {
      setErrorMsg(`Password size must be a number!`);
      return;
    }
    size = parseInt(sizeText, 10);
    console.log(size);
    if (size < MIN) {
      setErrorMsg(`Password must have at least ${MIN} digits!`);
    }else if (size > MAX) {
      setErrorMsg(`Password must have at maximum ${MAX} digits!`);
    }else {  
      setErrorMsg('');
      let generateToken = generatePass(size);
      setPass(generateToken)
    }
  }
  
  function handleCopyButton(){
    Clipboard.setStringAsync(pass)
  }
  //when user types, update the state
  //
  
  return (
    <>  
        <BatSizeField onType={setSizeText} size={sizeText}/>
        <BatTextInput pass={pass} placeholderText="pass" onChangeText={setPass}/>
        {errorMsg && <Text style={styles.text}>{errorMsg}</Text>}
        
        <BatButton
            onPress={handleGenerateButton}
            text="GENERATE"
        />

        <BatButton
            onPress={handleCopyButton}
            text="⚡ COPY"
        />
    </>
  );
}