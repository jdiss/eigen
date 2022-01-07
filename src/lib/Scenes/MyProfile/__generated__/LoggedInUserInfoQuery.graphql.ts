/**
 * @generated SignedSource<<59569c85d4865445b8cba6beb6a0b247>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LoggedInUserInfoQuery$variables = {};
export type LoggedInUserInfoQueryVariables = LoggedInUserInfoQuery$variables;
export type LoggedInUserInfoQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"LoggedInUserInfo_me">;
  } | null;
};
export type LoggedInUserInfoQueryResponse = LoggedInUserInfoQuery$data;
export type LoggedInUserInfoQuery = {
  variables: LoggedInUserInfoQueryVariables;
  response: LoggedInUserInfoQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LoggedInUserInfoQuery",
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
            "name": "LoggedInUserInfo_me"
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
    "name": "LoggedInUserInfoQuery",
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
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7d69ced7249d5f5cbd4da634c24ad4bb",
    "id": null,
    "metadata": {},
    "name": "LoggedInUserInfoQuery",
    "operationKind": "query",
    "text": "query LoggedInUserInfoQuery {\n  me {\n    ...LoggedInUserInfo_me\n    id\n  }\n}\n\nfragment LoggedInUserInfo_me on Me {\n  name\n  email\n}\n"
  }
};

(node as any).hash = "e4f8e948db43ff716fec9355c45857d0";

export default node;
