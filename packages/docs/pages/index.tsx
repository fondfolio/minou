import React from 'react';
import {useField, useForm, notEmpty, lengthMoreThan} from '@shopify/react-form';
import {
  Box,
  ButtonGroup,
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
  DisplayText,
  Header,
  Rule,
  Actions,
  Page,
  Spinner,
} from 'minou';

export default function Home() {
  const {
    fields: {title, question, introduction, password},
    submit,
    submitting,
    submitErrors,
  } = useForm({
    fields: {
      title: useField({
        value: '',
        validates: [
          notEmpty('Title is required'),
          lengthMoreThan(3, 'Title must be more than 3 characters'),
        ],
      }),
      question: useField(
        'Do you remember the exact moment? What were you both doing at the time? Who spoke up first? What were your first impressions? Talk about the events or specific situations that led to you knowing each other. Perhaps you have the same blood running through your veins and have known them since birth – can you describe what it was like growing up together?',
      ),
      introduction: useField('some default intro'),
      password: useField('some default intro'),
    },
    onSubmit: async (fieldValues) => {
      const values = await Promise.resolve(fieldValues);

      console.log(values);

      return {status: 'fail', errors: [{message: 'bad form data'}]};
    },
  });

  return (
    <>
      <Header secondary={<div>left</div>} primary={<div>right</div>} />
      <Box p={4}>
        <Box p={1}>
          <Link href="https://fondfolio.com">Link</Link>
        </Box>
        <ButtonGroup p={1}>
          <Button>Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="destructive">Destructive Button</Button>
        </ButtonGroup>
        <Box p={1} pb={3}>
          <ButtonGroup>
            <Button variant="primary">Primary</Button>
            <Button size="small" variant="primary">
              Small Button
            </Button>
            <Button size="small" variant="secondary">
              Small Button
            </Button>
            <Button size="small">
              <Icon color="teal" icon={Icons.ArrowDown} />
            </Button>
          </ButtonGroup>
        </Box>
        <Title>Title Component</Title>
        <DisplayText>Display Text</DisplayText>
        <Card variant="large">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat
            aliquet metus, id bibendum ante porta non. Sed ac tempus sem. Sed
            vehicula auctor tristique. Vestibulum metus erat, ullamcorper quis
            urna sit amet, rhoncus euismod lectus. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Morbi
            pellentesque erat nec turpis efficitur pretium. Donec feugiat nulla
            metus, sit amet tincidunt neque ornare et. Maecenas lacinia lacus ut
            tempor tincidunt.
          </Text>
        </Card>
        <Rule m={4} icon={Icons.LogoIcon} color="primary" />
        <Rule
          m={4}
          text="Know someone else who would like this gift?
"
        />
        <Rule m={4} />
        <Flex pb={2} flexWrap="wrap">
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
          <IconBox icon={Icons.Success} />
          <IconBox icon={Icons.Error} />
          <IconBox icon={Icons.Warning} />
          <IconBox icon={Icons.Info} />
          <IconBox icon={Icons.EventBirthday} />
          <IconBox icon={Icons.EventCause} />
          <IconBox icon={Icons.EventWedding} />
          <IconBox icon={Icons.EventAnniversary} />
          <IconBox icon={Icons.EventEngagement} />
          <IconBox icon={Icons.EventWedding} />
          <IconBox icon={Icons.EventRetirement} />
          <IconBox icon={Icons.EventRecovery} />
          <IconBox icon={Icons.EventRemembering} />
          <IconBox icon={Icons.EventSuccess} />
          <IconBox icon={Icons.EventNewborn} />
          <IconBox icon={Icons.LogoIcon} />
          <IconBox icon={Icons.LogoWord} />
          <IconBox icon={Icons.Logo} />
          <IconBox icon={Icons.Facebook} />
          <IconBox icon={Icons.Twitter} />
          <IconBox icon={Icons.Instagram} />
        </Flex>
        <Form onSubmit={submit} loading={submitting} errors={submitErrors}>
          <TextField
            label="Title"
            helpText="Appears at the start and throughout the questionnaire."
            {...title}
          />
          <TextField label="Introduction" multiline {...introduction} />
          <Flex alignItems="flex-start">
            <Flex flexDirection="column" p={2}>
              <Button size="small">
                <Icon color="teal" icon={Icons.ArrowUp} />
              </Button>
              <Button size="small">
                <Icon color="teal" icon={Icons.ArrowDown} />
              </Button>
            </Flex>
          </Flex>
          <TextField
            labelAction={{content: 'Forgot password'}}
            type="password"
            label="Password"
            {...password}
          />
          <Button onClick={submit}>Submit</Button>
          <Actions
            secondaryActions={[{size: 'small', content: 'Back to fondfolio'}]}
            primaryAction={{content: 'Submit'}}
          />
        </Form>
      </Box>
      <Link href="/test">To Test</Link>
      <Link href="https://fondfolio.com">To Fondfolio</Link>
      <LoginSignUp />
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

export function LoginSignUp() {
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
    <Page>
      <Page.Section>
        <Form loading={submitting} onSubmit={submit}>
          <TextField
            type="text"
            label="Email Address"
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
          <Actions primaryAction={{content: 'Login'}} />
        </Form>
      </Page.Section>
    </Page>
  );
}
