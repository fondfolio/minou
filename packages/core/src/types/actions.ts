export interface BaseAction {
  /** A unique identifier for the action */
  id?: string;
  /** Content the action displays */
  content?: string | React.ReactNode;
  /** Visually hidden text for screen readers */
  accessibilityLabel?: string;
  /** A destination to link to, rendered in the action */
  url?: string;
  /** Forces url to open in a new tab */
  external?: boolean;
  /** Callback when an action takes place */
  onClick?(): void;
  /** Callback when mouse enter */
  onMouseEnter?(): void;
  /** Callback when element is touched */
  onTouchStart?(): void;
  /** Changes the button size */
  size?: 'small' | 'large';
  /**
   * By default a button that looks like a link
   * "primary" provides extra visual weight and identifies the primary action in a set of buttons
   * "secondary" gives the button a subtle alternative to the default button styling, appropriate for certain backdrops
   * "destructive" indicates a dangerous or potentially negative action
   */
  variant?: 'primary' | 'secondary';
  active?: boolean;
  /** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type */
  type?: 'submit' | 'button';
  // type?: React.HTMLAttributes<HTMLButtonElement>['f;
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

export interface LoadableAction extends Action {
  /** Should a spinner be displayed */
  loading?: boolean;
}

export interface ComplexAction
  extends Action,
    DisableableAction,
    DestructableAction,
    LoadableAction {}
