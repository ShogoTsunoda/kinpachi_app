import React from 'react';
import {
  ActivityIndicator,
  ColorValue,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {
  title: string;
  onPress?: (e: GestureResponderEvent) => void;
  loading?: boolean;
  disabled?: boolean;
  color?: ColorValue;
  textColor?: ColorValue;
};

export const Button: React.FC<Props> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  color = '#2B7BBB',
  textColor = '#FFFFFF',
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.btn,
        { backgroundColor: color, opacity: disabled || loading ? 0.6 : pressed ? 0.92 : 1 },
      ]}
      onPress={(e) => !disabled && !loading && onPress?.(e)}
      disabled={disabled || loading}
      android_ripple={{ color: 'rgba(255,255,255,0.2)' }}
      accessibilityRole="button"
      accessibilityLabel={title}
      accessibilityState={{ disabled: disabled || loading, busy: loading }}
      hitSlop={8}
    >
      <View style={styles.row}>
        {loading && <ActivityIndicator color={textColor} style={{ marginRight: 8 }} />}
        <Text style={[styles.text, { color: textColor }]} numberOfLines={1} allowFontScaling>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignSelf: 'flex-start',
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  text: { fontSize: 16, fontWeight: '600' },
});
