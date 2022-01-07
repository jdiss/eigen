/**
 * @generated SignedSource<<f78d91a11725982963ebcaa0dd254627>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TroveTestsQuery$variables = {};
export type TroveTestsQueryVariables = TroveTestsQuery$variables;
export type TroveTestsQuery$data = {
  readonly homePage: {
    readonly " $fragmentSpreads": FragmentRefs<"Trove_trove">;
  } | null;
};
export type TroveTestsQueryResponse = TroveTestsQuery$data;
export type TroveTestsQuery = {
  variables: TroveTestsQueryVariables;
  response: TroveTestsQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TroveTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "HomePage",
        "kind": "LinkedField",
        "name": "homePage",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Trove_trove"
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
    "name": "TroveTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "HomePage",
        "kind": "LinkedField",
        "name": "homePage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "platform",
                "value": "MOBILE"
              }
            ],
            "concreteType": "HomePageHeroUnit",
            "kind": "LinkedField",
            "name": "heroUnits",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "subtitle",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "creditLine",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "href",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "backgroundImageURL",
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
            "storageKey": "heroUnits(platform:\"MOBILE\")"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d4e51a8d9d6d146eff5256ce3521bc41",
    "id": null,
    "metadata": {},
    "name": "TroveTestsQuery",
    "operationKind": "query",
    "text": "query TroveTestsQuery {\n  homePage {\n    ...Trove_trove\n  }\n}\n\nfragment Trove_trove on HomePage {\n  heroUnits(platform: MOBILE) {\n    title\n    subtitle\n    creditLine\n    href\n    backgroundImageURL\n    id\n  }\n}\n"
  }
};

(node as any).hash = "eb76b6abbdb1edc56ebcd9bc003c2527";

export default node;
