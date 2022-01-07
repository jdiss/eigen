/**
 * @generated SignedSource<<b0334bc45d51cb3b89150adbd8b87615>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CitySavedList_city$data = {
  readonly name: string;
  readonly " $fragmentType": "CitySavedList_city";
};
export type CitySavedList_city = CitySavedList_city$data;
export type CitySavedList_city$key = {
  readonly " $data"?: CitySavedList_city$data;
  readonly " $fragmentSpreads": FragmentRefs<"CitySavedList_city">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CitySavedList_city",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "City",
  "abstractKey": null
};

(node as any).hash = "74c19a1423a2fc69b228a393596a29c9";

export default node;
