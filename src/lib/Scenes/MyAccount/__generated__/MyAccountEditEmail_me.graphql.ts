/**
 * @generated SignedSource<<ba3ec38ad112f7ce4060c77f98ba30d8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyAccountEditEmail_me$data = {
  readonly email: string | null;
  readonly " $fragmentType": "MyAccountEditEmail_me";
};
export type MyAccountEditEmail_me = MyAccountEditEmail_me$data;
export type MyAccountEditEmail_me$key = {
  readonly " $data"?: MyAccountEditEmail_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyAccountEditEmail_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyAccountEditEmail_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "18e2f212786da91f965d1384aaae9239";

export default node;
