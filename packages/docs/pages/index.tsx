import {useState} from 'react';
import {
  Box,
  ButtonGroup,
  TextField,
  Input,
  Link,
  Heading,
  Button,
  Text,
  Icon,
  Icons,
} from 'minou';

export default function Home() {
  const [textFieldContent, setTextFieldContent] = useState('');
  return (
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
        <Heading>Questionnaire</Heading>
        <Text pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat
          aliquet metus, id bibendum ante porta non. Sed ac tempus sem. Sed
          vehicula auctor tristique. Vestibulum metus erat, ullamcorper quis
          urna sit amet, rhoncus euismod lectus. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Morbi
          pellentesque erat nec turpis efficitur pretium. Donec feugiat nulla
          metus, sit amet tincidunt neque ornare et. Maecenas lacinia lacus ut
          tempor tincidunt.
        </Text>
        <ButtonGroup>
          <Button variant="primary">Primary</Button>
          <Button size="small" variant="primary">
            Small Button
          </Button>
          <Button size="small" variant="secondary">
            Small Button
          </Button>
        </ButtonGroup>
      </Box>
      <Box pb={2}>
        <Icon icon={Icons.ArrowDown} />
        <Icon icon={Icons.Close} />
        <TextField
          label="test"
          value={textFieldContent}
          onChange={(value) => setTextFieldContent(value)}
        />
      </Box>
    </Box>
  );
}
