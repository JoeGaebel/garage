import '../styles/globals.css'
import { SWRConfig } from "swr";
import fetch from "../lib/fetchJson";

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return <SWRConfig
    value={{
      fetcher: fetch,
      onError: (err) => {
        console.error(err);
      },
    }}
  >
    <Component {...pageProps} />
  </SWRConfig>;
}

export default MyApp
