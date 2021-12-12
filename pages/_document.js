import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          {/* Preconnect to resource URLs */}

          <link rel="preconnect" href="https://heavie.co" />
          <link rel="preconnect" href="https://google.com" crossOrigin="true" />
          <link
            rel="preconnect"
            href="https://www.googletagmanager.com"
            crossOrigin="true"
          />
          <link
            rel="preconnect"
            href="https://www.google-analytics.com"
            crossOrigin="true"
          />

          {/* Basic website information */}

          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="cache-control" content="Private" />
          <meta httpEquiv="Expires" content="31536000" />
          <meta name="theme-color" content="#4A225B" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="robots" content="index, follow" />

          {/* Open Graph Protocol (OGP) information */}

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://heavie.co/" />
          <meta
            property="og:image"
            content="https://heavie.co/images/icons/logo/og_512.jpg"
          />
          <meta
            property="og:image:alt"
            content="https://heavie.co/images/icons/logo/og_512.jpg"
          />
          <meta
            property="og:image:secure_url"
            content="https://heavie.co/images/icons/logo/og_512.jpg"
          />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta property="og:locale" content="en_GB" />

          {/* Load website resources */}

          <link rel="icon" href="/images/icons/logo/favicon_48.png" />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/images/icons/logo/favicon_48.png"
          />
          <link
            rel="apple-touch-icon"
            href="/images/icons/logo/favicon_192.png"
          />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                '<span>Unfortunately, your browser does not support javascript. Either that or it\'s disabled. Maybe try to enable it? Privacy centric browsers like Tor or Brave tend to do this more often than you think. Don\'t worry. We respect your privacy and will never collect personal data from you without your explicit consent.<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NSLQWQ3" height="0" width="0"></iframe></span>',
            }}
          ></noscript>
          <Main />
          <script type="text/javascript" src="/scripts/index.js" defer={true} />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'/scripts/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NSLQWQ3');
          `,
            }}
          />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
