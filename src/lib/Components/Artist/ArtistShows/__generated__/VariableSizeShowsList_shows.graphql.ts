/**
 * @generated SignedSource<<34aa48d119ac1fac3944745d4dad75a4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VariableSizeShowsList_shows$data = ReadonlyArray<{
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistShow_show">;
  readonly " $fragmentType": "VariableSizeShowsList_shows";
}>;
export type VariableSizeShowsList_shows = VariableSizeShowsList_shows$data;
export type VariableSizeShowsList_shows$key = ReadonlyArray<{
  readonly " $data"?: VariableSizeShowsList_shows$data;
  readonly " $fragmentSpreads": FragmentRefs<"VariableSizeShowsList_shows">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "VariableSizeShowsList_shows",
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
      "name": "ArtistShow_show"
    }
  ],
  "type": "Show",
  "abstractKey": null
};

(node as any).hash = "eb42c123093e9a3a8eddd7f902a02673";

export default node;
