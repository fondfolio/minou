/* eslint-disable react/jsx-child-element-spacing */
import React, {useCallback, useState} from 'react';
import {useField, useForm, asChoiceField} from '@shopify/react-form';
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
  Navigation,
  Section,
  Container,
  Mast,
  Menu,
  List,
  Dropdown,
  Avatar,
  Label,
  Layout,
  Mono,
  FieldSet,
  Modal,
  Loader,
  Markdown,
  ButtonGroup,
  Checkbox,
  Footer,
  ChoiceList,
} from 'minou';
import copy from 'copy-to-clipboard';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const fondfolio = {
    id: '1234',
    title: 'Minou’s Birthday',
    contributions: [
      {
        author: 'Matthew Seccafien',
      },
      {
        author: 'Fiona Mcdougall',
      },
      {
        author: 'Ryan Becker',
      },
      {
        author: 'Vicky Pratt-becker',
      },
    ],
  };

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
      <Layout>
        <Box order={[0, 1]}>first</Box>
        <Box order={[1, 0]}>second</Box>
      </Layout>
      <Page>
        <Layout>
          <Box order={[0, 1]}>
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
            <Box pb={6}>
              <Card
                active
                icon={Icons.EventBirthday}
                title={fondfolio.title}
                action={{content: 'View'}}
                footerAction={{
                  content: 'Order',
                  size: 'small',
                  variant: 'primary',
                }}
                footerText={
                  <>
                    Order now and receive by <strong>Jan 20</strong>
                  </>
                }
              >
                <Label small pt={3}>
                  Recent contributions
                </Label>
                <List
                  small
                  items={fondfolio.contributions.map((contribution) => ({
                    content: contribution.author,
                    meta: '1 hour ago',
                  }))}
                />
                <Box pt={0}>
                  <Link size="small">View all 12 contributions</Link>
                </Box>
              </Card>
              <Card
                active
                title={
                  <Link unstyled bold>
                    <Flex alignItems="center">
                      <Box pr={2}>
                        <Icon icon={Icons.EventBirthday} color="primary" />
                      </Box>
                      {fondfolio.title}
                    </Flex>
                  </Link>
                }
                action={{content: 'View'}}
              >
                <Text small pb={0}>
                  <Italic>No contributions yet :)</Italic> Take a look at our{' '}
                  <Link>Sharing tips</Link>
                </Text>
              </Card>
            </Box>
            <List
              items={mockData.contributions.map((contribution) => ({
                content: contribution.author,
                meta: '1 hour ago',
                active: contribution.active,
                url: '/test',
              }))}
            />
            <List
              small
              items={mockData.contributions.map((contribution) => ({
                content: contribution.author,
                meta: '1 hour ago',
                active: contribution.active,
              }))}
            />
            <Box mt={4} mb="5">
              <Card active title="Wedding">
                <Text pb={0}>
                  What better gift to give a couple on their wedding day than
                  the memories and wisdom from everyone near and dear, including
                  those unable to attend.
                  https://www.cbc.ca/sports/olympics/summer/trackandfield/andrea-seccafien-mental-health-lockdowns-1.5815931
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
            <Card active title="Retirement">
              <Text pb={0}>
                What better gift to give a couple on their wedding day than the
                memories and wisdom from everyone near and dear, including those
                unable to attend.
              </Text>
              <Button>Get started</Button>
            </Card>
            <Card active>
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
            <IconBox icon={Icons.SquareUnchecked} />
            <IconBox icon={Icons.SquareChecked} />
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
          <Flex flexWrap={['wrap', 'nowrap']}>
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
          </Flex>
          <Text small m="auto" textAlign="center">
            Don’t pay anything until all contributions have been collected and
            you are ready to order. All prices in US Dollars (USD). Free
            Shipping is within North America. International shipping is
            available at a discounted rate.
          </Text>
        </Layout>
      </Page>
      <Page>
        <Header
          secondary={
            <Link bold external unstyled>
              Help
            </Link>
          }
          primary={<UserMenu />}
        />
        <Mast
          breadcrumbs={[
            {
              url: '/test',
              external: true,
              content: (
                <>
                  <Icon icon={Icons.ArrowLongLeft} color="primary" />
                  My fondfolios
                </>
              ),
            },
          ]}
          title="Minou McDougafien"
          image="/avatar.jpg"
          meta={
            <>
              <Label small pb={0}>
                Also known as:
              </Label>
              <Mono>Pizza Cat, Mister T.</Mono>
            </>
          }
        />
        <Navigation
          bg="white"
          postfix={<Button variant="primary">Order Now</Button>}
          items={[
            {content: 'Contributions', url: 'somewhere'},
            {content: 'Details', url: 'somewhere'},
            {content: 'Share', url: 'somewhere'},
            {content: 'Customizations', active: true},
            {content: 'Questionnaire', external: true, url: 'sumwhere'},
          ]}
        />
        <Layout>
          <Box>
            <Box pb={5}>
              <Label large>Start Collecting Contributions</Label>
              <Text large>
                Share the questionnaire link with Minou’s{' '}
                <Italic>favourite</Italic> people. When someone contributes
                you’ll recieve an email notification and it’ll show up here
                where you can make edits, if needed.
              </Text>
              <Link>Share the questionnaire link</Link>
            </Box>
          </Box>
          <Box pb={4}>
            <Box>
              <Card
                active
                title="Need help collecting contributions?"
                icon={Icons.Lightbulb}
                action={{content: 'Read our Share FAQ'}}
              >
                <Text pb={0}>
                  Life is complicated, there’s always a million things to do,
                  and sometimes we forget. Don’t give up if you don’t hear back
                  from everyone you’ve reached out to right away. Read our FAQ
                  for some tips we’ve found helpful when reaching out to people
                  or to help round up those stragglers.
                </Text>
              </Card>
            </Box>
          </Box>
        </Layout>
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
            <Card active title="What’s Next" action={{content: 'Do this now'}}>
              <Text pb={0}>
                What better gift to give a couple on their wedding day than the
                memories and wisdom from everyone near and dear, including those
                unable to attend.
              </Text>
            </Card>
          </Section>
        </Container>
        <Rule my={2} icon={Icons.LogoIcon} center />
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
              <Text large textAlign="center">
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
          items={[
            {content: 'Help', size: 'small'},
            {content: 'Terms', size: 'small'},
            {content: 'Privacy', size: 'small'},
            {content: 'About', size: 'small'},
            {content: 'Blog', size: 'small'},
          ]}
        />
        <Container pt={[3, 3]}>
          <Section
            justifyContent="space-between"
            pt="0"
            flexDirection={['column', 'row']}
          >
            <Flex flexDirection={['column', 'row']}>
              <Label small pb={1} pr={1}>
                Copyright 2020 Fondfolio Inc.
              </Label>
              <Text small italic>
                <Link unstyled>Proudly made in Toronto by Cartogram</Link>
              </Text>
            </Flex>
            <ButtonGroup>
              <Link unstyled>
                <Icon color="primary" icon={Icons.Twitter} />
              </Link>
              <Link unstyled>
                <Icon color="primary" icon={Icons.Instagram} />
              </Link>
              <Link unstyled>
                <Icon color="primary" icon={Icons.Facebook} />
              </Link>
            </ButtonGroup>
          </Section>
        </Container>
      </Page>
      <Page>
        <Container>
          <Section>
            <Label>Buttons</Label>
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
              <Italic>Typography</Italic>
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
      <Footer />
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
        note="Your contribution will be sent. If you enter your email above you can continue to edit your words until the Fondfolio has been purchased."
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
      question: useField(''),
      terms: useField(false),
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
      <TextField
        large
        multiline
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
        {...fields.question}
      />
      <Checkbox
        label="Birthday"
        helpText="This is the text for birthday"
        icon={Icons.EventBirthdayLarge}
        {...asChoiceField(fields.terms)}
      />
      <SingleChoiceListExample />
      <Text small textAlign="center">
        By signing up for an account you agree to our
        <Link url="">Terms &amp; Conditions</Link>
      </Text>
      <Actions primaryAction={{content: 'Login'}} />
    </Form>
  );
}

