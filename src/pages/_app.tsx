import "../styles/global.css";

import { ChallengesProvider } from "../contexts/ChallengesContext";

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

{
  /* Tem que ficar abaixo do componente 'ChallengesProvider' porque o 'CountdownProvider' tem dependências com o 'ChallengesProvider' */
}

export default MyApp;
