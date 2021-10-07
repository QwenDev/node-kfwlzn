// run `node index.js` in the terminal

const apiToken =
  '66a97c4c6da4b956999826cc20cc75e9d47d6a95f10c29e51819628977035148';

import Webflow from 'webflow-api';
const webflow = new Webflow({ token: apiToken });

const sites = webflow.sites();

sites.then((s) => console.log(s[0]._id));

const info = webflow.info();

info.then((x) => console.log(x));

s;

// Promise <[ Collection ]>
function displayCollections(siteId) {
  const collections = webflow.collections({ siteId: siteId });

  collections.then((c) => {
    var collectionId = c[0]._id;

    console.log('First collection id = ' + collectionId);

    displayItems(collectionId);
  });
}

// Promise <[ Item ]>
function displayItems(collectionId) {
  const items = webflow.items({ collectionId: collectionId }, { limit: 100 });

  items.then((i) => console.log(i));
}
