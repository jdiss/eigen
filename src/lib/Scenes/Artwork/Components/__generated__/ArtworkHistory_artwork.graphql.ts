/**
 * @generated SignedSource<<fefb263ea35973a7ab48281870d65a52>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkHistory_artwork$data = {
  readonly provenance: string | null;
  readonly exhibitionHistory: string | null;
  readonly literature: string | null;
  readonly " $fragmentType": "ArtworkHistory_artwork";
};
export type ArtworkHistory_artwork = ArtworkHistory_artwork$data;
export type ArtworkHistory_artwork$key = {
  readonly " $data"?: ArtworkHistory_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkHistory_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkHistory_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "provenance",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "exhibitionHistory",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "literature",
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "0cde93b94926cb77be4875a37b911854";

export default node;
