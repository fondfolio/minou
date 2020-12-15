import {Box, Link, Button} from 'minou';

export default function Home() {
  return (
    <Box p={5} fontSize={4} width={[1, 1, 1 / 2]}>
      <Link href="https://fondfolio.com">Link</Link>
      <Button>Button</Button>
      <Button variant="primary">Primary</Button>
    </Box>
  );
}
