/**
 * @generated SignedSource<<017b5fde77cf62ef6e5c021b03a507dd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MarketingGroupTypes = "ArtistSeries" | "FeaturedCollections" | "OtherCollections" | "%future added value";
export type FeaturedCollectionsRailTestsQuery$variables = {};
export type FeaturedCollectionsRailTestsQueryVariables = FeaturedCollectionsRailTestsQuery$variables;
export type FeaturedCollectionsRailTestsQuery$data = {
  readonly marketingCollection: {
    readonly linkedCollections: ReadonlyArray<{
      readonly groupType: MarketingGroupTypes;
      readonly " $fragmentSpreads": FragmentRefs<"FeaturedCollectionsRail_collectionGroup">;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"FeaturedCollectionsRail_collection">;
  } | null;
};
export type FeaturedCollectionsRailTestsQueryResponse = FeaturedCollectionsRailTestsQuery$data;
export type FeaturedCollectionsRailTestsQuery$rawResponse = {
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
        readonly descriptionMarkdown: string | null;
        readonly featuredCollectionArtworks: {
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
      }>;
    }>;
  } | null;
};
export type FeaturedCollectionsRailTestsQueryRawResponse = FeaturedCollectionsRailTestsQuery$rawResponse;
export type FeaturedCollectionsRailTestsQuery = {
  variables: FeaturedCollectionsRailTestsQueryVariables;
  response: FeaturedCollectionsRailTestsQuery$data;
  rawResponse: FeaturedCollectionsRailTestsQuery$rawResponse;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "slug",
    "value": "post-war"
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FeaturedCollectionsRailTestsQuery",
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
            "name": "FeaturedCollectionsRail_collection"
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
                "name": "FeaturedCollectionsRail_collectionGroup"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "marketingCollection(slug:\"post-war\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FeaturedCollectionsRailTestsQuery",
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
                    "name": "priceGuidance",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "descriptionMarkdown",
                    "storageKey": null
                  },
                  {
                    "alias": "featuredCollectionArtworks",
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
                        "value": 1
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
                    "storageKey": "artworksConnection(aggregations:[\"TOTAL\"],first:1,sort:\"-decayed_merch\")"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "marketingCollection(slug:\"post-war\")"
      }
    ]
  },
  "params": {
    "cacheID": "b70a8a8b625b7966275cf1d2ce8ea519",
    "id": null,
    "metadata": {},
    "name": "FeaturedCollectionsRailTestsQuery",
    "operationKind": "query",
    "text": "query FeaturedCollectionsRailTestsQuery {\n  marketingCollection(slug: \"post-war\") {\n    ...FeaturedCollectionsRail_collection\n    linkedCollections {\n      groupType\n      ...FeaturedCollectionsRail_collectionGroup\n    }\n    id\n  }\n}\n\nfragment FeaturedCollectionsRail_collection on MarketingCollection {\n  slug\n  id\n}\n\nfragment FeaturedCollectionsRail_collectionGroup on MarketingCollectionGroup {\n  name\n  members {\n    slug\n    id\n    title\n    priceGuidance\n    descriptionMarkdown\n    featuredCollectionArtworks: artworksConnection(first: 1, aggregations: [TOTAL], sort: \"-decayed_merch\") {\n      edges {\n        node {\n          image {\n            url\n          }\n          id\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "98a14bb9f2b4d0e312406ba7a5900987";

export default node;
