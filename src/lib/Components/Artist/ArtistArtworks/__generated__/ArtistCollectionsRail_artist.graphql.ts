/**
 * @generated SignedSource<<2eedf7be9f34e209e679496396bac6ae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistCollectionsRail_artist$data = {
  readonly internalID: string;
  readonly slug: string;
  readonly " $fragmentType": "ArtistCollectionsRail_artist";
};
export type ArtistCollectionsRail_artist = ArtistCollectionsRail_artist$data;
export type ArtistCollectionsRail_artist$key = {
  readonly " $data"?: ArtistCollectionsRail_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistCollectionsRail_artist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtistCollectionsRail_artist",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "4989d2fb9937bf57e6d26b9532e047c9";

export default node;
