import Theme from "../styles/theme";
import { FormspreeProvider } from "@formspree/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <FormspreeProvider>
          <Component {...pageProps} />
        </FormspreeProvider>
      </Theme>
    </>
  );
}
