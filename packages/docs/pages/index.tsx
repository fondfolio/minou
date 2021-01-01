/* eslint-disable react/jsx-child-element-spacing */
import React, {useCallback, useState} from 'react';
import {useField, useForm} from '@shopify/react-form';
import {
  Box,
  TextField,
  Card,
  Link,
  Button,
  Text,
  Icon,
  Icons,
  Flex,
  Form,
  Title,
  Header,
  Rule,
  Actions,
  Page,
  Spinner,
  Blockquote,
  Display,
  Italic,
  Banner,
  Cards,
  Navigation,
  Section,
  Container,
  Mast,
  Menu,
  Dropdown,
  Avatar,
  Label,
  Layout,
  Mono,
  FieldSet,
  Modal,
  Loader,
  Markdown,
} from 'minou';
import copy from 'copy-to-clipboard';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        primaryAction={{content: 'Delete', destructive: true}}
        active={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Are you sure you want to delete this contribution?"
      >
        <Text>This cannot be undone.</Text>
      </Modal>
      <Header />
      <Page>
        <Layout>
          <Box>
            <Box pb={4}>
              <Display pb={0}>
                Collaborative gift books for your favourite people.
              </Display>
              <Display color="primary">
                <Italic>One of a kind, like the humans they’re made for</Italic>
              </Display>
              <Title>
                For life’s <Italic>significant</Italic> events
              </Title>
              <Text large>
                Fondfolios are customized for your friend, made to order, and
                produced by hand using a combination of modern technologies and
                traditional book binding techniques.
              </Text>
              <Text large>
                Coptic binding is used for maximum flexibility and durability —
                allowing the book to lay flat. No glue, just high quality paper
                and thread — made to last a lifetime.
              </Text>
              <Text large pl={5} italic>
                Times when giftcards, chocolates or flowers can’t communicate
                the depth of your gratitude for another’s existence
              </Text>
              <Text small>
                Don’t pay until all contributions are collected.
                <Italic>-and-</Italic>
                <Link url="">Free Shipping</Link>
              </Text>
            </Box>
            <Loader />
            <Box mt={4} mb="5">
              <Card active title="Wedding">
                <Text pb={0}>
                  What better gift to give a couple on their wedding day than
                  the memories and wisdom from everyone near and dear, including
                  those unable to attend.
                </Text>
              </Card>
              <Card active title="Milestone Birthday">
                <Text pb={0}>
                  What better gift to give a couple on their wedding day than
                  the memories and wisdom from everyone near and dear, including
                  those unable to attend.
                </Text>
              </Card>
            </Box>
            <Card active title="Retirement" action={{content: 'Get started'}}>
              <Text pb={0}>
                What better gift to give a couple on their wedding day than the
                memories and wisdom from everyone near and dear, including those
                unable to attend.
              </Text>
            </Card>
            <Card active action={{content: 'Create a Fondfolio'}}>
              <Text large pb={0}>
                Fondfolio allows you to create a beautiful collaborative book
                filled with sincere and heartwarming words from loved ones. A
                personal gift, for someone special.
              </Text>
            </Card>
            <Card active title="Create">
              <Text large pb={0}>
                Fondfolio allows you to create a beautiful collaborative book
                filled with sincere and heartwarming words from loved ones. A
                personal gift, for someone special.
              </Text>
            </Card>
            <Card active title="Collect">
              <Text large pb={0}>
                Share your unique questionnaire url with the friends and family
                of the recipient. You will be notified each time someone
                contributes.
              </Text>
            </Card>
            <Card active title="Order">
              <Text large pb={0}>
                When you’re ready, customize the design and place the order.
                We’ll begin production right away and will notify you as soon as
                it ships (gift wrapping included).
              </Text>
            </Card>
          </Box>
          <Box>
            <Banner title="Whoops!" variant="error">
              You did not enter a username or a password.
            </Banner>
            <Banner variant="error">
              Must be at least 8 characters, Must have a lower case character,
              Must have an upper case character, Must have at least 1 number,
              Must have a special character
            </Banner>
            <Banner title="Sorry!" variant="warning">
              That password isn’t right. <Link>Recover your password.</Link>
            </Banner>
            <Banner title="Nice!" variant="success">
              Something successful just happened.
            </Banner>
            <Banner title="Okay">Everything is fine.</Banner>
            <LoginSignUp />
            <Box pt="6">
              <FieldSet
                action={{variant: 'secondary', content: 'Open questionnaire'}}
              >
                <TextField
                  label="Share link"
                  labelAction={{
                    content: 'Copy to clipboard',
                    onClick: () => {
                      copy('Text', {
                        debug: true,
                        message: 'Press #{key} to copy',
                      });
                    },
                  }}
                  value="https://fondfol.io/33NNMBl"
                />
              </FieldSet>

              <Button onClick={() => setModalOpen(true)}>Show Modal</Button>
            </Box>
            <Order />
          </Box>
        </Layout>
        <Rule m={4} icon={Icons.LogoIcon} color="primary" center />
        <Layout full>
          <Flex pb={2} flexWrap="wrap" justifyContent="center">
            <IconBox icon={Icons.User} />
            <IconBox icon={Icons.ArrowDown} />
            <IconBox icon={Icons.ArrowUp} />
            <IconBox icon={Icons.DropUp} />
            <IconBox icon={Icons.DropDown} />
            <IconBox icon={Icons.ArrowLongRight} />
            <IconBox icon={Icons.ArrowLongLeft} />
            <IconBox icon={Icons.ArrowLongExternal} />
            <IconBox icon={Icons.Close} />
            <IconBox icon={Icons.MoreDots} />
            <IconBox icon={Icons.Clipboard} />
            <IconBox icon={Icons.Search} />
            <IconBox icon={Icons.Lightbulb} />
            <IconBox icon={Icons.Mail} />
            <IconBox icon={Icons.Tooltip} />
            <IconBox icon={Icons.Plus} />
            <IconBox icon={Icons.EventMoving} />
            <IconBox icon={Icons.EventMovingLarge} />
            <IconBox icon={Icons.EventBirthday} />
            <IconBox icon={Icons.EventBirthdayLarge} />
            <IconBox icon={Icons.EventCause} />
            <IconBox icon={Icons.EventCauseLarge} />
            <IconBox icon={Icons.EventAnniversary} />
            <IconBox icon={Icons.EventAnniversaryLarge} />
            <IconBox icon={Icons.EventEngagement} />
            <IconBox icon={Icons.EventEngagementLarge} />
            <IconBox icon={Icons.EventWedding} />
            <IconBox icon={Icons.EventWeddingLarge} />
            <IconBox icon={Icons.EventRetirement} />
            <IconBox icon={Icons.EventRetirementLarge} />
            <IconBox icon={Icons.EventRecovery} />
            <IconBox icon={Icons.EventRecoveryLarge} />
            <IconBox icon={Icons.EventRemembering} />
            <IconBox icon={Icons.EventRememberingLarge} />
            <IconBox icon={Icons.EventSuccess} />
            <IconBox icon={Icons.EventSuccessLarge} />
            <IconBox icon={Icons.EventNewborn} />
            <IconBox icon={Icons.EventNewbornLarge} />
            <IconBox icon={Icons.Folio} />
            <IconBox icon={Icons.FolioLarge} />
            <IconBox icon={Icons.LogoIcon} />
            <IconBox icon={Icons.LogoIconLarge} />
            <IconBox icon={Icons.LogoWord} />
            <IconBox icon={Icons.Logo} />
            <IconBox icon={Icons.Facebook} />
            <IconBox icon={Icons.Twitter} />
            <IconBox icon={Icons.Instagram} />
            <IconBox icon={Icons.Success} />
            <IconBox icon={Icons.Error} />
            <IconBox icon={Icons.Warning} />
            <IconBox icon={Icons.Info} />
            <IconBox icon={Icons.OptionHardcover} />
            <IconBox icon={Icons.OptionDigital} />
            <IconBox icon={Icons.OptionCustom} />
            <Spinner />
          </Flex>
        </Layout>
        <Layout full>
          <Rule
            text={
              <Text pb={0} small italic pr={1}>
                What is a Fondfolio?
              </Text>
            }
            center
            action={{
              content: 'Learn more',
            }}
          />
          <Blockquote citation="Allan, Perth WA">
            Lise absolutely loves the gift. She has been flipping through it
            every day this week, and was brought to tears several times. Thank
            you for making this possible.
          </Blockquote>
        </Layout>
        <Layout full>
          <Cards>
            <Card active title="Digital Only">
              <Box py={3}>
                <Icon icon={Icons.OptionDigital} />
              </Box>
              <Text large>
                Your Fondfolio contributions stored online forever in a
                personalized Fondfolio website—share the lovely words with
                everyone who contributed. Sort responses by question type or
                read individual responses.
              </Text>
              <Label large pb={0}>
                $80
              </Label>
            </Card>
            <Card active title="Digital + Hardcover">
              <Box py={3}>
                <Icon icon={Icons.OptionHardcover} />
              </Box>
              <Text large>
                Everything you get with digital, plus a beautiful handmade
                hardcover version—each response occupying a spread. Free
                Furoshiki giftwrapping, free shipping. Something tangible to
                treasure.
              </Text>
              <Label large pb={0}>
                $240
              </Label>
            </Card>
            <Card active title="Digital + Custom">
              <Box py={3}>
                <Icon icon={Icons.OptionCustom} />
              </Box>
              <Text large>
                Solid hardwood cover? Custom engraving inside? Handmade book
                box? The only limits are that of your imagination, let us know
                what you’re thinking.
              </Text>
              <Label large pb={0}>
                $360
              </Label>
            </Card>
          </Cards>
          <Text small m="auto" textAlign="center">
            Don’t pay anything until all contributions have been collected and
            you are ready to order. All prices in US Dollars (USD). Free
            Shipping is within North America. International shipping is
            available at a discounted rate.
          </Text>
        </Layout>
      </Page>
      <Page>
        <Header secondary={<Link unstyled>Help</Link>} primary={<UserMenu />} />
        <Mast
          title="Minou McDougafien"
          image="/avatar.jpg"
          meta={
            <>
              <Label small pb={0}>
                Also known as:
              </Label>
              <Mono>Pizza Cat, Cheese Monster</Mono>
            </>
          }
        />
        <Navigation
          bg="white"
          postfix={<Button variant="primary">Order Now</Button>}
          items={[
            {content: 'Contributions'},
            {content: 'Details'},
            {content: 'Share'},
            {content: 'Customizations', active: true},
            {content: 'Questionnaire', external: true},
          ]}
        />
        <Container>
          <Section>
            <Card active>
              <Label large pb={0}>
                Matthew S. Contributed
              </Label>
              <Text italic small pb={0}>
                10 minutes ago
              </Text>
            </Card>
            <Card active title="Fiona McDougall Contributed">
              <Text pb={0}>
                10 Minutes ago <Link>Edit</Link>
              </Text>
            </Card>
            <Card active title="What‘s Next" action={{content: 'Do this now'}}>
              <Text pb={0}>
                What better gift to give a couple on their wedding day than the
                memories and wisdom from everyone near and dear, including those
                unable to attend.
              </Text>
            </Card>
          </Section>
        </Container>
        <Rule my={2} icon={Icons.LogoIcon} />
        <Container>
          <Section justifyContent="center" flexDirection={['column', 'row']}>
            <Box px={3}>
              <Text large textAlign={['center', 'right']}>
                Questions? <Italic>We’re here to help.</Italic>
                <br />
                <Link>Visit support</Link> or <Link>Send us an email</Link>
                <br />
                We value your words.
              </Text>
            </Box>
            <Box px={3}>
              <Text large textAlign={['center', 'left']}>
                Gifting tips, special offers and
                <br />
                an occasional bundle of email joy.
                <br />
                <Link>Subscribe to our newsletter</Link>
              </Text>
            </Box>
          </Section>
        </Container>
        <Navigation
          prefix={
            <Box pr={4} display={['none', 'none', 'block']}>
              <Label small pb={0}>
                Copyright 2020 Fondfolio Inc.
              </Label>
            </Box>
          }
          items={[
            {content: 'Help', size: 'small'},
            {content: 'Terms', size: 'small'},
            {content: 'Privacy', size: 'small'},
            {content: 'About', size: 'small'},
            {content: 'Blog', size: 'small'},
          ]}
          postfix={
            <Box pl={2} display={['none', 'none', 'block']}>
              <Text small italic pb={0}>
                <Link unstyled>Proudly made in Toronto by Cartogram</Link>
              </Text>
            </Box>
          }
        />
      </Page>
      <Page>
        <Container>
          <Section>
            <Display>
              <Italic>Buttons</Italic>
            </Display>
          </Section>
          <Section justifyContent="space-around">
            <Flex p={3} pl={0} flexDirection="column">
              <Box pb="1">
                <Link external url="https://fondfolio.com">
                  External link
                </Link>
              </Box>
              <Box pb="1">
                <Link url="/test">Internal link</Link>
              </Box>
              <Box pb="1">
                <Link unstyled>Unstyled link</Link>
              </Box>
              <Box pb="1">
                <Button unstyled>Unstyled button</Button>
              </Box>
            </Flex>
            <Flex p={3} flexDirection="column">
              <Box pb="1">
                <Button>Base button</Button>
              </Box>
              <Box pb="1">
                <Button loading>Loading base button</Button>
              </Box>
              <Box pb="1">
                <Button destructive>Destructive base button</Button>
              </Box>
              <Box pb="1">
                <Button size="small">Small base button</Button>
              </Box>
            </Flex>
            <Flex p={3} flexDirection="column">
              <Box pb="1">
                <Button variant="secondary">Secondary button</Button>
              </Box>
              <Box pb="1">
                <Button disabled variant="secondary">
                  Disabled secondary button
                </Button>
              </Box>
              <Box pb="1">
                <Button
                  loading
                  variant="secondary"
                  onClick={() => console.log('clicked')}
                >
                  Loading secondary button
                </Button>
              </Box>
              <Box pb="1">
                <Button variant="secondary" destructive>
                  Destructive secondary button
                </Button>
              </Box>
              <Box pb="1">
                <Button loading variant="secondary" destructive>
                  Loading destructive secondary button
                </Button>
              </Box>
              <Box pb="1">
                <Button disabled variant="secondary" destructive>
                  Disabled destructive secondary button
                </Button>
              </Box>
              <Box pb="1">
                <Button size="small" variant="secondary">
                  Small secondary button
                </Button>
              </Box>
            </Flex>
            <Flex p={3} flexDirection="column">
              <Box pb="1">
                <Button variant="primary">Primary button</Button>
              </Box>
              <Box pb="1">
                <Button destructive variant="primary">
                  Destructive primary button
                </Button>
              </Box>
              <Box pb="1">
                <Button destructive loading variant="primary">
                  Loading destructive primary button
                </Button>
              </Box>
              <Box pb="1">
                <Button disabled destructive variant="primary">
                  Disabled destructive primary button
                </Button>
              </Box>
              <Box pb="1">
                <Button loading variant="primary">
                  Loading primary button
                </Button>
              </Box>
              <Box pb="1">
                <Button size="small" variant="primary">
                  Small primary button
                </Button>
              </Box>
            </Flex>
          </Section>
          <Section>
            <Display>
              <Italic>Typograpy</Italic>
            </Display>
          </Section>
          <Section>
            <Flex flexDirection="column">
              <Display>Display Text</Display>
              <Title>Title</Title>
              <Label>Label</Label>
              <Label italic>Label italic</Label>
              <Text large>Text Large</Text>
              <Text large italic>
                Text Large
              </Text>
              <Text>Text</Text>
              <Text small>Text Small</Text>
              <Label small>Text Small</Label>
            </Flex>
          </Section>
        </Container>
      </Page>
      <Page>
        <Container>
          <Section>
            <Layout center>
              <>
                <Icon icon={Icons.EventAnniversaryLarge} m="auto" />
                <Display textAlign="center" italic>
                  Minou’s Anniversary
                </Display>
                <Text large textAlign="center">
                  You’ve been invited to participate in this short questionnaire
                  because you’re part of Minou’s inner circle of most treasured
                  friends and family. Your contribution will become part of a
                  custom-made book that will be gifted to Minou. One submission
                  per person. Also, it’s up to you to keep this a secret, the
                  surprise will be that much sweeter! Thanks so much.
                </Text>
                <Box m="auto">
                  <Button url="http://cartogram.ca" variant="primary" external>
                    Get Started
                  </Button>
                </Box>
              </>
            </Layout>
          </Section>
        </Container>
      </Page>
      <Page>
        <Container>
          <Section>
            <Layout>
              <>
                <TextField
                  textSize="small"
                  value="Small text field"
                  label="Describe a fond memory you recall having shared with Minou."
                />
                <TextField
                  large
                  multiline
                  value="Large text field"
                  label="Describe a fond memory you recall having shared with Minou."
                  help={{
                    hidden: false,
                    icon: Icons.DropDown,
                    text:
                      '**It could be something seemingly mundane** like a great conversation you shared over a *cup of coffee*, or a [completely unique]() and magical event. It doesn’t matter so long as the memory has meaning for you and makes you smile when you think of it.',
                    action: {
                      content: 'Not sure where to start?',
                    },
                  }}
                />
                <Markdown>
                  **Markdown** [Link](/test) *Italic* Normal text
                </Markdown>
              </>
            </Layout>
          </Section>
        </Container>
      </Page>
    </>
  );
}

