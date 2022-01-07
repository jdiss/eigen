/**
 * @generated SignedSource<<79015b18046955e169ee12641ea747c2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RelatedArtists_artists$data = ReadonlyArray<{
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"RelatedArtist_artist">;
  readonly " $fragmentType": "RelatedArtists_artists";
}>;
export type RelatedArtists_artists = RelatedArtists_artists$data;
export type RelatedArtists_artists$key = ReadonlyArray<{
  readonly " $data"?: RelatedArtists_artists$data;
  readonly " $fragmentSpreads": FragmentRefs<"RelatedArtists_artists">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "RelatedArtists_artists",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RelatedArtist_artist"
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "8aa209a584d7ea23ce840f434aa5dd51";

export default node;
