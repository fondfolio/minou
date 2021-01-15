import React from 'react';
import {DefaultSeo, DefaultSeoProps} from 'next-seo';
import {DOMAINS} from '@minou/utilities';

export function Seo({openGraph, ...props}: DefaultSeoProps) {
  return (
    <DefaultSeo
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: DOMAINS.website,
        site_name: 'Fondfolio', // eslint-disable-line @typescript-eslint/naming-convention
        title: 'Collaborative gift books for your favourite people',
        description:
          'Create a one of a kind book to honor a special moment or person by collecting thoughtful words and stories from everyone they care about.',
        images: [
          {
            url: '/ff-book-2-sm.jpg',
            width: 1200,
            height: 1080,
            alt:
              'Fondfolio book with a walnut cover and red stitching standing upright on a pale yellow background',
          },
          {
            url: '/ff-book-3-sm.jpg',
            width: 800,
            height: 600,
            alt:
              'Fondfolio book with a walnut cover and red stitching laying horizontally on a pale yellow background',
          },
        ],
        ...openGraph,
      }}
      twitter={{
        handle: '@fondfolio',
        site: '@fondfolio',
        cardType: 'summary_large_image',
      }}
      {...props}
    />
  );
}
