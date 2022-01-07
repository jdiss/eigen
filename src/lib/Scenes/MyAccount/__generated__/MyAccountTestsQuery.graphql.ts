/**
 * @generated SignedSource<<c314b1fc5dd37d9d4a418ef2302058e1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyAccountTestsQuery$variables = {};
export type MyAccountTestsQueryVariables = MyAccountTestsQuery$variables;
export type MyAccountTestsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyAccount_me">;
  } | null;
};
export type MyAccountTestsQueryResponse = MyAccountTestsQuery$data;
export type MyAccountTestsQuery = {
  variables: MyAccountTestsQueryVariables;
  response: MyAccountTestsQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyAccountTestsQuery",
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
    "name": "MyAccountTestsQuery",
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
    "cacheID": "933f2ffd7161fb11839b1981bfc64433",
    "id": null,
    "metadata": {},
    "name": "MyAccountTestsQuery",
    "operationKind": "query",
    "text": "query MyAccountTestsQuery {\n  me {\n    ...MyAccount_me\n    id\n  }\n}\n\nfragment MyAccount_me on Me {\n  name\n  email\n  phone\n  paddleNumber\n  hasPassword\n}\n"
  }
};

(node as any).hash = "83eb6b625a42186d1ea3c14b60d7b6cb";

export default node;
