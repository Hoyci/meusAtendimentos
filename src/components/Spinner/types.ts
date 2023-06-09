export interface SpinnerContainerProps {
  variant: 'center';
}

export interface SpinnerProps {
  size?: number;
}

export interface SpinnerComponentProps
  extends SpinnerProps,
    SpinnerContainerProps {}
