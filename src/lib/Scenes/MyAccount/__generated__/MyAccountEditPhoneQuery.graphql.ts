/**
 * @generated SignedSource<<7645b8fc461bbc91d8e05eb44de65d97>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyAccountEditPhoneQuery$variables = {};
export type MyAccountEditPhoneQueryVariables = MyAccountEditPhoneQuery$variables;
export type MyAccountEditPhoneQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyAccountEditPhone_me">;
  } | null;
};
export type MyAccountEditPhoneQueryResponse = MyAccountEditPhoneQuery$data;
export type MyAccountEditPhoneQuery = {
  variables: MyAccountEditPhoneQueryVariables;
  response: MyAccountEditPhoneQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyAccountEditPhoneQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyAccountEditPhone_me"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MyAccountEditPhoneQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
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
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c841f909061067fc539654747057c474",
    "id": null,
    "metadata": {},
    "name": "MyAccountEditPhoneQuery",
    "operationKind": "query",
    "text": "query MyAccountEditPhoneQuery {\n  me {\n    ...MyAccountEditPhone_me\n    id\n  }\n}\n\nfragment MyAccountEditPhone_me on Me {\n  phone\n}\n"
  }
};

(node as any).hash = "155d1d901e2064798aa49724f0c1a7e7";

export default node;