function IconBox({icon}) {
  return (
    <Box p={4}>
      <Icon icon={icon} />
    </Box>
  );
}

function UserMenu() {
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const activator = (
    <Flex alignItems="center">
      <Icon icon={Icons.DropDown} color="primary" />
      <Avatar active={popoverActive} onClick={togglePopoverActive} />
    </Flex>
  );

  return (
    <Dropdown
      active={popoverActive}
      activator={activator}
      onClose={togglePopoverActive}
    >
      <Menu
        items={[
          {content: 'Create new', external: true, url: '/help'},
          {content: 'My fondfolios'},
          {content: 'Settings'},
          {content: 'Orders'},
          {content: 'Log out', segment: true},
        ]}
      />
    </Dropdown>
  );
}

function Order() {
  const {fields, submit, submitting, submitErrors} = useForm({
    fields: {
      copies: useField('1'),
    },
    async onSubmit(fieldValues) {
      console.log('submitting', fieldValues);
      return Promise.resolve({status: 'fail', errors: []});
    },
  });

  return (
    <Form submitting={submitting} onSubmit={submit}>
      <TextField
        type="number"
        label="Copies"
        horizontal
        center
        textSize="small"
        {...fields.copies}
      />
      <Actions
        note="This is a note about the order"
        primaryAction={{content: 'Order'}}
      />
    </Form>
  );
}

