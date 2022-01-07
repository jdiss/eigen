/**
 * @generated SignedSource<<876ce9a5d05b4e9afbb03361bb1472d0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateSavedSearchContentContainerV1RefetchQuery$variables = {};
export type CreateSavedSearchContentContainerV1RefetchQueryVariables = CreateSavedSearchContentContainerV1RefetchQuery$variables;
export type CreateSavedSearchContentContainerV1RefetchQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"CreateSavedSearchContentContainerV1_me">;
  } | null;
};
export type CreateSavedSearchContentContainerV1RefetchQueryResponse = CreateSavedSearchContentContainerV1RefetchQuery$data;
export type CreateSavedSearchContentContainerV1RefetchQuery = {
  variables: CreateSavedSearchContentContainerV1RefetchQueryVariables;
  response: CreateSavedSearchContentContainerV1RefetchQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateSavedSearchContentContainerV1RefetchQuery",
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
            "name": "CreateSavedSearchContentContainerV1_me"
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
    "name": "CreateSavedSearchContentContainerV1RefetchQuery",
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
            "name": "emailFrequency",
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
    "cacheID": "d06dc54f6a74d2e2e329fb236dcaa9e3",
    "id": null,
    "metadata": {},
    "name": "CreateSavedSearchContentContainerV1RefetchQuery",
    "operationKind": "query",
    "text": "query CreateSavedSearchContentContainerV1RefetchQuery {\n  me {\n    ...CreateSavedSearchContentContainerV1_me\n    id\n  }\n}\n\nfragment CreateSavedSearchContentContainerV1_me on Me {\n  emailFrequency\n}\n"
  }
};

(node as any).hash = "e3b8e7edc2c119f43f688f12d2c5dce7";

export default node;
