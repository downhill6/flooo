import React, {useCallback, useState} from 'react';
import {VStack, HStack, Text, Pressable} from 'native-base';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {TransparentModal} from './mask';
import {useBackHandler} from '@react-native-community/hooks';
import type {WebView} from 'react-native-webview';
import {EditorCore, runCommands} from './editor-core';
import {Keyboard} from 'react-native';
import {
  NumberedIcon,
  BulletedIcon,
  BoldIcon,
  ItalicIcon,
  SendIcon,
  RedoIcon,
  UndoIcon,
} from '../icons';

const InitialFooterHeight = 60;
const ExpandedFooterHeight = 152;

export function Footer() {
  const webviewRef = React.useRef<WebView>(null);
  const [visible, setVisible] = useState(false);
  const height = useSharedValue(InitialFooterHeight);
  const style = useAnimatedStyle(() => {
    return {
      height: withTiming(height.value, {
        duration: 100,
        easing: Easing.linear,
      }),
    };
  });
  useBackHandler(() => {
    if (visible) {
      onMaskTouchEnd();
      return true;
    }
    return false;
  });

  const onFoucs = () => {
    setVisible(true);
    height.value = withTiming(ExpandedFooterHeight, {
      duration: 100,
      easing: Easing.linear,
    });
  };

  const onMaskTouchEnd = () => {
    setVisible(false);
    webviewRef.current?.injectJavaScript(`
      document.activeElement && document.activeElement.blur();
      true;
    `);
    Keyboard.dismiss();

    height.value = withTiming(InitialFooterHeight, {
      duration: 100,
      easing: Easing.linear,
    });
  };

  const bold = useCallback(() => {
    runCommands(webviewRef.current!, {
      tag: 'bold',
    });
  }, []);

  const italic = useCallback(() => {
    runCommands(webviewRef.current!, {
      tag: 'italic',
    });
  }, []);

  const bulleted = useCallback(() => {
    runCommands(webviewRef.current!, {
      tag: 'bulleted-list',
    });
  }, []);

  const numbered = useCallback(() => {
    runCommands(webviewRef.current!, {
      tag: 'numbered-list',
    });
  }, []);

  const redo = useCallback(() => {
    runCommands(webviewRef.current!, {
      tag: 'redo',
    });
  }, []);

  const undo = useCallback(() => {
    runCommands(webviewRef.current!, {
      tag: 'undo',
    });
  }, []);

  const save = useCallback(() => {
    runCommands(webviewRef.current!, {
      tag: 'save',
    });
  }, []);

  const onSaveValue = useCallback((value: string) => {
    console.log('save', JSON.stringify(value));
  }, []);

  return (
    <>
      <TransparentModal visible={visible} onPress={onMaskTouchEnd} />
      <VStack bg="custom.white" px="4" py="4" zIndex={10}>
        <Animated.View style={style} onTouchEnd={onFoucs}>
          <EditorCore webviewRef={webviewRef} onSaveValue={onSaveValue} />
          <HStack h={8} alignItems="center" bg="custom.white">
            <Pressable
              mr="2"
              w="8"
              h="100%"
              alignItems="center"
              justifyContent="center">
              {({isPressed}) => {
                return (
                  <Text
                    fontSize="20"
                    color={isPressed ? 'gray.600' : 'gray.300'}>
                    #
                  </Text>
                );
              }}
            </Pressable>
            <Pressable
              onPress={bulleted}
              mr="2"
              w="8"
              h="100%"
              alignItems="center"
              justifyContent="center">
              {({isPressed}) => {
                return (
                  <BulletedIcon
                    color={isPressed ? 'gray.600' : 'gray.300'}
                    size={5}
                  />
                );
              }}
            </Pressable>
            <Pressable
              onPress={numbered}
              mr="2"
              w="8"
              h="100%"
              alignItems="center"
              justifyContent="center">
              {({isPressed}) => {
                return (
                  <NumberedIcon
                    color={isPressed ? 'gray.600' : 'gray.300'}
                    size={5}
                  />
                );
              }}
            </Pressable>
            <Pressable
              onPress={bold}
              mr="2"
              w="8"
              h="100%"
              alignItems="center"
              justifyContent="center">
              {({isPressed}) => {
                return (
                  <BoldIcon
                    color={isPressed ? 'gray.600' : 'gray.300'}
                    size={5}
                  />
                );
              }}
            </Pressable>
            <Pressable
              onPress={italic}
              mr="2"
              w="8"
              h="100%"
              alignItems="center"
              justifyContent="center">
              {({isPressed}) => {
                return (
                  <ItalicIcon
                    color={isPressed ? 'gray.600' : 'gray.300'}
                    size={5}
                  />
                );
              }}
            </Pressable>
            <Pressable
              onPress={undo}
              mr="2"
              w="8"
              h="100%"
              alignItems="center"
              justifyContent="center">
              {({isPressed}) => {
                return (
                  <UndoIcon
                    color={isPressed ? 'gray.600' : 'gray.300'}
                    size={5}
                  />
                );
              }}
            </Pressable>
            <Pressable
              onPress={redo}
              mr="2"
              w="8"
              h="100%"
              alignItems="center"
              justifyContent="center">
              {({isPressed}) => {
                return (
                  <RedoIcon
                    color={isPressed ? 'gray.600' : 'gray.300'}
                    size={5}
                  />
                );
              }}
            </Pressable>
            <Pressable
              onPress={save}
              _pressed={{
                bg: 'custom.green',
              }}
              bg="custom.ligthGreen"
              w="12"
              h="80%"
              alignItems="center"
              ml="auto"
              mt="2"
              justifyContent="center"
              borderRadius="32">
              <SendIcon color="custom.white" size={4} />
            </Pressable>
          </HStack>
        </Animated.View>
      </VStack>
    </>
  );
}
