/**
 * @generated SignedSource<<26d1daa874cdea885d0b559e2a4cba4b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SearchRefetchQuery$variables = {};
export type SearchRefetchQueryVariables = SearchRefetchQuery$variables;
export type SearchRefetchQuery$data = {
  readonly system: {
    readonly " $fragmentSpreads": FragmentRefs<"Search_system">;
  } | null;
};
export type SearchRefetchQueryResponse = SearchRefetchQuery$data;
export type SearchRefetchQuery = {
  variables: SearchRefetchQueryVariables;
  response: SearchRefetchQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "System",
        "kind": "LinkedField",
        "name": "system",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Search_system"
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
    "name": "SearchRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "System",
        "kind": "LinkedField",
        "name": "system",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Algolia",
            "kind": "LinkedField",
            "name": "algolia",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "appID",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "apiKey",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AlgoliaIndex",
                "kind": "LinkedField",
                "name": "indices",
                "plural": true,
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
                    "name": "displayName",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "key",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "90385308c0bc2bd7cbddd64711b3a015",
    "id": null,
    "metadata": {},
    "name": "SearchRefetchQuery",
    "operationKind": "query",
    "text": "query SearchRefetchQuery {\n  system {\n    ...Search_system\n  }\n}\n\nfragment Search_system on System {\n  __typename\n  algolia {\n    appID\n    apiKey\n    indices {\n      name\n      displayName\n      key\n    }\n  }\n}\n"
  }
};

(node as any).hash = "7fa3e400793a251791a4c627ceff3950";

export default node;
