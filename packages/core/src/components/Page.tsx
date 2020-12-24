import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import {Flex, BoxProps} from './Box';

interface Props extends BoxProps {
  children: React.ReactNode;
  title?: string;
}

const StyledPage = styled(Flex)<Props>`
  width: 100%;
  min-height: 100vh;
  text-align: center;
`;

export function Page({children, title, ...props}: Props) {
  return (
    <StyledPage alignItems="center" flexDirection="column" {...props}>
      <Head>
        <title>{title || 'Fondfolio'}</title>
      </Head>
      <Sections>{children}</Sections>
    </StyledPage>
  );
}

const StyledSections = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;

function Sections({children}: {children: React.ReactNode}) {
  return <StyledSections>{children}</StyledSections>;
}

const StyledSection = styled(Flex)<Props>`
  max-width: 500px;
  flex: 1;
  text-align: left;
`;

function Section(props: Props) {
  return (
    <StyledSection
      p={4}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width={[1, 2 / 3, 1 / 2]}
      {...props}
    />
  );
}

Page.Section = Section;
