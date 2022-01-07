/**
 * @generated SignedSource<<f418268739680a775800b88d847441a8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateSavedSearchAlertTestsQuery$variables = {};
export type CreateSavedSearchAlertTestsQueryVariables = CreateSavedSearchAlertTestsQuery$variables;
export type CreateSavedSearchAlertTestsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"CreateSavedSearchContentContainerV1_me">;
  } | null;
};
export type CreateSavedSearchAlertTestsQueryResponse = CreateSavedSearchAlertTestsQuery$data;
export type CreateSavedSearchAlertTestsQuery = {
  variables: CreateSavedSearchAlertTestsQueryVariables;
  response: CreateSavedSearchAlertTestsQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateSavedSearchAlertTestsQuery",
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
    "name": "CreateSavedSearchAlertTestsQuery",
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
    "cacheID": "15f1f7acaf852cdd59b83431c99f24b7",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.emailFrequency": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "String"
        },
        "me.id": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ID"
        }
      }
    },
    "name": "CreateSavedSearchAlertTestsQuery",
    "operationKind": "query",
    "text": "query CreateSavedSearchAlertTestsQuery {\n  me {\n    ...CreateSavedSearchContentContainerV1_me\n    id\n  }\n}\n\nfragment CreateSavedSearchContentContainerV1_me on Me {\n  emailFrequency\n}\n"
  }
};

(node as any).hash = "eb791f7e4bffed09da7ec57300c0db49";

export default node;
