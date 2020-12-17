export interface BaseAction {
  /** A unique identifier for the action */
  id?: string;
  /** Content the action displays */
  content?: string;
  /** Visually hidden text for screen readers */
  accessibilityLabel?: string;
  /** A destination to link to, rendered in the action */
  url?: string;
  /** Forces url to open in a new tab */
  external?: boolean;
  /** Callback when an action takes place */
  onAction?(): void;
  /** Callback when mouse enter */
  onMouseEnter?(): void;
  /** Callback when element is touched */
  onTouchStart?(): void;
}

export interface Action extends BaseAction {}

export interface DisableableAction extends Action {
  /** Whether or not the action is disabled */
  disabled?: boolean;
}

export interface DestructableAction extends Action {
  /** Destructive action */
  destructive?: boolean;
}

export interface IconableAction extends Action {
  /** Source of the icon */
  // TODO: Bring Icon into minou and type this
  // icon?: IconProps['source'];
}

export interface LoadableAction extends Action {
  /** Should a spinner be displayed */
  loading?: boolean;
}

export interface ComplexAction
  extends Action,
  DisableableAction,
  DestructableAction,
  IconableAction,
  LoadableAction {}
