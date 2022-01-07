/**
 * @generated SignedSource<<e367b0bac60f8a349c269a47787065bb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyAccountEditName_me$data = {
  readonly name: string | null;
  readonly " $fragmentType": "MyAccountEditName_me";
};
export type MyAccountEditName_me = MyAccountEditName_me$data;
export type MyAccountEditName_me$key = {
  readonly " $data"?: MyAccountEditName_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyAccountEditName_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyAccountEditName_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "dbdfea98827c1e03f4535ce585dd243e";

export default node;
