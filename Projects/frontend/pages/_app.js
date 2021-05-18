import { ApolloProvider } from '@apollo/client';
import NProgress from 'nprogress';
import Router, { useRouter } from 'next/router';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
//import "../components/styles/animation.css";
import withData from '../lib/withData';
import HomePage from '../components/HomePage';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  
  //if (Router==null || Router.router == null) return null;

  //console.log(Router.router.route);
  
  const router = useRouter()
  if (Router==null || Router.router == null) return null;
  //console.log(router.asPath);

  if (router.asPath === "/") {
    return (
      <ApolloProvider client={apollo}>
        <HomePage>
          <Component {...pageProps} />
        </HomePage>
      </ApolloProvider>
    )
  }
  else 
  {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
    )
  }
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);