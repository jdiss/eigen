/**
 * @generated SignedSource<<58942281aa98187bbeac6ee3cf2b2e6d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SmallList_shows$data = ReadonlyArray<{
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistShow_show">;
  readonly " $fragmentType": "SmallList_shows";
}>;
export type SmallList_shows = SmallList_shows$data;
export type SmallList_shows$key = ReadonlyArray<{
  readonly " $data"?: SmallList_shows$data;
  readonly " $fragmentSpreads": FragmentRefs<"SmallList_shows">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "SmallList_shows",
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

(node as any).hash = "889650254fc45453af3c0ed2b5498312";

export default node;
