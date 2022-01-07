/**
 * @generated SignedSource<<85c7eed6f5db6b8f669915682e415c8c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyAccountEditEmailQuery$variables = {};
export type MyAccountEditEmailQueryVariables = MyAccountEditEmailQuery$variables;
export type MyAccountEditEmailQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyAccountEditEmail_me">;
  } | null;
};
export type MyAccountEditEmailQueryResponse = MyAccountEditEmailQuery$data;
export type MyAccountEditEmailQuery = {
  variables: MyAccountEditEmailQueryVariables;
  response: MyAccountEditEmailQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyAccountEditEmailQuery",
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
            "name": "MyAccountEditEmail_me"
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
    "name": "MyAccountEditEmailQuery",
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
            "name": "email",
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
    "cacheID": "9fcc3bdc711b8a302f8bd21289fae194",
    "id": null,
    "metadata": {},
    "name": "MyAccountEditEmailQuery",
    "operationKind": "query",
    "text": "query MyAccountEditEmailQuery {\n  me {\n    ...MyAccountEditEmail_me\n    id\n  }\n}\n\nfragment MyAccountEditEmail_me on Me {\n  email\n}\n"
  }
};

(node as any).hash = "2b7fc72c78f1fe29014ef6fa30a83077";

export default node;
