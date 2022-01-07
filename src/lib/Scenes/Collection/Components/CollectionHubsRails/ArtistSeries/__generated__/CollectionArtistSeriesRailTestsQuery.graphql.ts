/**
 * @generated SignedSource<<fab4c9f8a27f2ced545f5eecc5377e63>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MarketingGroupTypes = "ArtistSeries" | "FeaturedCollections" | "OtherCollections" | "%future added value";
export type CollectionArtistSeriesRailTestsQuery$variables = {};
export type CollectionArtistSeriesRailTestsQueryVariables = CollectionArtistSeriesRailTestsQuery$variables;
export type CollectionArtistSeriesRailTestsQuery$data = {
  readonly marketingCollection: {
    readonly linkedCollections: ReadonlyArray<{
      readonly groupType: MarketingGroupTypes;
      readonly " $fragmentSpreads": FragmentRefs<"CollectionArtistSeriesRail_collectionGroup">;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"CollectionArtistSeriesRail_collection">;
  } | null;
};
export type CollectionArtistSeriesRailTestsQueryResponse = CollectionArtistSeriesRailTestsQuery$data;
export type CollectionArtistSeriesRailTestsQuery$rawResponse = {
  readonly marketingCollection: {
    readonly slug: string;
    readonly id: string;
    readonly linkedCollections: ReadonlyArray<{
      readonly groupType: MarketingGroupTypes;
      readonly name: string;
      readonly members: ReadonlyArray<{
        readonly slug: string;
        readonly id: string;
        readonly title: string;
        readonly priceGuidance: number | null;
        readonly artworksConnection: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly title: string | null;
              readonly image: {
                readonly url: string | null;
              } | null;
              readonly id: string;
            } | null;
          } | null> | null;
          readonly id: string;
        } | null;
      }>;
    }>;
  } | null;
};
export type CollectionArtistSeriesRailTestsQueryRawResponse = CollectionArtistSeriesRailTestsQuery$rawResponse;
export type CollectionArtistSeriesRailTestsQuery = {
  variables: CollectionArtistSeriesRailTestsQueryVariables;
  response: CollectionArtistSeriesRailTestsQuery$data;
  rawResponse: CollectionArtistSeriesRailTestsQuery$rawResponse;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "slug",
    "value": "photography"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "groupType",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionArtistSeriesRailTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "MarketingCollection",
        "kind": "LinkedField",
        "name": "marketingCollection",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CollectionArtistSeriesRail_collection"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "MarketingCollectionGroup",
            "kind": "LinkedField",
            "name": "linkedCollections",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CollectionArtistSeriesRail_collectionGroup"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "marketingCollection(slug:\"photography\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CollectionArtistSeriesRailTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "MarketingCollection",
        "kind": "LinkedField",
        "name": "marketingCollection",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "MarketingCollectionGroup",
            "kind": "LinkedField",
            "name": "linkedCollections",
            "plural": true,
            "selections": [
              (v1/*: any*/),
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
                "concreteType": "MarketingCollection",
                "kind": "LinkedField",
                "name": "members",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "priceGuidance",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "aggregations",
                        "value": [
                          "TOTAL"
                        ]
                      },
                      {
                        "kind": "Literal",
                        "name": "first",
                        "value": 3
                      },
                      {
                        "kind": "Literal",
                        "name": "sort",
                        "value": "-decayed_merch"
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
                              (v4/*: any*/),
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
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "url",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v3/*: any*/)
                    ],
                    "storageKey": "artworksConnection(aggregations:[\"TOTAL\"],first:3,sort:\"-decayed_merch\")"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "marketingCollection(slug:\"photography\")"
      }
    ]
  },
  "params": {
    "cacheID": "033696dd87340e7c0c3274af374560e0",
    "id": null,
    "metadata": {},
    "name": "CollectionArtistSeriesRailTestsQuery",
    "operationKind": "query",
    "text": "query CollectionArtistSeriesRailTestsQuery {\n  marketingCollection(slug: \"photography\") {\n    ...CollectionArtistSeriesRail_collection\n    linkedCollections {\n      groupType\n      ...CollectionArtistSeriesRail_collectionGroup\n    }\n    id\n  }\n}\n\nfragment CollectionArtistSeriesRail_collection on MarketingCollection {\n  slug\n  id\n}\n\nfragment CollectionArtistSeriesRail_collectionGroup on MarketingCollectionGroup {\n  name\n  members {\n    slug\n    id\n    title\n    priceGuidance\n    artworksConnection(first: 3, aggregations: [TOTAL], sort: \"-decayed_merch\") {\n      edges {\n        node {\n          title\n          image {\n            url\n          }\n          id\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "818dfb6f7f9593fcc13bcc8029b1c630";

export default node;
