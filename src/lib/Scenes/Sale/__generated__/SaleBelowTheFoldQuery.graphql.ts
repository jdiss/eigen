/**
 * @generated SignedSource<<32709cb2afe9da2a6c7f6cfea7a247d7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaleBelowTheFoldQuery$variables = {
  saleID?: string | null;
};
export type SaleBelowTheFoldQueryVariables = SaleBelowTheFoldQuery$variables;
export type SaleBelowTheFoldQuery$data = {
  readonly unfilteredSaleArtworksConnection: {
    readonly counts: {
      readonly total: any | null;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"SaleLotsList_unfilteredSaleArtworksConnection">;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"SaleLotsList_saleArtworksConnection">;
};
export type SaleBelowTheFoldQueryResponse = SaleBelowTheFoldQuery$data;
export type SaleBelowTheFoldQuery = {
  variables: SaleBelowTheFoldQueryVariables;
  response: SaleBelowTheFoldQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "saleID"
  }
],
v1 = {
  "kind": "Variable",
  "name": "saleID",
  "variableName": "saleID"
},
v2 = [
  {
    "kind": "Literal",
    "name": "aggregations",
    "value": [
      "TOTAL"
    ]
  },
  (v1/*: any*/)
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "total",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "FilterSaleArtworksCounts",
  "kind": "LinkedField",
  "name": "counts",
  "plural": false,
  "selections": [
    (v3/*: any*/)
  ],
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "aggregations",
    "value": [
      "FOLLOWED_ARTISTS",
      "ARTIST",
      "MEDIUM",
      "TOTAL"
    ]
  },
  {
    "kind": "Literal",
    "name": "artistIDs",
    "value": ([]/*: any*/)
  },
  {
    "kind": "Literal",
    "name": "estimateRange",
    "value": ""
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "geneIDs",
    "value": ([]/*: any*/)
  },
  {
    "kind": "Literal",
    "name": "includeArtworksByFollowedArtists",
    "value": false
  },
  (v1/*: any*/),
  {
    "kind": "Literal",
    "name": "sort",
    "value": "position"
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SaleBelowTheFoldQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "SaleLotsList_saleArtworksConnection"
      },
      {
        "alias": "unfilteredSaleArtworksConnection",
        "args": (v2/*: any*/),
        "concreteType": "SaleArtworksConnection",
        "kind": "LinkedField",
        "name": "saleArtworksConnection",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SaleLotsList_unfilteredSaleArtworksConnection"
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SaleBelowTheFoldQuery",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "SaleArtworksConnection",
        "kind": "LinkedField",
        "name": "saleArtworksConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SaleArtworksAggregationResults",
            "kind": "LinkedField",
            "name": "aggregations",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "slice",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AggregationCount",
                "kind": "LinkedField",
                "name": "counts",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "count",
                    "storageKey": null
                  },
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "value",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "FilterSaleArtworksCounts",
            "kind": "LinkedField",
            "name": "counts",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "followedArtists",
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
                  (v7/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  (v8/*: any*/),
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
                        "kind": "ScalarField",
                        "name": "artistNames",
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
                        "kind": "ScalarField",
                        "name": "href",
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
                            "alias": "small",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "version",
                                "value": "small"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "url",
                            "storageKey": "url(version:\"small\")"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "aspectRatio",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "height",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "width",
                            "storageKey": null
                          },
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
                        "name": "slug",
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
                        "name": "internalID",
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
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "endAt",
                            "storageKey": null
                          },
                          (v7/*: any*/)
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
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "lotLabel",
                            "storageKey": null
                          },
                          (v7/*: any*/)
                        ],
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
                          (v6/*: any*/),
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "TypeDiscriminator",
                    "abstractKey": "__isNode"
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "startCursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "ArtworkConnectionInterface",
            "abstractKey": "__isArtworkConnectionInterface"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
        "filters": [
          "saleID",
          "artistIDs",
          "geneIDs",
          "aggregations",
          "estimateRange",
          "includeArtworksByFollowedArtists",
          "sort"
        ],
        "handle": "connection",
        "key": "SaleLotsList_saleArtworksConnection",
        "kind": "LinkedHandle",
        "name": "saleArtworksConnection"
      },
      {
        "alias": "unfilteredSaleArtworksConnection",
        "args": (v2/*: any*/),
        "concreteType": "SaleArtworksConnection",
        "kind": "LinkedField",
        "name": "saleArtworksConnection",
        "plural": false,
        "selections": [
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c0e4b1a325a6ccdd5d1b1f8bea518661",
    "id": null,
    "metadata": {},
    "name": "SaleBelowTheFoldQuery",
    "operationKind": "query",
    "text": "query SaleBelowTheFoldQuery(\n  $saleID: ID\n) {\n  ...SaleLotsList_saleArtworksConnection_nfIph\n  unfilteredSaleArtworksConnection: saleArtworksConnection(saleID: $saleID, aggregations: [TOTAL]) {\n    ...SaleLotsList_unfilteredSaleArtworksConnection\n    counts {\n      total\n    }\n  }\n}\n\nfragment ArtworkGridItem_artwork on Artwork {\n  title\n  date\n  saleMessage\n  slug\n  internalID\n  artistNames\n  href\n  sale {\n    isAuction\n    isClosed\n    displayTimelyAt\n    endAt\n    id\n  }\n  saleArtwork {\n    counts {\n      bidderPositions\n    }\n    currentBid {\n      display\n    }\n    lotLabel\n    id\n  }\n  partner {\n    name\n    id\n  }\n  image {\n    url(version: \"large\")\n    aspectRatio\n  }\n}\n\nfragment InfiniteScrollArtworksGrid_connection on ArtworkConnectionInterface {\n  __isArtworkConnectionInterface: __typename\n  pageInfo {\n    hasNextPage\n    startCursor\n    endCursor\n  }\n  edges {\n    __typename\n    node {\n      slug\n      id\n      image {\n        aspectRatio\n      }\n      ...ArtworkGridItem_artwork\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment SaleArtworkListItem_artwork on Artwork {\n  artistNames\n  date\n  href\n  image {\n    small: url(version: \"small\")\n    aspectRatio\n    height\n    width\n  }\n  saleMessage\n  slug\n  title\n  internalID\n  sale {\n    isAuction\n    isClosed\n    displayTimelyAt\n    endAt\n    id\n  }\n  saleArtwork {\n    counts {\n      bidderPositions\n    }\n    currentBid {\n      display\n    }\n    lotLabel\n    id\n  }\n}\n\nfragment SaleArtworkList_connection on ArtworkConnectionInterface {\n  __isArtworkConnectionInterface: __typename\n  edges {\n    __typename\n    node {\n      id\n      ...SaleArtworkListItem_artwork\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment SaleLotsList_saleArtworksConnection_nfIph on Query {\n  saleArtworksConnection(saleID: $saleID, artistIDs: [], geneIDs: [], aggregations: [FOLLOWED_ARTISTS, ARTIST, MEDIUM, TOTAL], estimateRange: \"\", first: 10, includeArtworksByFollowedArtists: false, sort: \"position\") {\n    aggregations {\n      slice\n      counts {\n        count\n        name\n        value\n      }\n    }\n    counts {\n      followedArtists\n      total\n    }\n    edges {\n      node {\n        id\n        __typename\n      }\n      cursor\n      id\n    }\n    ...SaleArtworkList_connection\n    ...InfiniteScrollArtworksGrid_connection\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment SaleLotsList_unfilteredSaleArtworksConnection on SaleArtworksConnection {\n  counts {\n    total\n  }\n}\n"
  }
};
})();

(node as any).hash = "3441478a75aa2b99a08059e5634fe553";

export default node;