function LoginSignUp() {
  const {fields, submit, submitting, submitErrors} = useForm({
    fields: {
      email: useField(''),
      password: useField(''),
    },
    async onSubmit(fieldValues) {
      console.log('submitting', fieldValues);
      return Promise.resolve({status: 'fail', errors: []});
    },
  });

  return (
    <Form submitting={submitting} onSubmit={submit}>
      <TextField
        type="text"
        label="Email Address"
        help={{
          text: 'Enter your email and we will send you a reset link',
        }}
        name="email"
        placeholder="your@email.com"
        {...fields.email}
        error="Not a valid email"
      />
      <TextField
        type="password"
        placeholder="••••••••"
        label="Password"
        name="password"
        labelAction={{
          content: 'Forgot password?',
          url: '/test',
        }}
        {...fields.password}
      />
      <TextField
        center
        help={{
          text: 'Enter your email and we will send you a reset link',
        }}
        label="Forgot Password"
        labelAction={{
          content: 'Action',
          url: '/test',
        }}
        {...fields.password}
        error="Not strong enough"
      />
      <TextField
        center
        help={{
          text: 'Enter your email and we will send you a reset link',
        }}
        label="Forgot Password"
        {...fields.password}
      />
      <Text small textAlign="center">
        By signing up for an account you agree to our
        <Link url="">Terms &amp; Conditions</Link>
      </Text>
      <Actions primaryAction={{content: 'Login'}} />
    </Form>
  );
}
