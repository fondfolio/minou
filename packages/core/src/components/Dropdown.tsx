import React from 'react';
import styled, {keyframes} from 'styled-components';

import {cardStyles} from './Card';
import {Box} from './Box';
import {Backdrop} from './Backdrop';

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

const StyledDropdown = styled.div`
  position: relative;
  z-index: ${({theme}) => theme.zIndices.dropdown};
`;

const StyledDropdownContent = styled(Box)`
  ${cardStyles}
  position: absolute;
  margin-top: 0.5em;
  top: 100%;
  right: 0%;
  transform: translate(0%, 0);
  background: white;
  min-width: 200px;
  max-width: 100%;
  padding: 1em 0 1em 0;
  will-change: transform;
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
      <Backdrop context="dropdown" onClick={onClose} active={active} />
      <StyledDropdown>
        {activator}
        <StyledDropdownContent>{children}</StyledDropdownContent>
      </StyledDropdown>
    </>
  );
}
