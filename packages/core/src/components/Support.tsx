/* eslint-disable react/jsx-child-element-spacing */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import {typography, TypographyProps} from 'styled-system';
import {Icons} from '@minou/icons';

import {Italic} from './Italic';
import {Link} from './Link';
import {Box, Flex} from './Box';
import {VisuallyHidden} from './VisuallyHidden';
import {Text} from './Text';
import {Container} from './Container';
import {Section} from './Section';
import {Icon} from './Icon';

export function Support() {
  return (
    <>
      <Head>
        <script async src="https://w.appzi.io/w.js?token=qOeTY" />
      </Head>
      <Container>
        <Section
          alignItems="center"
          justifyContent="center"
          flexDirection={['column', 'row']}
        >
          <Box width={['100%', '50%']} px={3} pb={3}>
            <Text pb={0} large textAlign={['center', 'right']}>
              <Italic>Questions?</Italic> We’re here to help.
              <br />
              <Link url="https://fondfolio.com/help">
                Visit support
              </Link> or{' '}
              <Link
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  appzi.openWidget('7d210d18-0f06-48bb-9bcf-d9310696a889');
                }}
              >
                Give us feedback
              </Link>
              <br />
              We value your words.
            </Text>
          </Box>
          <Flex width={['100%', '50%']} px={3} flexDirection="column" pb={3}>
            <Text pb={0} large textAlign={['center', 'left']}>
              Updates, gifting tips, and promos
              <br />— an occasional newsletter
            </Text>
            <NewsletterSignupForm />
          </Flex>
        </Section>
      </Container>
    </>
  );
}

function NewsletterSignupForm() {
  const textMarkup = (
    <Text pb={0} textAlign={['center', 'left']} color="primary" large>
      Subscribe for 15% off your first order
    </Text>
  );

  return (
    <StyledForm
      action="https://fondfolio.us13.list-manage.com/subscribe/post?u=65e81a3fa309924ed7ff3fd68&amp;id=fb444d9189"
      method="post"
      target="_blank"
    >
      <StyledLabel>
        <StyledInput fontSize={[1, 2]} as="input" name="EMAIL" />
        {textMarkup}
      </StyledLabel>
      <VisuallyHidden hidden>
        <input
          type="text"
          name="b_65e81a3fa309924ed7ff3fd68_fb444d9189"
          tabIndex={-1}
        />
      </VisuallyHidden>
      <VisuallyHidden hidden>
        <StyledButton type="submit">
          <Icon color="primary" icon={Icons.ArrowLongExternal} />
        </StyledButton>
      </VisuallyHidden>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  position: relative;
`;

const StyledButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(100%, 25%);
`;

const StyledInput = styled.input<TypographyProps>`
  position: absolute;
  border-bottom: 1px solid;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  line-height: 1.45;
  overflow-wrap: break-word;
  color: ${({theme}) => theme.colors.primary};
  ${typography}
  opacity:0;
  outline: none;

  &:focus {
    opacity: 1;
    + p {
      opacity: 0;
    }
  }
`;
const StyledLabel = styled.label`
  cursor: pointer;
  border-bottom: 1px solid;
`;
