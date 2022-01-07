/**
 * @generated SignedSource<<9786ecfb8b34902410efca30d0a4ac5b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkArtistMarket_artwork$data = {
  readonly internalID: string;
  readonly slug: string;
  readonly " $fragmentType": "MyCollectionArtworkArtistMarket_artwork";
};
export type MyCollectionArtworkArtistMarket_artwork = MyCollectionArtworkArtistMarket_artwork$data;
export type MyCollectionArtworkArtistMarket_artwork$key = {
  readonly " $data"?: MyCollectionArtworkArtistMarket_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkArtistMarket_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionArtworkArtistMarket_artwork",
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
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "9d568c0906219d2848cde66f93177267";

export default node;
