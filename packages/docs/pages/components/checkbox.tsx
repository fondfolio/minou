import React, {useCallback, useState} from 'react';
import {
  Container,
  Layout,
  Box,
  Title,
  ChoiceList,
  Page,
  Section,
  Flex,
  Toast,
  Icons,
  Checkbox,
  RadioButton,
  Form,
  TextField,
  Actions,
  FieldSet,
} from 'minou';
import {useForm, useField, useList, asChoiceField} from '@shopify/react-form';

export default function CheckboxPage() {
  const choices = [
    {
      label: 'Hard cover',
      icon: Icons.OptionHardcover,
      value: 'HardCover',
    },
    {
      label: 'Just digital',
      icon: Icons.OptionDigital,
      value: 'Digital',
    },
  ];

  const {fields} = useForm({
    fields: {
      option: useField([choices[0].value]),
    },
  });

  return (
    <Page>
      <Container>
        <Section>
          <Layout>
            <>
              <Title>Checkbox</Title>
              <SingleChoiceListExample />
              <ChoiceList
                bordered
                selected={fields.option.value}
                choices={choices}
                {...fields.option}
              />
              <UserSettingsForm />
            </>
          </Layout>
        </Section>
      </Container>
    </Page>
  );
}

function SingleChoiceListExample() {
  const [selected, setSelected] = useState(['hidden']);

  const handleChange = useCallback((value) => setSelected(value), []);

  return (
    <ChoiceList
      labelAction={{
        content: 'Forgot password?',
        url: '/test',
      }}
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

export function UserSettingsForm() {
  const {fields, submit, submitting, submitErrors} = useForm({
    fields: {
      emailSubscriptions: useField(true),
    },
    async onSubmit(fieldValues) {
      return Promise.resolve({status: 'success', errors: []});
    },
  });

  return (
    <Form submitting={submitting} onSubmit={submit} errors={submitErrors}>
      <FieldSet>
        <Checkbox
          label="Unsubscribe from email notifications"
          {...asChoiceField(fields.emailSubscriptions)}
        />
      </FieldSet>
      <Actions primaryAction={{content: 'Update'}} />
    </Form>
  );
}
