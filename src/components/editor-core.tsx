import React from 'react';
import {WebView} from 'react-native-webview';
import {Platform} from 'react-native';

type CommandsType = {
  tag:
    | 'bold'
    | 'italic'
    | 'underline'
    | 'redo'
    | 'undo'
    | 'insert'
    | 'save'
    | 'bulleted-list'
    | 'numbered-list';
  value?: string;
  callback?: (value: string) => void;
};

export function runCommands(webview: WebView, commands: CommandsType) {
  if (webview) {
    webview.injectJavaScript(`
      dispatch(${JSON.stringify(commands)});
      true;
    `);
  }
}

export function EditorCore(props: {
  webviewRef: React.MutableRefObject<WebView | null>;
  webviewStyle?: React.CSSProperties;
  onSaveValue: (value: string) => void;
}) {
  const {webviewRef, onSaveValue} = props;
  const source =
    Platform.OS === 'ios'
      ? 'static.bundle/editor.html'
      : 'file:///android_asset/editor.html';

  return (
    <WebView
      onMessage={event => {
        const json = event.nativeEvent.data;
        try {
          const data = JSON.parse(json);
          if (data && data.type === 'save') {
            onSaveValue(data.value);
          }
        } catch (err) {}
      }}
      ref={webviewRef}
      originWhitelist={['*']}
      allowFileAccess={true} // 允许通过 file://的形式加载资源
      allowingReadAccessToURL="*"
      source={{uri: source}}
    />
  );
}
