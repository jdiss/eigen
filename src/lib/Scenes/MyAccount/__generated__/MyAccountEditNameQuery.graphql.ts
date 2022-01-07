/**
 * @generated SignedSource<<ab9a551862076f78c9cd78a69d15ad6b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyAccountEditNameQuery$variables = {};
export type MyAccountEditNameQueryVariables = MyAccountEditNameQuery$variables;
export type MyAccountEditNameQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyAccountEditName_me">;
  } | null;
};
export type MyAccountEditNameQueryResponse = MyAccountEditNameQuery$data;
export type MyAccountEditNameQuery = {
  variables: MyAccountEditNameQueryVariables;
  response: MyAccountEditNameQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyAccountEditNameQuery",
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
            "name": "MyAccountEditName_me"
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
    "name": "MyAccountEditNameQuery",
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
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "062054af6d649b29fe0eaf46a35da6dd",
    "id": null,
    "metadata": {},
    "name": "MyAccountEditNameQuery",
    "operationKind": "query",
    "text": "query MyAccountEditNameQuery {\n  me {\n    ...MyAccountEditName_me\n    id\n  }\n}\n\nfragment MyAccountEditName_me on Me {\n  name\n}\n"
  }
};

(node as any).hash = "c07b0787fa7a09e9afc7b083ad4faa0e";

export default node;
