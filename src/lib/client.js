import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'yjbgm69e',
  dataset: 'production',
  apiVersion: '2023-04-16',
  useCdn: true,
  ignoreBrowserTokenWarning: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// //The signature '(config: ClientConfig): SanityClient' of 'createClient' is deprecated.ts(6387)
// index.d.ts(383, 4): The declaration was marked as deprecated here.
// (alias) createClient(config: ClientConfig): SanityClient
// import createClient
// @public

// @deprecated — Use the named export createClient instead of the default export
