interface TextProps {
  children: React.ReactNode | string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
  tabIndex?: number;
  as?: keyof JSX.IntrinsicElements;
  isScrambled?: boolean;
}

export interface ParagraphProps extends TextProps {}

export interface SmallProps extends TextProps {}