function SingleChoiceListExample() {
  const [selected, setSelected] = useState(['hidden']);

  const handleChange = useCallback((value) => setSelected(value), []);

  return (
    <ChoiceList
      title="Events"
      choices={events.map((event) => ({
        label: event.name,
        value: event.value,
        icon: Icons[`Event${event.name}Large`],
      }))}
      selected={selected}
      onChange={handleChange}
    />
  );
}

const BIRTHDAY = 'BIRTHDAY';
const RETIREMENT = 'RETIREMENT';
const RECOVERY = 'RECOVERY';
const WEDDING = 'WEDDING';
const ANNIVERSARY = 'ANNIVERSARY';
const ENGAGEMENT = 'ENGAGEMENT';
const REMEMBERING = 'REMEMBERING';
const MOVING = 'MOVING';
const SUCCESS = 'SUCCESS';
const NEWBORN = 'NEWBORN';
const CAUSE = 'CAUSE';

const events = [
  {
    name: 'Birthday',
    value: BIRTHDAY,
  },
  {
    name: 'Retirement',
    value: RETIREMENT,
  },
  {
    name: 'Recovery',
    value: RECOVERY,
  },
  {
    name: 'Anniversary',
    value: ANNIVERSARY,
  },
  {
    name: 'Engagement',
    value: ENGAGEMENT,
  },
  {
    name: 'Wedding',
    value: WEDDING,
  },
  {
    name: 'Remembering',
    value: REMEMBERING,
  },
  {
    name: 'Moving',
    value: MOVING,
  },
  {
    name: 'Success',
    value: SUCCESS,
  },
  {
    name: 'Newborn',
    value: NEWBORN,
  },
  {
    name: 'Cause',
    value: CAUSE,
  },
];

