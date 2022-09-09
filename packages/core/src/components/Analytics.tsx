import React from 'react';

interface Props {
  property?: 'website' | 'app';
}

export function Analytics(props: Props) {
  let scriptMarkup = null;

  switch (props.property) {
    case 'website':
      scriptMarkup = (
        <>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-4YLH34D18N"
          />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
            Bloop`,
            }}
          />
        </>
      );
      break;
    case 'app':
      scriptMarkup = (
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
Google Analytics for the Fondfolio app`,
          }}
        />
      );
      break;
    default:
      break;
  }
  return <>{scriptMarkup}</>;
}
