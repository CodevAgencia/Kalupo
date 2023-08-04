import type { AppProps } from 'next/app';
import '../styles/styles.scss'

function App(props:AppProps) {
  const {
    pageProps, Component
  } = props;

  return (
    <Component {...props.pageProps} />
  );
}
export default App;
