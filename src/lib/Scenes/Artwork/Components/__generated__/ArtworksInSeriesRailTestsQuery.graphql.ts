/**
 * @generated SignedSource<<8b777f6ed23af376ae1bbd85a293e04a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworksInSeriesRailTestsQuery$variables = {};
export type ArtworksInSeriesRailTestsQueryVariables = ArtworksInSeriesRailTestsQuery$variables;
export type ArtworksInSeriesRailTestsQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtworksInSeriesRail_artwork">;
  } | null;
};
export type ArtworksInSeriesRailTestsQueryResponse = ArtworksInSeriesRailTestsQuery$data;
export type ArtworksInSeriesRailTestsQuery$rawResponse = {
  readonly artwork: {
    readonly internalID: string;
    readonly slug: string;
    readonly artistSeriesConnection: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly slug: string;
          readonly internalID: string;
          readonly filterArtworksConnection: {
            readonly edges: ReadonlyArray<{
              readonly node: {
                readonly slug: string;
                readonly internalID: string;
                readonly href: string | null;
                readonly artistNames: string | null;
                readonly image: {
                  readonly imageURL: string | null;
                  readonly aspectRatio: number;
                } | null;
                readonly sale: {
                  readonly isAuction: boolean | null;
                  readonly isClosed: boolean | null;
                  readonly displayTimelyAt: string | null;
                  readonly id: string;
                } | null;
                readonly saleArtwork: {
                  readonly counts: {
                    readonly bidderPositions: any | null;
                  } | null;
                  readonly currentBid: {
                    readonly display: string | null;
                  } | null;
                  readonly id: string;
                } | null;
                readonly saleMessage: string | null;
                readonly title: string | null;
                readonly date: string | null;
                readonly partner: {
                  readonly name: string | null;
                  readonly id: string;
                } | null;
                readonly id: string;
              } | null;
            } | null> | null;
            readonly id: string;
          } | null;
        } | null;
      } | null> | null;
    } | null;
    readonly id: string;
  } | null;
};
export type ArtworksInSeriesRailTestsQueryRawResponse = ArtworksInSeriesRailTestsQuery$rawResponse;
export type ArtworksInSeriesRailTestsQuery = {
  variables: ArtworksInSeriesRailTestsQueryVariables;
  response: ArtworksInSeriesRailTestsQuery$data;
  rawResponse: ArtworksInSeriesRailTestsQuery$rawResponse;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "some-artwork"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
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
    "name": "ArtworksInSeriesRailTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtworksInSeriesRail_artwork"
          }
        ],
        "storageKey": "artwork(id:\"some-artwork\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtworksInSeriesRailTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 1
              }
            ],
            "concreteType": "ArtistSeriesConnection",
            "kind": "LinkedField",
            "name": "artistSeriesConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ArtistSeriesEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ArtistSeries",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "first",
                            "value": 20
                          },
                          {
                            "kind": "Literal",
                            "name": "input",
                            "value": {
                              "sort": "-decayed_merch"
                            }
                          }
                        ],
                        "concreteType": "FilterArtworksConnection",
                        "kind": "LinkedField",
                        "name": "filterArtworksConnection",
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
                                  (v2/*: any*/),
                                  (v1/*: any*/),
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
                                    "name": "artistNames",
                                    "storageKey": null
                                  },
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
                                        "name": "imageURL",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "aspectRatio",
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Sale",
                                    "kind": "LinkedField",
                                    "name": "sale",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "isAuction",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "isClosed",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "displayTimelyAt",
                                        "storageKey": null
                                      },
                                      (v3/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "SaleArtwork",
                                    "kind": "LinkedField",
                                    "name": "saleArtwork",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "SaleArtworkCounts",
                                        "kind": "LinkedField",
                                        "name": "counts",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "bidderPositions",
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "SaleArtworkCurrentBid",
                                        "kind": "LinkedField",
                                        "name": "currentBid",
                                        "plural": false,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "display",
                                            "storageKey": null
                                          }
                                        ],
                                        "storageKey": null
                                      },
                                      (v3/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "saleMessage",
                                    "storageKey": null
                                  },
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
                                    "name": "date",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Partner",
                                    "kind": "LinkedField",
                                    "name": "partner",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "name",
                                        "storageKey": null
                                      },
                                      (v3/*: any*/)
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
                        "storageKey": "filterArtworksConnection(first:20,input:{\"sort\":\"-decayed_merch\"})"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "artistSeriesConnection(first:1)"
          },
          (v3/*: any*/)
        ],
        "storageKey": "artwork(id:\"some-artwork\")"
      }
    ]
  },
  "params": {
    "cacheID": "27d9d3ec937f864f4de098b386bef847",
    "id": null,
    "metadata": {},
    "name": "ArtworksInSeriesRailTestsQuery",
    "operationKind": "query",
    "text": "query ArtworksInSeriesRailTestsQuery {\n  artwork(id: \"some-artwork\") {\n    ...ArtworksInSeriesRail_artwork\n    id\n  }\n}\n\nfragment ArtworksInSeriesRail_artwork on Artwork {\n  internalID\n  slug\n  artistSeriesConnection(first: 1) {\n    edges {\n      node {\n        slug\n        internalID\n        filterArtworksConnection(first: 20, input: {sort: \"-decayed_merch\"}) {\n          edges {\n            node {\n              slug\n              internalID\n              href\n              artistNames\n              image {\n                imageURL\n                aspectRatio\n              }\n              sale {\n                isAuction\n                isClosed\n                displayTimelyAt\n                id\n              }\n              saleArtwork {\n                counts {\n                  bidderPositions\n                }\n                currentBid {\n                  display\n                }\n                id\n              }\n              saleMessage\n              title\n              date\n              partner {\n                name\n                id\n              }\n              id\n            }\n          }\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b3301f7c86dc8f69c41558912cff2603";

export default node;
