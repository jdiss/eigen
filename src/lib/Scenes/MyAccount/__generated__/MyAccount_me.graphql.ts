/**
 * @generated SignedSource<<e2165bff7a621053fe976e893a0a9522>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyAccount_me$data = {
  readonly name: string | null;
  readonly email: string | null;
  readonly phone: string | null;
  readonly paddleNumber: string | null;
  readonly hasPassword: boolean;
  readonly " $fragmentType": "MyAccount_me";
};
export type MyAccount_me = MyAccount_me$data;
export type MyAccount_me$key = {
  readonly " $data"?: MyAccount_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyAccount_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyAccount_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "phone",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "paddleNumber",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasPassword",
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "7e030bd5a669b805cf6701e42c6e3bf2";

export default node;
