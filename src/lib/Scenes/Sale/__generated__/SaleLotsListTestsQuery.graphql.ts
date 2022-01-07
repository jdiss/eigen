/**
 * @generated SignedSource<<56bee9f81dd0cb8b39a9e58194276aa3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaleLotsListTestsQuery$variables = {
  saleSlug: string;
};
export type SaleLotsListTestsQueryVariables = SaleLotsListTestsQuery$variables;
export type SaleLotsListTestsQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SaleLotsList_saleArtworksConnection">;
};
export type SaleLotsListTestsQueryResponse = SaleLotsListTestsQuery$data;
export type SaleLotsListTestsQuery = {
  variables: SaleLotsListTestsQueryVariables;
  response: SaleLotsListTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "saleSlug"
  }
],
v1 = {
  "kind": "Variable",
  "name": "saleID",
  "variableName": "saleSlug"
},
v2 = [
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v6 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v7 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "FormattedNumber"
},
v8 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v9 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v10 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v11 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SaleLotsListTestsQuery",
    "selections": [
      {
        "args": [
          (v1/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "SaleLotsList_saleArtworksConnection"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SaleLotsListTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
                  (v3/*: any*/),
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
                  (v4/*: any*/),
                  (v5/*: any*/)
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
              (v4/*: any*/)
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
                  (v5/*: any*/),
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
                          (v4/*: any*/)
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
                          (v4/*: any*/)
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
                          (v3/*: any*/),
                          (v4/*: any*/)
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
        "args": (v2/*: any*/),
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
      }
    ]
  },
  "params": {
    "cacheID": "45967506c5f4f37bf69b7fde2f3d42b2",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "saleArtworksConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworksConnection"
        },
        "saleArtworksConnection.__isArtworkConnectionInterface": (v6/*: any*/),
        "saleArtworksConnection.aggregations": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "SaleArtworksAggregationResults"
        },
        "saleArtworksConnection.aggregations.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "AggregationCount"
        },
        "saleArtworksConnection.aggregations.counts.count": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Int"
        },
        "saleArtworksConnection.aggregations.counts.name": (v6/*: any*/),
        "saleArtworksConnection.aggregations.counts.value": (v6/*: any*/),
        "saleArtworksConnection.aggregations.slice": {
          "enumValues": [
            "ARTIST",
            "FOLLOWED_ARTISTS",
            "MEDIUM",
            "TOTAL"
          ],
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkAggregation"
        },
        "saleArtworksConnection.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterSaleArtworksCounts"
        },
        "saleArtworksConnection.counts.followedArtists": (v7/*: any*/),
        "saleArtworksConnection.counts.total": (v7/*: any*/),
        "saleArtworksConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworkEdgeInterface"
        },
        "saleArtworksConnection.edges.__isNode": (v6/*: any*/),
        "saleArtworksConnection.edges.__typename": (v6/*: any*/),
        "saleArtworksConnection.edges.cursor": (v8/*: any*/),
        "saleArtworksConnection.edges.id": (v9/*: any*/),
        "saleArtworksConnection.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "saleArtworksConnection.edges.node.__typename": (v6/*: any*/),
        "saleArtworksConnection.edges.node.artistNames": (v8/*: any*/),
        "saleArtworksConnection.edges.node.date": (v8/*: any*/),
        "saleArtworksConnection.edges.node.href": (v8/*: any*/),
        "saleArtworksConnection.edges.node.id": (v9/*: any*/),
        "saleArtworksConnection.edges.node.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "saleArtworksConnection.edges.node.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "saleArtworksConnection.edges.node.image.height": (v10/*: any*/),
        "saleArtworksConnection.edges.node.image.small": (v8/*: any*/),
        "saleArtworksConnection.edges.node.image.url": (v8/*: any*/),
        "saleArtworksConnection.edges.node.image.width": (v10/*: any*/),
        "saleArtworksConnection.edges.node.internalID": (v9/*: any*/),
        "saleArtworksConnection.edges.node.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "saleArtworksConnection.edges.node.partner.id": (v9/*: any*/),
        "saleArtworksConnection.edges.node.partner.name": (v8/*: any*/),
        "saleArtworksConnection.edges.node.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "saleArtworksConnection.edges.node.sale.displayTimelyAt": (v8/*: any*/),
        "saleArtworksConnection.edges.node.sale.endAt": (v8/*: any*/),
        "saleArtworksConnection.edges.node.sale.id": (v9/*: any*/),
        "saleArtworksConnection.edges.node.sale.isAuction": (v11/*: any*/),
        "saleArtworksConnection.edges.node.sale.isClosed": (v11/*: any*/),
        "saleArtworksConnection.edges.node.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "saleArtworksConnection.edges.node.saleArtwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "saleArtworksConnection.edges.node.saleArtwork.counts.bidderPositions": (v7/*: any*/),
        "saleArtworksConnection.edges.node.saleArtwork.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "saleArtworksConnection.edges.node.saleArtwork.currentBid.display": (v8/*: any*/),
        "saleArtworksConnection.edges.node.saleArtwork.id": (v9/*: any*/),
        "saleArtworksConnection.edges.node.saleArtwork.lotLabel": (v8/*: any*/),
        "saleArtworksConnection.edges.node.saleMessage": (v8/*: any*/),
        "saleArtworksConnection.edges.node.slug": (v9/*: any*/),
        "saleArtworksConnection.edges.node.title": (v8/*: any*/),
        "saleArtworksConnection.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "saleArtworksConnection.pageInfo.endCursor": (v8/*: any*/),
        "saleArtworksConnection.pageInfo.hasNextPage": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Boolean"
        },
        "saleArtworksConnection.pageInfo.startCursor": (v8/*: any*/)
      }
    },
    "name": "SaleLotsListTestsQuery",
    "operationKind": "query",
    "text": "query SaleLotsListTestsQuery(\n  $saleSlug: ID!\n) {\n  ...SaleLotsList_saleArtworksConnection_4BVn5U\n}\n\nfragment ArtworkGridItem_artwork on Artwork {\n  title\n  date\n  saleMessage\n  slug\n  internalID\n  artistNames\n  href\n  sale {\n    isAuction\n    isClosed\n    displayTimelyAt\n    endAt\n    id\n  }\n  saleArtwork {\n    counts {\n      bidderPositions\n    }\n    currentBid {\n      display\n    }\n    lotLabel\n    id\n  }\n  partner {\n    name\n    id\n  }\n  image {\n    url(version: \"large\")\n    aspectRatio\n  }\n}\n\nfragment InfiniteScrollArtworksGrid_connection on ArtworkConnectionInterface {\n  __isArtworkConnectionInterface: __typename\n  pageInfo {\n    hasNextPage\n    startCursor\n    endCursor\n  }\n  edges {\n    __typename\n    node {\n      slug\n      id\n      image {\n        aspectRatio\n      }\n      ...ArtworkGridItem_artwork\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment SaleArtworkListItem_artwork on Artwork {\n  artistNames\n  date\n  href\n  image {\n    small: url(version: \"small\")\n    aspectRatio\n    height\n    width\n  }\n  saleMessage\n  slug\n  title\n  internalID\n  sale {\n    isAuction\n    isClosed\n    displayTimelyAt\n    endAt\n    id\n  }\n  saleArtwork {\n    counts {\n      bidderPositions\n    }\n    currentBid {\n      display\n    }\n    lotLabel\n    id\n  }\n}\n\nfragment SaleArtworkList_connection on ArtworkConnectionInterface {\n  __isArtworkConnectionInterface: __typename\n  edges {\n    __typename\n    node {\n      id\n      ...SaleArtworkListItem_artwork\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment SaleLotsList_saleArtworksConnection_4BVn5U on Query {\n  saleArtworksConnection(saleID: $saleSlug, artistIDs: [], geneIDs: [], aggregations: [FOLLOWED_ARTISTS, ARTIST, MEDIUM, TOTAL], estimateRange: \"\", first: 10, includeArtworksByFollowedArtists: false, sort: \"position\") {\n    aggregations {\n      slice\n      counts {\n        count\n        name\n        value\n      }\n    }\n    counts {\n      followedArtists\n      total\n    }\n    edges {\n      node {\n        id\n        __typename\n      }\n      cursor\n      id\n    }\n    ...SaleArtworkList_connection\n    ...InfiniteScrollArtworksGrid_connection\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e6caed406d12630149d100ea7a00770e";

export default node;
