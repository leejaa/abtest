import Script from "next/script";

const Analytics = () => {
  return (
    <>
      <Script
        id="ga-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SCBC1K6G1M')`,
        }}
      />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-SCBC1K6G1M`}
      />
    </>
  );
};

export default Analytics;
