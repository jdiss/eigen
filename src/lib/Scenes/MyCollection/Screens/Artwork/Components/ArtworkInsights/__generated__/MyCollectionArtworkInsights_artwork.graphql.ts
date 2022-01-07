/**
 * @generated SignedSource<<98e8a62407ac859f6508dd1b7787e616>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkInsights_artwork$data = {
  readonly sizeBucket: string | null;
  readonly medium: string | null;
  readonly artist: {
    readonly name: string | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkArtistAuctionResults_artwork" | "MyCollectionArtworkArtistArticles_artwork" | "MyCollectionArtworkArtistMarket_artwork" | "MyCollectionArtworkDemandIndex_artwork">;
  readonly " $fragmentType": "MyCollectionArtworkInsights_artwork";
};
export type MyCollectionArtworkInsights_artwork = MyCollectionArtworkInsights_artwork$data;
export type MyCollectionArtworkInsights_artwork$key = {
  readonly " $data"?: MyCollectionArtworkInsights_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkInsights_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionArtworkInsights_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "sizeBucket",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "medium",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artist",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MyCollectionArtworkArtistAuctionResults_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MyCollectionArtworkArtistArticles_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MyCollectionArtworkArtistMarket_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MyCollectionArtworkDemandIndex_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "3164fdfe1ed98b3253403c376fa82555";

export default node;