const mockData = {
  contributions: [
    {
      id: 'd761a843-8113-4ed8-ae4e-9b335d002629',
      fondfolio: {
        id: '818c4adb-b8af-4c28-acaf-91e80039e293',
        title: 'Andreaâs Birthday',
        __typename: 'Fondfolio',
      },
      updatedAt: '1598504669694',
      author: 'Gabriela DeBues-Stafford',
      answers: [
        {
          question: {
            label: 'Explain how you came to meet Andrea.',
            __typename: 'Question',
          },
          content:
            "I think the first time I met you was at a workout at High Park. I was so excited to meet you because I was, and am, a huge Andwea Seccafien fan. I remember trying to just be cool around you, but it's hard to maintain the illusion of being cool when you speak to each other in baby voices. Who even started that? I really got to know you better when we lived together. I am so grateful that we were able to be roommates. I loved cooking with you, hanging out, plotting the downfall of our enemies, and even the mundane stuff like brushing our teeth together, and cleaning up the aftermath of the kitchen cabinet falling off the wall.",
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Describe a quality or virtue of Andreaâs that you admire.',
            __typename: 'Question',
          },
          content:
            "I love your energy. Kind, calm (aside from when we're ranting), and purposeful in everything you do. That energy comes through when you run, when you write, and in your friendships. When I'm with you, I feel seen and listened to. I strive be more like you, a better friend, always.",
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Imagine Andrea became an inanimate object. What would it be, and why?',
            __typename: 'Question',
          },
          content:
            "I would like to say you would love to be a panda, but that's not an object is it? So maybe a stuffed animal of a panda, or a panda shaped coffee mug. I think it would bring you a lot of joy to be a panda, and always be close to coffee.",
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Describe a fond memory you recall having shared with Andrea.',
            __typename: 'Question',
          },
          content:
            'Although I feel that it is too easy to pick a running memory, it is very special that we made our first Olympic team together and our first World Champs final together. Waking up every day in Doha and moaning, "UGH. I\'m still in Doha!!" will always make me smile, as well as the memory of that subpar celebratory cake.',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'What advice can you offer Andrea for the future?',
            __typename: 'Question',
          },
          content:
            "Honestly, I don't know what advice to give you, because I just want to be like you when I'm 30! The only thing that comes to mind is to remember to take care of yourself, especially in times like these when it feels like the world is falling apart. You have a big heart, and we have to take care of it so it can change the world. <3",
          __typename: 'Answer',
        },
      ],
      __typename: 'Contribution',
    },
    {
      id: 'bf47bd55-5e2b-4b59-b53d-6a8819716b4d',
      fondfolio: {
        id: '818c4adb-b8af-4c28-acaf-91e80039e293',
        title: 'Andreaâs Birthday',
        __typename: 'Fondfolio',
      },
      updatedAt: '1597672278408',
      author: 'Genevieve LaCaze',
      answers: [
        {
          question: {
            label: 'Explain how you came to meet Andrea.',
            __typename: 'Question',
          },
          content:
            'The first time I remember meeting/seeing Andrea was in the womenâs 5000m Olympic heat in Rio. She was in the race with both Eloise and I and I remember thinking âwhose this little Canadian pocket rocket!?â ',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Describe a quality or virtue of Andreaâs that you admire.',
            __typename: 'Question',
          },
          content:
            'Sheâs very tough. Andrea will work hard behind closed doors to chase her dreams. She doesnât need a crowd, she is just happy to work for what she wants no matter what. ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Imagine Andrea became an inanimate object. What would it be, and why?',
            __typename: 'Question',
          },
          content:
            'A shot of espresso. No bells and whistles needed, she offers everything you need without complexity. A strong, reliable person that wonât disappoint like your favourite shot of espresso. ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Describe a fond memory you recall having shared with Andrea.',
            __typename: 'Question',
          },
          content:
            '2018 Spain training camp. This is a fond  memory with Andrea because these camps are brutal and there is nothing easy about any run or session. Having someone like Andrea around for these camps is essential because you can rely on her work ethic on a tough day when you need someone to share the load. Itâs always a pleasure training and living together. ',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'What advice can you offer Andrea for the future?',
            __typename: 'Question',
          },
          content:
            'Everyoneâs path to success is different and we will all lead an alternate journey to where we are trying to go. Keep embracing your journey and chasing your dreams because you have a inner confidence that keeps you motivated during adversity that not everyone has. Bring on another Olympic Year! ',
          __typename: 'Answer',
        },
      ],
      __typename: 'Contribution',
    },
    {
      id: '61f7e254-b063-4e0c-84d9-ccf5385da0c5',
      fondfolio: {
        id: '818c4adb-b8af-4c28-acaf-91e80039e293',
        title: 'Andreaâs Birthday',
        __typename: 'Fondfolio',
      },
      updatedAt: '1597361034068',
      author: 'GeneviÃ¨ve Lalonde',
      answers: [
        {
          question: {
            label: 'Explain how you came to meet Andrea.',
            __typename: 'Question',
          },
          content:
            "Andrea, the first time I met Dre was when she attended the University of Guelph. She had recently transferred from Samford and was a quiet gentle soul, but as soon as we began to run she was a fierce competitor. I got to know Dre the best out on the trails. She has been one of my favorite people to run with. She understands her own rythm better than anyone else and reaches for the highest of summits, but doesn't forget to bring you along. ",
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Describe a quality or virtue of Andreaâs that you admire.',
            __typename: 'Question',
          },
          content:
            'Dre is one of the most humble people that I know. She is extremely intelligent, elegant with the words she uses and kind with the stories she tells. ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Imagine Andrea became an inanimate object. What would it be, and why?',
            __typename: 'Question',
          },
          content: 'Does a panda count as an inanimate object? ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Describe a fond memory you recall having shared with Andrea.',
            __typename: 'Question',
          },
          content:
            "Making the Olympic Team with Andrea. I remember being able to see Andrea's light shine as bright as she is and knowing all of the hard work and sacrifices behind her journey brought her to where she belonged. ",
          __typename: 'Answer',
        },
        {
          question: {
            label: 'What advice can you offer Andrea for the future?',
            __typename: 'Question',
          },
          content:
            'To be gentle with herself and to cherish all the moments in her life because they create a myriad of colours and adventures that go far beyond anyones imagination, but they are her reality. ',
          __typename: 'Answer',
        },
      ],
      __typename: 'Contribution',
    },
    {
      id: '167ad1ba-9b31-4b63-b2c7-069af361dc6c',
      fondfolio: {
        id: '818c4adb-b8af-4c28-acaf-91e80039e293',
        title: 'Andreaâs Birthday',
        __typename: 'Fondfolio',
      },
      updatedAt: '1597805913035',
      author: 'Jamie Whitfield',
      answers: [
        {
          question: {
            label: 'Explain how you came to meet Andrea.',
            __typename: 'Question',
          },
          content:
            "We are from the same hometown, but until 2009 we had never met. We were introduced through a mutual friend at a National Cross-Country Championships post-race party. Despite the attention of two of my best friends, we hit it off, and we've been inseparable ever since. ",
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Describe a quality or virtue of Andreaâs that you admire.',
            __typename: 'Question',
          },
          content:
            'The dedication and courage she displays every day in the pursuit of her goals, even when faced with adversity. ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Imagine Andrea became an inanimate object. What would it be, and why?',
            __typename: 'Question',
          },
          content:
            'A panda coffee mug (combining two of her favourite things). Perfect for something warm and comforting - but with just the right amount of silliness. ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Describe a fond memory you recall having shared with Andrea.',
            __typename: 'Question',
          },
          content:
            "We've had a lot of adventures together, having lived in multiple different cities, provinces/states and countries. \n\nEasily my favourite though would have to be our trip to Hobart for Christmas in 2017. We had just moved to Australia, and this was our first big trip. We explored the city, checking out the Salamanca market, and trying new cafÃ©s, restaurants and breweries. We went on hikes to see wallabies and got lost on the running trails of Mount Wellington. We stayed in a seaside cottage and like true Aussies had barbecued prawns for Christmas dinner. And at the end of the trip I asked you to marry me. ",
          __typename: 'Answer',
        },
        {
          question: {
            label: 'What advice can you offer Andrea for the future?',
            __typename: 'Question',
          },
          content:
            "Continue to chase your dreams, no matter how wild or far-fetched they may seem. You're an incredible person, and have achieved so much already in your first 30 years. I can't wait to see what you do next.",
          __typename: 'Answer',
        },
      ],
      __typename: 'Contribution',
    },
    {
      id: 'aa2ff631-c551-480b-8d4f-022dc0a2359b',
      fondfolio: {
        id: '818c4adb-b8af-4c28-acaf-91e80039e293',
        title: 'Andreaâs Birthday',
        __typename: 'Fondfolio',
      },
      updatedAt: '1598060548768',
      author: 'Jenna Campbell',
      answers: [
        {
          question: {
            label: 'Explain how you came to meet Andrea.',
            __typename: 'Question',
          },
          content:
            "I was five years old, about to turn six in less then a week. We had just returned from a family vacation in Florida. I remember helping my mom pick out what looked like a giant Mickey Mouse tarp/ t-shirt for my Aunt Carm to wear while she was pregnant with you. I don't think she ever wore it because you arrived before we gave it to her. I also remember getting a doll that year for my birthday, I named her Andrea. After hanging out with the three boys, I was glad you came along.",
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Describe a quality or virtue of Andreaâs that you admire.',
            __typename: 'Question',
          },
          content:
            'Your strength and determination. You are definitely one tough cookie, who can do whatever you set you mind to.',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Imagine Andrea became an inanimate object. What would it be, and why?',
            __typename: 'Question',
          },
          content:
            "A bullet. It's tiny. It's strong. It's fast. People are scared of it. ",
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Describe a fond memory you recall having shared with Andrea.',
            __typename: 'Question',
          },
          content:
            'Any and all of the family trips to Pamana, Dominican, and Cuba. This is where you grew up fast, saw and learned so much about your family members. Trolly time is a treasures memory. I also believe this is when the nickname Little One was born. ',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'What advice can you offer Andrea for the future?',
            __typename: 'Question',
          },
          content:
            'Continue to be yourself and follow your dreams, wherever ever that may take you.',
          __typename: 'Answer',
        },
      ],
      __typename: 'Contribution',
    },
    {
      id: '14173706-79f5-4948-81f9-8b366607c4ea',
      fondfolio: {
        id: '818c4adb-b8af-4c28-acaf-91e80039e293',
        title: 'Andreaâs Birthday',
        __typename: 'Fondfolio',
      },
      updatedAt: '1598310684802',
      author: 'Josie Bowman ',
      answers: [
        {
          question: {
            label: 'Explain how you came to meet Andrea.',
            __typename: 'Question',
          },
          content: 'She is my Niece and God Daughter',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Describe a quality or virtue of Andreaâs that you admire.',
            __typename: 'Question',
          },
          content:
            'She does not let anything stand in her way to meet her goals ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Imagine Andrea became an inanimate object. What would it be, and why?',
            __typename: 'Question',
          },
          content: 'A famous Olympic Athlete ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Describe a fond memory you recall having shared with Andrea.',
            __typename: 'Question',
          },
          content: 'When we ran for the Heart and Stroke Foundation ',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'What advice can you offer Andrea for the future?',
            __typename: 'Question',
          },
          content: 'Reach for your Olympic Goals',
          __typename: 'Answer',
        },
      ],
      __typename: 'Contribution',
    },
    {
      id: 'd4cf3c52-2ea4-47d4-b1b3-e358609a6df5',
      fondfolio: {
        id: '818c4adb-b8af-4c28-acaf-91e80039e293',
        title: 'Andreaâs Birthday',
        __typename: 'Fondfolio',
      },
      updatedAt: '1598017640620',
      author: 'Kristen Duncan',
      answers: [
        {
          question: {
            label: 'Explain how you came to meet Andrea.',
            __typename: 'Question',
          },
          content:
            'I met Andrea through Justin. I think she came to Toronto to visit and possibly join a running group that he was a part of. I have a vague memory of meeting you at the dog park in High Park. We hit it off as we were both introverts and had similar careers. ',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Describe a quality or virtue of Andreaâs that you admire.',
            __typename: 'Question',
          },
          content:
            'Andrea is an incredibly hard worker. She is goal oriented and follows her dreams. She is easy to talk to and very personable. She is the kind of person that is enjoyable to be with, whether you are doing something or nothing. Her personality is witty and clever and she has an underrated strength and calmness to everything she does.',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Imagine Andrea became an inanimate object. What would it be, and why?',
            __typename: 'Question',
          },
          content:
            'If Andrea were an object, she would be your favourite pen. She is an eloquent and beautiful writer. She knows how to craft a story and hook your interest.',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Describe a fond memory you recall having shared with Andrea.',
            __typename: 'Question',
          },
          content:
            'We both worked from home so every once in a while we would meet up at a cafe in the Junction and work. But the day I remember fondly was one of the first times we met up. We were just getting to know eachother and we met at a brunch place in Toronto called the Starving Artist. We talked and hung out and had a pleasant morning on the patio.',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'What advice can you offer Andrea for the future?',
            __typename: 'Question',
          },
          content:
            "Stay true to who you are. You are an incredible person. I don't think you realize your impact on people through your friendship. ",
          __typename: 'Answer',
        },
      ],
      __typename: 'Contribution',
    },
    {
      id: '0f268be8-b07e-498c-b60b-14d6a2331acd',
      fondfolio: {
        id: '818c4adb-b8af-4c28-acaf-91e80039e293',
        title: 'Andreaâs Birthday',
        __typename: 'Fondfolio',
      },
      updatedAt: '1598314446598',
      author: 'Kyle Boorsma',
      answers: [
        {
          question: {
            label: 'Explain how you came to meet Andrea.',
            __typename: 'Question',
          },
          content:
            'Andrea and I met through running but only truly bonded over making fun of Jamie. ',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Describe a quality or virtue of Andreaâs that you admire.',
            __typename: 'Question',
          },
          content: 'Andrea is fiercely determined and refuses to give up. ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Imagine Andrea became an inanimate object. What would it be, and why?',
            __typename: 'Question',
          },
          content:
            'Andrea would be a fire poker. She can withstand the heat and keep the fire going but also singe you with her sarcasm if youâre not paying attention. ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Describe a fond memory you recall having shared with Andrea.',
            __typename: 'Question',
          },
          content:
            'All the drinking games played while camping at Charleston Lake. Never forgot the Manitoba straight arms. ',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'What advice can you offer Andrea for the future?',
            __typename: 'Question',
          },
          content: 'Donât trust the Kiwis. ',
          __typename: 'Answer',
        },
      ],
      __typename: 'Contribution',
    },
    {
      id: '962d0f52-f14a-4baf-ad28-a8ee2b840b77',
      fondfolio: {
        id: '818c4adb-b8af-4c28-acaf-91e80039e293',
        title: 'Andreaâs Birthday',
        __typename: 'Fondfolio',
      },
      updatedAt: '1598033993838',
      author: 'Kyle Campbell',
      answers: [
        {
          question: {
            label: 'Explain how you came to meet Andrea.',
            __typename: 'Question',
          },
          content:
            "At easter at John and Josie's house I believe. Took a while but I believe she said her 4th word to me around hour 4 of being there! :)",
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Describe a quality or virtue of Andreaâs that you admire.',
            __typename: 'Question',
          },
          content: 'Perseverance to over come and her dedication to her craft.',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Imagine Andrea became an inanimate object. What would it be, and why?',
            __typename: 'Question',
          },
          content:
            "A solid granite stone. It's hard and tough on the outside and beautiful on the inside. It's adaptable in all surroundings and can be the strongest, quietest object in an area and still find a way to stand out.",
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Describe a fond memory you recall having shared with Andrea.',
            __typename: 'Question',
          },
          content:
            "Wasn't with her but with the family watching her run at the Olympics",
          __typename: 'Answer',
        },
        {
          question: {
            label: 'What advice can you offer Andrea for the future?',
            __typename: 'Question',
          },
          content:
            "Don't let Anthony beat you in a race. You'll never live it down. ",
          __typename: 'Answer',
        },
      ],
      __typename: 'Contribution',
    },
    {
      id: '63b32a91-e229-44ff-a958-209d0583b84f',
      fondfolio: {
        id: '818c4adb-b8af-4c28-acaf-91e80039e293',
        title: 'Andreaâs Birthday',
        __typename: 'Fondfolio',
      },
      updatedAt: '1598366275984',
      author: 'Lizzy Whelan ',
      answers: [
        {
          question: {
            label: 'Explain how you came to meet Andrea.',
            __typename: 'Question',
          },
          content:
            'I met Andrea at UTTC track club, we ended up getting to know each on an LA trip, I initially thought she was quiet and was surprised when I got to know her and  I learnt she was literally so funny! :)',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Describe a quality or virtue of Andreaâs that you admire.',
            __typename: 'Question',
          },
          content:
            'I admire her tenacity and grit and how humble she is about her accomplishments. I also admire her killer humour and how she is a subtle savage. ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Imagine Andrea became an inanimate object. What would it be, and why?',
            __typename: 'Question',
          },
          content:
            'Sheâd be a razor scooter, because she is petite and sleek and can travel very far very fast. ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Describe a fond memory you recall having shared with Andrea.',
            __typename: 'Question',
          },
          content:
            'I remember so many instances of her slyly pointing out peopleâs odd behaviour on warm ups with the most subtle cutting humour and me laughing soo unsubtly in response. \n\nI also remember her always responding âthatâs Wildâ to anything I said. ',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'What advice can you offer Andrea for the future?',
            __typename: 'Question',
          },
          content:
            'Just keep doing you dude, you killing it!!! \n\nMiss you tons!!! \n\nLiz ',
          __typename: 'Answer',
        },
      ],
      __typename: 'Contribution',
    },
    {
      id: '33a0c746-bca4-4e3b-a7a1-bbd58d0169f2',
      fondfolio: {
        id: '818c4adb-b8af-4c28-acaf-91e80039e293',
        title: 'Andreaâs Birthday',
        __typename: 'Fondfolio',
      },
      updatedAt: '1598332517027',
      author: 'MC Geneau',
      answers: [
        {
          question: {
            label: 'Explain how you came to meet Andrea.',
            __typename: 'Question',
          },
          content:
            'I decided to join the track team and Andrea also started up with that group at the same time! ',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Describe a quality or virtue of Andreaâs that you admire.',
            __typename: 'Question',
          },
          content: 'You see through the bull shit and itâs refreshing! ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Imagine Andrea became an inanimate object. What would it be, and why?',
            __typename: 'Question',
          },
          content:
            "Andrea is a mini fridge. Because she is fun-sized, stone cold (in the best way), and are full the good stuff (doesn't waste her time with the expired condiments). ",
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Describe a fond memory you recall having shared with Andrea.',
            __typename: 'Question',
          },
          content:
            'We both brought my dog Zoe to the beach in Victoria when you came to visit!!',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'What advice can you offer Andrea for the future?',
            __typename: 'Question',
          },
          content:
            'Keep aiming high. Hard work and consistency will continue to make you successful in anything you want to do. ',
          __typename: 'Answer',
        },
      ],
      __typename: 'Contribution',
    },
    {
      id: 'e2c9b512-3fc9-4511-b147-232a8a0b63cb',
      fondfolio: {
        id: '818c4adb-b8af-4c28-acaf-91e80039e293',
        title: 'Andreaâs Birthday',
        __typename: 'Fondfolio',
      },
      updatedAt: '1598366894879',
      author: 'Mark Angerilli',
      active: true,
      answers: [
        {
          question: {
            label: 'What advice can you offer Andrea for the future?',
            __typename: 'Question',
          },
          content: 'Enjoy every moment of life, as it passes by so fast. ',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Explain how you came to meet Andrea.',
            __typename: 'Question',
          },
          content:
            'I met Andrea when she was born, I do not remember the exact moment as I was 9 years old. It was fun growing up with Andrea. I was quite a bit older so I was able to see Andrea grow from a young child, playing with dolls, to an accomplished adult. ',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Describe a quality or virtue of Andreaâs that you admire.',
            __typename: 'Question',
          },
          content:
            'I admire Andreaâs determination. She is the perfect example of someone who had a goal and worked every hard to accomplish it. ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Imagine Andrea became an inanimate object. What would it be, and why?',
            __typename: 'Question',
          },
          content:
            'A helium balloon; moving gracefully through the sky where ever life takes her.',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Describe a fond memory you recall having shared with Andrea.',
            __typename: 'Question',
          },
          content:
            'When Andrea visited my parents last summer. I enjoyed hearing about her life in Australia and about her training and races. Anthony was excited to race Andrea in the back yard because she is one of the fastest people in the world. She made his day and even let him win.',
          __typename: 'Answer',
        },
      ],
      __typename: 'Contribution',
    },
    {
      id: 'fce38bbb-ac36-4433-9129-5615bbc1ad6d',
      fondfolio: {
        id: '818c4adb-b8af-4c28-acaf-91e80039e293',
        title: 'Andreaâs Birthday',
        __typename: 'Fondfolio',
      },
      updatedAt: '1598223674480',
      author: 'Mary Angerilli',
      answers: [
        {
          question: {
            label: 'Explain how you came to meet Andrea.',
            __typename: 'Question',
          },
          content:
            'Andrea is my only niece. Remembering the day she was born, We were in Florida, we were so happy to hear it was a girl.  \nMy sister had 2 boys and her third child was a girl, how exiting.\nFinally a girl cousin for Jenna.',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Describe a quality or virtue of Andreaâs that you admire.',
            __typename: 'Question',
          },
          content:
            'Andrea, has been through a lot, loosing her mother at 13 years old.\nShe was strong and determine that she was going to be an athlete and made it to the Olympics.',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Imagine Andrea became an inanimate object. What would it be, and why?',
            __typename: 'Question',
          },
          content:
            'I image Andrea a rock.  A rock is strong, resistant and enduring.\n',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Describe a fond memory you recall having shared with Andrea.',
            __typename: 'Question',
          },
          content:
            'Andrea and I have spent a lot of time together.  Driving her to practices and watching her race, Taking nonno to watch her run, made him smile. we are so proud of her.  \nI',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'What advice can you offer Andrea for the future?',
            __typename: 'Question',
          },
          content:
            'Happy 30th Birthday Andrea You are a beautiful young lady and you worked hard for everything you achieved. Continue to do as you have  and follow your dreams.',
          __typename: 'Answer',
        },
      ],
      __typename: 'Contribution',
    },
    {
      id: 'f8b59dcf-f523-4172-bc04-6adda2251a6e',
      fondfolio: {
        id: '818c4adb-b8af-4c28-acaf-91e80039e293',
        title: 'Andreaâs Birthday',
        __typename: 'Fondfolio',
      },
      updatedAt: '1597291077551',
      author: 'Matt Seccafien',
      answers: [
        {
          question: {
            label: 'Explain how you came to meet Andrea.',
            __typename: 'Question',
          },
          content:
            "I assume we had already been acquainted, but my earliest memory of Andrea consists of us in an intense mud-fight during low-tide on a beach in Florida. We battled hard on the shore, and I'm pretty sure it ended in tears.",
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Describe a quality or virtue of Andreaâs that you admire.',
            __typename: 'Question',
          },
          content:
            'Her life-long, humble dedication to health and athleticism.  She has persevered despite many events that I know could have turned her down a more negative path. I am so proud to see her take running as far as she has. All this while still being so thankful that I would show up to watch her race in Toronto. I wish I would have turned up more for her earlier races.',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Imagine Andrea became an inanimate object. What would it be, and why?',
            __typename: 'Question',
          },
          content: 'Not sure yet.',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Describe a fond memory you recall having shared with Andrea.',
            __typename: 'Question',
          },
          content: 'TBD',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'What advice can you offer Andrea for the future?',
            __typename: 'Question',
          },
          content: 'TBD',
          __typename: 'Answer',
        },
      ],
      __typename: 'Contribution',
    },
    {
      id: '4ec00eff-133f-431f-ad6d-69eff4290921',
      fondfolio: {
        id: '818c4adb-b8af-4c28-acaf-91e80039e293',
        title: 'Andreaâs Birthday',
        __typename: 'Fondfolio',
      },
      updatedAt: '1598500233034',
      author: 'Michael Seccafien (& Yingying)',
      answers: [
        {
          question: {
            label: 'Explain how you came to meet Andrea.',
            __typename: 'Question',
          },
          content:
            'When I was a little boy and there was no Andrea, I told my mother that I wanted a little sister and not another Matt. My wish came true and we had a lovely childhood together. ',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Describe a quality or virtue of Andreaâs that you admire.',
            __typename: 'Question',
          },
          content:
            'Andrea is very focused and determined. This has helped her to succeed and become a world class athlete which is something we are all proud of. \n',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Imagine Andrea became an inanimate object. What would it be, and why?',
            __typename: 'Question',
          },
          content: 'Andrea would be a vase: pretty and quiet. ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Describe a fond memory you recall having shared with Andrea.',
            __typename: 'Question',
          },
          content:
            'We always enjoy when Andrea comes to visit in Montreal to tell us the interesting stories of her latest adventure in whatever part of the world, be it Brazil, Qatar, Europe, or Australia, the literally-other side-of-the-world that she now calls home. ',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'What advice can you offer Andrea for the future?',
            __typename: 'Question',
          },
          content:
            '30 might seem or feel old to you but it is still just the beginning and a good opportunity to appreciate where you are now and think about where you would like to be. ',
          __typename: 'Answer',
        },
      ],
      __typename: 'Contribution',
    },
    {
      id: '048a5c44-0e1f-4193-893e-a0252289f8e7',
      fondfolio: {
        id: '818c4adb-b8af-4c28-acaf-91e80039e293',
        title: 'Andreaâs Birthday',
        __typename: 'Fondfolio',
      },
      updatedAt: '1597353771317',
      author: 'Rachel Aubry',
      answers: [
        {
          question: {
            label: 'Explain how you came to meet Andrea.',
            __typename: 'Question',
          },
          content:
            'Andrea, I canât remember the exact moment I met you, but it was probably me being intimidated by a new girl joining our gryphon team. I remember our 2013 trip to Leuven (via Finland) where we became super close, sharing a tiny bed in that hostel with our fav person sleeping above us (lol). We bonded about all the people we get and how fast we wanted to run at while sipping americano at Koffee Onan. <3 we also woke up at 3 in the morning to Ross yelling to us through our window, then the three of us proceeded to think a framed picture of a cow that Ross stole from the bathroom was an iPad and started trying to press non-existent buttons on it. Good times. ',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Describe a quality or virtue of Andreaâs that you admire.',
            __typename: 'Question',
          },
          content:
            'Oh this is easy..... I SO MUCH admire how determined, confident and gritty you are. I have never met anyone who has the belief and confidence in themselves to succeed like you do and Iâm super envious of that. ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Imagine Andrea became an inanimate object. What would it be, and why?',
            __typename: 'Question',
          },
          content: 'I would describe you as a ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Describe a fond memory you recall having shared with Andrea.',
            __typename: 'Question',
          },
          content:
            'Iâm gonna go with one of those Russian dolls that you open up and they keep getting tinier and tinier - youâre tiny! Also I feel like you have a lot of different layers that you only show special people (like me!!!)',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'What advice can you offer Andrea for the future?',
            __typename: 'Question',
          },
          content:
            'Even when times get really tough or you donât run the race you wanted, try to take some time to appreciate  how awesome your career as a professional athlete is in the moment and that you get to wake up everyday doing something youâre super passionate and excited about.  Also try and take in how fit your body is (lolol) because once youâre finished with the sport youâll realize how special of a time it was in your life. ',
          __typename: 'Answer',
        },
      ],
      __typename: 'Contribution',
    },
    {
      id: 'a8e2a44b-e8e0-47d3-8c3c-48c0bb8e7c34',
      fondfolio: {
        id: '818c4adb-b8af-4c28-acaf-91e80039e293',
        title: 'Andreaâs Birthday',
        __typename: 'Fondfolio',
      },
      updatedAt: '1598224643364',
      author: 'Ross Angerilli',
      answers: [
        {
          question: {
            label: 'Describe a quality or virtue of Andreaâs that you admire.',
            __typename: 'Question',
          },
          content:
            'She is a stubborn  determined woman who  knows what she wants and goes after it.',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Imagine Andrea became an inanimate object. What would it be, and why?',
            __typename: 'Question',
          },
          content:
            'She would be a pair of name brand running shoes.  Running is her passion and she would be doing what she loves.',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Describe a fond memory you recall having shared with Andrea.',
            __typename: 'Question',
          },
          content:
            'It was New Years eve in Cuba.  She was shaking up a bottle of cheap Champaign  along with her brothers and cousins and spraying her Nonno  Antonio with it.  While he enjoyed every minute  being with his grand kids. ',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'What advice can you offer Andrea for the future?',
            __typename: 'Question',
          },
          content: 'Be Happy.  Do what is best for you. Follow your dreams.',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Explain how you came to meet Andrea.',
            __typename: 'Question',
          },
          content:
            'We met by chance of birth. I am her uncle and she is my favorite niece ( only one I have ) .  Met her when we returned from Florida when Carm brought her home.',
          __typename: 'Answer',
        },
      ],
      __typename: 'Contribution',
    },
    {
      id: 'c36fd843-1efc-40ce-8571-96131ffefa51',
      fondfolio: {
        id: '818c4adb-b8af-4c28-acaf-91e80039e293',
        title: 'Andreaâs Birthday',
        __typename: 'Fondfolio',
      },
      updatedAt: '1598366655415',
      author: 'Samantha Sweetman',
      answers: [
        {
          question: {
            label: 'Explain how you came to meet Andrea.',
            __typename: 'Question',
          },
          content: 'Andrea lived on the same street as me growing up. ',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Describe a quality or virtue of Andreaâs that you admire.',
            __typename: 'Question',
          },
          content: 'I admire her dedication and self confidence! ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Imagine Andrea became an inanimate object. What would it be, and why?',
            __typename: 'Question',
          },
          content:
            'Olympic torch! \nAndrea it takes so much hard work to accomplish what you have. I believe the Olympic torch represents dedication and also unity. ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Describe a fond memory you recall having shared with Andrea.',
            __typename: 'Question',
          },
          content:
            'Andrea, Larissa and I called ourselves the three musketeers! We did everything together. \n\nEvery morning Andrea and I would walk to school together! ',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'What advice can you offer Andrea for the future?',
            __typename: 'Question',
          },
          content:
            'Andrea I am unbelievably proud of you and admire you more than you will ever know. Continue working towards your dreams. Please know I am always cheering you on, no matter how far away I am! ',
          __typename: 'Answer',
        },
      ],
      __typename: 'Contribution',
    },
    {
      id: '361608cc-11a7-4366-addc-f2251422bfb9',
      fondfolio: {
        id: '818c4adb-b8af-4c28-acaf-91e80039e293',
        title: 'Andreaâs Birthday',
        __typename: 'Fondfolio',
      },
      updatedAt: '1598737016218',
      author: 'Tamara Jewett',
      answers: [
        {
          question: {
            label: 'Explain how you came to meet Andrea.',
            __typename: 'Question',
          },
          content:
            'I met Andrea through the Ontario running community. She was a competitor when she ran for the Guelph Gryphons and I ran for U of Tâs Varsity Blues. I got to know her better as a teammate in 2015/2016 when she joined Rossâ training group with UTTC.',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Describe a quality or virtue of Andreaâs that you admire.',
            __typename: 'Question',
          },
          content:
            'Determination and belief in herself. Andrea became a big star in running relatively late in her career, and she got there because she never gave up on herself and just stuck it out until her talent and hard work really found its time to shine. Sheâs made quietly gutsy decisions to make running her main focus through the second half of her twenties - not an easy path and it seems to have paid off:) ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Imagine Andrea became an inanimate object. What would it be, and why?',
            __typename: 'Question',
          },
          content:
            'A river that slowly wears away at very hard rocks - maybe a bit of a cheesy cliche, but to me it captures her quiet but powerful determination. ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Describe a fond memory you recall having shared with Andrea.',
            __typename: 'Question',
          },
          content:
            'I really enjoyed the indoor 3km we ran together, I think in the winter of 2016, in Seattle. Andrea beat me by a bit, but both of us had very solid pbs. I finally beat a pb from junior worlds that had haunted me since 2008. It was a fun trip and good experience to both race well as teammates.',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'What advice can you offer Andrea for the future?',
            __typename: 'Question',
          },
          content:
            'Look for ways to give back to sport generally and women in sport in particular. Iâm sure that this is something that you already do, but itâs something that Iâve been thinking a lot about recently. I think that both of us have experienced and seen others experience a lot of intense emotions and hard roads in track and field. Many women just walk away from that and donât look back. I know that as a young runner, grounded and successful female role models meant a lot to me, but it sometimes felt like there werenât a lot of them. Itâs exciting to be in a position to help change that. ',
          __typename: 'Answer',
        },
      ],
      __typename: 'Contribution',
    },
    {
      id: 'cfa071a4-4c89-4d42-8d71-fc75a397ef6c',
      fondfolio: {
        id: '818c4adb-b8af-4c28-acaf-91e80039e293',
        title: 'Andreaâs Birthday',
        __typename: 'Fondfolio',
      },
      updatedAt: '1598410506084',
      author: 'Tara MacDonald',
      answers: [
        {
          question: {
            label: 'What advice can you offer Andrea for the future?',
            __typename: 'Question',
          },
          content:
            "I don't think I need to give you any advice :) you always have great visions and plans. I know this year has been extra hard for anxious brains though, so maybe I will say: take things one day at a time, even if there's a bigger process in place. ",
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Explain how you came to meet Andrea.',
            __typename: 'Question',
          },
          content:
            'Well, I did some good old facebook creeping and this is from you circa 2010: \n\n"hey, vanessa and I are going to value village tomorrow at 4:30 if you want to come and get your pop tart outfit"\n\nI do not recall any singular or group pop tart outfits, at Halloween or otherwise, but if they existed...I bet they were cool. \n\nProbably we could count high school track as the official meeting, but I say we choose pop tart Halloween as a Guelph-specific meeting point. ',
          __typename: 'Answer',
        },
        {
          question: {
            label: 'Describe a quality or virtue of Andreaâs that you admire.',
            __typename: 'Question',
          },
          content:
            'I admire how tenacious you are. You never EVER ever give up (ever!). This is a hell of a way to live, and for me, you continue to be a super positive role model for how to get the most out of life. You are a shining example of challenging everyone to be their best selves, which I am conscious of and thankful for, even across oceans. All of us people around you are fortunate to know you for this wonderful quality. ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Imagine Andrea became an inanimate object. What would it be, and why?',
            __typename: 'Question',
          },
          content:
            'Sunglasses. \n\nThey are fun, hip, also practical, but ALSO they are the signature of any good adventure. ',
          __typename: 'Answer',
        },
        {
          question: {
            label:
              'Describe a fond memory you recall having shared with Andrea.',
            __typename: 'Question',
          },
          content:
            "When we tandem brained Cody's hair!!! hahaha I am laughing so much thinking of this day :)\n\nA close second (even though I'm only supposed to say one memory, woopsies, can't help it) is Charleston Lake camping. But actually more broadly: any group-related card game in which you ruthlessly make sure every dude gets what they deserve, which is precisely 12 drinks at a time. This is excellent. Never stop doing this, it brings me great joy. \n\nI hope we can all see each other in 2021 to repeat these two activities. ",
          __typename: 'Answer',
        },
      ],
      __typename: 'Contribution',
    },
  ],
};
