/**
 * @generated SignedSource<<e9f422aa8b2e14939db5e933789ba1a6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeHeroTestsQuery$variables = {};
export type HomeHeroTestsQueryVariables = HomeHeroTestsQuery$variables;
export type HomeHeroTestsQuery$data = {
  readonly homePage: {
    readonly " $fragmentSpreads": FragmentRefs<"HomeHero_homePage">;
  } | null;
};
export type HomeHeroTestsQueryResponse = HomeHeroTestsQuery$data;
export type HomeHeroTestsQuery = {
  variables: HomeHeroTestsQueryVariables;
  response: HomeHeroTestsQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeHeroTestsQuery",
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
            "name": "HomeHero_homePage"
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
    "name": "HomeHeroTestsQuery",
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
                "name": "linkText",
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
    "cacheID": "ba96e13a2b0672e7b9763c1647dd5c2d",
    "id": null,
    "metadata": {},
    "name": "HomeHeroTestsQuery",
    "operationKind": "query",
    "text": "query HomeHeroTestsQuery {\n  homePage {\n    ...HomeHero_homePage\n  }\n}\n\nfragment HomeHero_homePage on HomePage {\n  heroUnits(platform: MOBILE) {\n    title\n    subtitle\n    creditLine\n    linkText\n    href\n    backgroundImageURL\n    id\n  }\n}\n"
  }
};

(node as any).hash = "63c8573155169d6d07b9835a2b086e98";

export default node;
