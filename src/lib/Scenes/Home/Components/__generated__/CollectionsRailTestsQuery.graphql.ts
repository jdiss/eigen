/**
 * @generated SignedSource<<974672a6cb19d5e839d26f72abae33ae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CollectionsRailTestsQuery$variables = {};
export type CollectionsRailTestsQueryVariables = CollectionsRailTestsQuery$variables;
export type CollectionsRailTestsQuery$data = {
  readonly homePage: {
    readonly marketingCollectionsModule: {
      readonly " $fragmentSpreads": FragmentRefs<"CollectionsRail_collectionsModule">;
    } | null;
  } | null;
};
export type CollectionsRailTestsQueryResponse = CollectionsRailTestsQuery$data;
export type CollectionsRailTestsQuery$rawResponse = {
  readonly homePage: {
    readonly marketingCollectionsModule: {
      readonly results: ReadonlyArray<{
        readonly title: string;
        readonly slug: string;
        readonly artworksConnection: {
          readonly counts: {
            readonly total: any | null;
          } | null;
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly image: {
                readonly url: string | null;
              } | null;
              readonly id: string;
            } | null;
          } | null> | null;
          readonly id: string;
        } | null;
        readonly id: string;
      } | null>;
    } | null;
  } | null;
};
export type CollectionsRailTestsQueryRawResponse = CollectionsRailTestsQuery$rawResponse;
export type CollectionsRailTestsQuery = {
  variables: CollectionsRailTestsQueryVariables;
  response: CollectionsRailTestsQuery$data;
  rawResponse: CollectionsRailTestsQuery$rawResponse;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionsRailTestsQuery",
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
            "args": null,
            "concreteType": "HomePageMarketingCollectionsModule",
            "kind": "LinkedField",
            "name": "marketingCollectionsModule",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CollectionsRail_collectionsModule"
              }
            ],
            "storageKey": null
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
    "name": "CollectionsRailTestsQuery",
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
            "args": null,
            "concreteType": "HomePageMarketingCollectionsModule",
            "kind": "LinkedField",
            "name": "marketingCollectionsModule",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MarketingCollection",
                "kind": "LinkedField",
                "name": "results",
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
                    "name": "slug",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "first",
                        "value": 3
                      }
                    ],
                    "concreteType": "FilterArtworksConnection",
                    "kind": "LinkedField",
                    "name": "artworksConnection",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "FilterArtworksCounts",
                        "kind": "LinkedField",
                        "name": "counts",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "total",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "FilterArtworksEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Artwork",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Image",
                                "kind": "LinkedField",
                                "name": "image",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "version",
                                        "value": "large"
                                      }
                                    ],
                                    "kind": "ScalarField",
                                    "name": "url",
                                    "storageKey": "url(version:\"large\")"
                                  }
                                ],
                                "storageKey": null
                              },
                              (v0/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v0/*: any*/)
                    ],
                    "storageKey": "artworksConnection(first:3)"
                  },
                  (v0/*: any*/)
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
    "cacheID": "300622f2a252bf1da69a417c6e705635",
    "id": null,
    "metadata": {},
    "name": "CollectionsRailTestsQuery",
    "operationKind": "query",
    "text": "query CollectionsRailTestsQuery {\n  homePage {\n    marketingCollectionsModule {\n      ...CollectionsRail_collectionsModule\n    }\n  }\n}\n\nfragment CollectionsRail_collectionsModule on HomePageMarketingCollectionsModule {\n  results {\n    title\n    slug\n    artworksConnection(first: 3) {\n      counts {\n        total\n      }\n      edges {\n        node {\n          image {\n            url(version: \"large\")\n          }\n          id\n        }\n      }\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "1515b35dee6e677382437e445a880a03";

export default node;
