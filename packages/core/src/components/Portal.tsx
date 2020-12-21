import React, {PureComponent} from 'react';
import {createPortal} from 'react-dom';
import {globalIdGeneratorFactory} from '@minou/utilities';

export interface PortalProps {
  children?: React.ReactNode;
  idPrefix?: string;
  onPortalCreated?(): void;
}

export const portal = {
  props: ['data-portal-id'],
  selector: '[data-portal-id]',
};

interface State {
  isMounted: boolean;
}

const getUniqueID = globalIdGeneratorFactory('portal-');

export class Portal extends PureComponent<PortalProps, State> {
  static defaultProps = {idPrefix: ''};

  state: State = {isMounted: false};

  private portalNode: HTMLElement | null = null;

  private readonly portalId =
    this.props.idPrefix === ''
      ? getUniqueID()
      : `${this.props.idPrefix}-${getUniqueID()}`;

  componentDidMount() {
    this.portalNode = document.createElement('div');
    this.portalNode.setAttribute(portal.props[0], this.portalId);
    document.body.appendChild(this.portalNode);
    this.setState({isMounted: true});
  }

  componentDidUpdate(_: PortalProps, prevState: State) {
    const {onPortalCreated = noop} = this.props;

    if (!prevState.isMounted && this.state.isMounted) {
      onPortalCreated();
    }
  }

  componentWillUnmount() {
    if (this.portalNode) {
      document.body.removeChild(this.portalNode);
    }
  }

  render() {
    return this.portalNode && this.state.isMounted
      ? createPortal(this.props.children, this.portalNode)
      : null;
  }
}

function noop() {}
