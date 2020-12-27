import React from 'react';
import styled, {keyframes} from 'styled-components';

interface BackdropProps {
  onClick(): void;
  active: boolean;
}

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0%, 20px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(-0%, 0, 0);
  }
`;

const easing = 'cubic-bezier(.19,1,.22,1)';

const StyledBackdrop = styled.a`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  opacity: 0;
  z-index: 0;
`;

function Backdrop({onClick, active}: BackdropProps) {
  if (!active) {
    return null;
  }

  return <StyledBackdrop onClick={onClick} aria-hidden="true" />;
}

const StyledDropdown = styled.div`
  position: relative;
  z-index: 1;
`;

const StyledDropdownContent = styled.div`
  position: absolute;
  margin-top: 0.5em;
  top: 100%;
  right: 0%;
  transform: translate(0%, 0);
  background: white;
  min-width: 200px;
  max-width: 100%;
  padding: 1em 0;
  box-shadow: ${({theme}) => theme.shadows.default};
  animation: ${fadeInUp} ${({theme}) => `${theme.timings[0]} ${easing}`};
`;

interface Props {
  /** The content to display inside the popover */
  children?: React.ReactNode;
  /** Show or hide the Popover */
  active: boolean;
  /** The element to activate the Popover */
  activator: React.ReactElement;
  /** Callback when popover is closed */
  onClose(): void;
}

export function Dropdown({active, onClose, children, activator}: Props) {
  if (!active) {
    return activator;
  }
  return (
    <>
      <Backdrop onClick={onClose} active={active} />
      <StyledDropdown>
        {activator}
        <StyledDropdownContent>{children}</StyledDropdownContent>
      </StyledDropdown>
    </>
  );
}
