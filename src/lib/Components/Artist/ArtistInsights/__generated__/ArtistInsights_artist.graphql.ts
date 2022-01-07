/**
 * @generated SignedSource<<4255d8a4f391a031cee3f6ba95154ad6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistInsights_artist$data = {
  readonly name: string | null;
  readonly id: string;
  readonly internalID: string;
  readonly slug: string;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistInsightsAuctionResults_artist">;
  readonly " $fragmentType": "ArtistInsights_artist";
};
export type ArtistInsights_artist = ArtistInsights_artist$data;
export type ArtistInsights_artist$key = {
  readonly " $data"?: ArtistInsights_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistInsights_artist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtistInsights_artist",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtistInsightsAuctionResults_artist"
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "a9605933fe37ef34937b99ea6b8fae2d";

export default node;
