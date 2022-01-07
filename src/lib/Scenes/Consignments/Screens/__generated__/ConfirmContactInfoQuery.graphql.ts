/**
 * @generated SignedSource<<d23de5c2b4f1b348a9c297996921324b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ConfirmContactInfoQuery$variables = {};
export type ConfirmContactInfoQueryVariables = ConfirmContactInfoQuery$variables;
export type ConfirmContactInfoQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"ConfirmContactInfo_me">;
  } | null;
};
export type ConfirmContactInfoQueryResponse = ConfirmContactInfoQuery$data;
export type ConfirmContactInfoQuery = {
  variables: ConfirmContactInfoQueryVariables;
  response: ConfirmContactInfoQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ConfirmContactInfoQuery",
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
            "name": "ConfirmContactInfo_me"
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
    "name": "ConfirmContactInfoQuery",
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
    "cacheID": "cd31dc8fb00fae2c615f6b8ee24d3b2a",
    "id": null,
    "metadata": {},
    "name": "ConfirmContactInfoQuery",
    "operationKind": "query",
    "text": "query ConfirmContactInfoQuery {\n  me {\n    ...ConfirmContactInfo_me\n    id\n  }\n}\n\nfragment ConfirmContactInfo_me on Me {\n  phone\n}\n"
  }
};

(node as any).hash = "5c92c404c64b8607044faf8854bfe012";

export default node;
