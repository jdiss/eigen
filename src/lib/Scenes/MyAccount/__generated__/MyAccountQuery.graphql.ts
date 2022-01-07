/**
 * @generated SignedSource<<1afb01da62ecdd8e4b4a5ff23f2cd5d5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyAccountQuery$variables = {};
export type MyAccountQueryVariables = MyAccountQuery$variables;
export type MyAccountQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyAccount_me">;
  } | null;
};
export type MyAccountQueryResponse = MyAccountQuery$data;
export type MyAccountQuery = {
  variables: MyAccountQueryVariables;
  response: MyAccountQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyAccountQuery",
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
            "name": "MyAccount_me"
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
    "name": "MyAccountQuery",
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
    "cacheID": "2f7482bbc02ad88b607e60a605e4389a",
    "id": null,
    "metadata": {},
    "name": "MyAccountQuery",
    "operationKind": "query",
    "text": "query MyAccountQuery {\n  me {\n    ...MyAccount_me\n    id\n  }\n}\n\nfragment MyAccount_me on Me {\n  name\n  email\n  phone\n  paddleNumber\n  hasPassword\n}\n"
  }
};

(node as any).hash = "8f5885fed0c1869833b4ad7966725076";

export default node;
