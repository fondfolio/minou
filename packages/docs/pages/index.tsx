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
  DisplayText,
  Caption,
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
} from 'minou';

export default function Home() {
  return (
    <>
      <Header
        secondary={<Navigation items={[]} />}
        primary={<Navigation items={[]} />}
      />

      <Page>
        <Page.Section>
          <Box pb={4}>
            <DisplayText pb={0}>
              Collaborative gift books for your favourite people.
            </DisplayText>
            <DisplayText color="primary">
              <Italic>One of a kind, like the humans they’re made for</Italic>
            </DisplayText>
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

            <Text large pl={5}>
              <Italic>
                Times when giftcards, chocolates or flowers can’t communicate
                the depth of your gratitude for another’s existence
              </Italic>
            </Text>
            <Caption>
              Don’t pay until all contributions are collected.
              <Italic>-and-</Italic>
              <Link url="">Free Shipping</Link>
            </Caption>
          </Box>
          <Box mb="5">
            <Card active title="Wedding">
              <Text pb={0}>
                What better gift to give a couple on their wedding day than the
                memories and wisdom from everyone near and dear, including those
                unable to attend.
              </Text>
            </Card>
            <Card active title="Milestone Birthday">
              <Text pb={0}>
                What better gift to give a couple on their wedding day than the
                memories and wisdom from everyone near and dear, including those
                unable to attend.
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
              Share your unique questionnaire url with the friends and family of
              the recipient. You will be notified each time someone contributes.
            </Text>
          </Card>
          <Card active title="Order">
            <Text large pb={0}>
              When you’re ready, customize the design and place the order. We’ll
              begin production right away and will notify you as soon as it
              ships (gift wrapping included).
            </Text>
          </Card>
        </Page.Section>
        <Page.Section>
          <Banner title="Whoops!" variant="error">
            You did not enter a username or a password.
          </Banner>
          <Banner variant="error">
            Must be at least 8 characters, Must have a lower case character,
            Must have an upper case character, Must have at least 1 number, Must
            have a special character
          </Banner>
          <Banner title="Sorry!" variant="warning">
            That password isn’t right. <Link>Recover your password.</Link>
          </Banner>
          <Banner title="Nice!" variant="success">
            Something successful just happened.
          </Banner>
          <Banner title="Okay">Everything is fine.</Banner>
          <LoginSignUp />
        </Page.Section>
        <Page.Section full>
          <Rule m={4} icon={Icons.LogoIcon} color="primary" />
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
        </Page.Section>
        <Page.Section full>
          <Rule m={4} text="Words from our customers" />
          <Blockquote citation="Allan, Perth WA">
            Lise absolutely loves the gift. She has been flipping through it
            every day this week, and was brought to tears several times. Thank
            you for making this possible.
          </Blockquote>
          <Rule m={4} />
        </Page.Section>
        <Page.Section size="large" width={[1]}>
          <Cards>
            <Card active title="Digital Only">
              <Text large>
                Your Fondfolio contributions stored online forever in a
                personalized Fondfolio website—share the lovely words with
                everyone who contributed. Sort responses by question type or
                read individual responses.
              </Text>
              <Text color="primary" fontWeight="bold" large pb={0}>
                $80
              </Text>
            </Card>
            <Card active title="Digital + Hardcover">
              <Text large>
                Everything you get with digital, plus a beautiful handmade
                hardcover version—each response occupying a spread. Free
                Furoshiki giftwrapping, free shipping. Something tangible to
                treasure.
              </Text>
              <Text color="primary" fontWeight="bold" large pb={0}>
                $240
              </Text>
            </Card>
            <Card active title="Digital + Custom">
              <Text large>
                Solid hardwood cover? Custom engraving inside? Handmade book
                box? The only limits are that of your imagination, let us know
                what you’re thinking.
              </Text>
              <Text color="primary" fontWeight="bold" large pb={0}>
                $360
              </Text>
            </Card>
          </Cards>
          <Caption textAlign="center">
            Don’t pay anything until all contributions have been collected and
            you are ready to order. All prices in US Dollars (USD). Free
            Shipping is within North America. International shipping is
            available at a discounted rate.
          </Caption>
        </Page.Section>
      </Page>
      <Page>
        <Header secondary={<Link unstyled>Help</Link>} primary={<UserMenu />} />
        <Mast title="Minou‘s Success" />
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
            <Card active title="Matthew Seccafien Contributed">
              <Text pb={0}>
                10 Minutes ago <Link>Edit</Link>
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
              <Caption fontWeight="bold">Copyright 2020 Fondfolio Inc.</Caption>
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
              <Caption>
                <Italic>
                  <Link unstyled>Proudly made in Toronto by Cartogram</Link>
                </Italic>
              </Caption>
            </Box>
          }
        />
      </Page>
      <Page>
        <Page.Section>
          <Title>Buttons</Title>
        </Page.Section>
        <Page.Section>
          <Flex pb={3} flexDirection="column" width={[1]}>
            <Box pb="1">
              <Link external url="https://fondfolio.com">
                External link
              </Link>
            </Box>
            <Box pb="1">
              <Link url="/test">Internal link</Link>
            </Box>
          </Flex>
          <Flex pb={3} flexDirection="column" width={[1]}>
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
          <Flex pb={3} flexDirection="column" width={[1]}>
            <Box pb="1">
              <Button variant="secondary">Secondary button</Button>
            </Box>
            <Box pb="1">
              <Button disabled variant="secondary">
                Disabled secondary button
              </Button>
            </Box>
            <Box pb="1">
              <Button loading variant="secondary">
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
          <Flex pb={3} flexDirection="column" width={[1]}>
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
        </Page.Section>
        <Page.Section>
          <DisplayText>Forgot password</DisplayText>
          <Text large>
            Sewn with durable waxed <Italic>Irish linen</Italic> thread, the
            exposed spine allows for an infinite number of contributions, and
            serves as a visual reminder of the real human connections expressed
            within.
          </Text>
          <Text large>
            Collect as many contributions as you can — the more the merrier, at
            no extra cost.
          </Text>
        </Page.Section>
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
  const [popoverActive, setPopoverActive] = useState(true);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const activator = <Avatar onClick={togglePopoverActive} />;

  return (
    <Dropdown
      active={popoverActive}
      activator={activator}
      onClose={togglePopoverActive}
    >
      <Menu
        items={[
          {content: 'Help'},
          {content: 'Terms'},
          {content: 'Privacy'},
          {content: 'About'},
          {content: 'Blog'},
        ]}
      />
    </Dropdown>
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
        helpText="You need to have an email to join fondfolio."
        name="email"
        placeholder="your@email.com"
        {...fields.email}
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
      <Caption textAlign="center">
        By signing up for an account you agree to our
        <Link url="">Terms &amp; Conditions</Link>
      </Caption>
      <Actions primaryAction={{content: 'Login'}} />
    </Form>
  );
}
