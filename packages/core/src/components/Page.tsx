import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import {Flex, BoxProps} from './Box';

interface PageProps extends BoxProps {
  children: React.ReactNode;
  title?: string;
}

interface SectionProps extends BoxProps {
  children: React.ReactNode;
  full?: boolean;
  size?: 'large';
}

const StyledPage = styled(Flex)<PageProps>`
  width: 100%;
  min-height: 100vh;
  text-align: center;
`;

export function Page({children, title, ...props}: PageProps) {
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
`;

function Sections({children}: {children: React.ReactNode}) {
  return <StyledSections>{children}</StyledSections>;
}

const StyledSection = styled(Flex)<SectionProps>`
  text-align: left;
  max-width: ${({full, size}) => (full ? '100%' : getWidth(size))};
`;

function Section({full, size, ...props}: SectionProps) {
  const commonProps = {
    flexDirection: 'column',
    alignItems: 'center',
  };

  if (full) {
    return <StyledSection {...commonProps} p={4} full={full} {...props} />;
  }

  return (
    <StyledSection
      {...commonProps}
      p={4}
      width={[1, 2 / 3, 1 / 2]}
      full={full}
      size={size}
      {...props}
    />
  );
}

Page.Section = Section;

function getWidth(size?: 'large') {
  switch (size) {
    case 'large':
      return '1200px';

    default:
      return '600px';
  }
}
