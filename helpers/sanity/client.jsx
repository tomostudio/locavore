// client.js
import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'n3bn5042', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: 'v1',
  useCdn: false, // `false` if you want to ensure fresh data
});
