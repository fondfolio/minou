declare module 'focus-trap-react' {
  interface Props {
    children: React.ReactNode;
    active: boolean;
  }
  export default function TrapFocus(props: Props);
}
