import React, {useMemo} from 'react';
import {useThematicStyles} from 'src/theme/hooks.ts';
import {
  StyleProp,
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {Color} from 'src/theme/types';

export type Props =
  | {
      children: React.ReactNode;
      i18next?: undefined;
    }
  | {
      children?: undefined;
      i18next: string;
    };

export type TextProps = Omit<RNTextProps, 'style' | 'children'> & {
  m_h1?: boolean;
  m_h2?: boolean;
  m_h3?: boolean;
  m_p?: boolean;
  m_p2?: boolean;
  m_p3?: boolean;
  m_title?: boolean;
  center?: boolean;
  clean?: boolean;
  right?: boolean;
  color?: Color | keyof typeof Color;
  style?: StyleProp<ViewStyle | TextStyle>;
} & Props;

export const Text = ({
  children,
  center,
  m_p,
  m_p2,
  m_p3,
  m_h1,
  m_h2,
  m_h3,
  m_title,
  style,
  clean,
  color,
  right,
  i18next,
  ...props
}: TextProps) => {
  // const {colors} = useTheme();
  const {styles, colors} = useThematicStyles(rawStyles);

  const value = useMemo(
    () => (typeof i18next !== 'undefined' ? i18next : children),
    [children, i18next],
  );

  return clean ? (
    <RNText allowFontScaling={false} testID="clearText" {...props} style={style}>
      {children}
    </RNText>
  ) : (
    <RNText
      allowFontScaling={false}
      selectable={true}
      testID={'text'}
      {...props}
      style={[
        {
          color: colors.text,
        },
        m_h1 && styles.m_h1,
        m_h2 && styles.m_h2,
        m_h3 && styles.m_h3,
        m_p && styles.m_p,
        m_p2 && styles.m_p2,
        m_p3 && styles.m_p3,
        style,
        !!color && {color: colors[color]},
        center && styles.center,
        right && styles.right,
      ]}>
      {children}
    </RNText>
  );
};

const rawStyles = StyleSheet.create({
  m_h1: {
    fontSize: 50,
    fontFamily: 'Montserrat-SemiBold',
  },
  m_h2: {
    fontSize: 36,
    fontFamily: 'Montserrat-SemiBold',
  },
  m_h3: {
    fontSize: 28,
    fontFamily: 'Montserrat-SemiBold',
  },
  m_p: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  m_p2: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  m_p3: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
});
