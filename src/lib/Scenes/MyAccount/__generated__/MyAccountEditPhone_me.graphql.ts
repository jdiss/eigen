/**
 * @generated SignedSource<<477b289f1981c2ebeb4372f1dbf90747>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyAccountEditPhone_me$data = {
  readonly phone: string | null;
  readonly " $fragmentType": "MyAccountEditPhone_me";
};
export type MyAccountEditPhone_me = MyAccountEditPhone_me$data;
export type MyAccountEditPhone_me$key = {
  readonly " $data"?: MyAccountEditPhone_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyAccountEditPhone_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyAccountEditPhone_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "phone",
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "9c918fc47dc1841425f5488d2c307f2e";

export default node;
