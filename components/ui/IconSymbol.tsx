import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { OpaqueColorValue, StyleProp, TextStyle } from 'react-native';

export type IconSymbolName = string;

export function IconSymbol({
  name,
  size = 26,
  color = 'black',
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Ionicons
      color={color}
      size={size}
      name={name as any}
      style={style}
    />
  );
}
