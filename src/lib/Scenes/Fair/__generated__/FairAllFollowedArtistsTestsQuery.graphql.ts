/**
 * @generated SignedSource<<0586863d97575f7555d289f5f65e2344>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FairAllFollowedArtistsTestsQuery$variables = {
  fairID: string;
};
export type FairAllFollowedArtistsTestsQueryVariables = FairAllFollowedArtistsTestsQuery$variables;
export type FairAllFollowedArtistsTestsQuery$data = {
  readonly fair: {
    readonly " $fragmentSpreads": FragmentRefs<"FairAllFollowedArtists_fair">;
  } | null;
  readonly fairForFilters: {
    readonly " $fragmentSpreads": FragmentRefs<"FairAllFollowedArtists_fairForFilters">;
  } | null;
};
export type FairAllFollowedArtistsTestsQueryResponse = FairAllFollowedArtistsTestsQuery$data;
export type FairAllFollowedArtistsTestsQuery = {
  variables: FairAllFollowedArtistsTestsQueryVariables;
  response: FairAllFollowedArtistsTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "fairID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "fairID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "aggregations",
    "value": [
      "ARTIST",
      "ARTIST_NATIONALITY",
      "COLOR",
      "DIMENSION_RANGE",
      "FOLLOWED_ARTISTS",
      "LOCATION_CITY",
      "MAJOR_PERIOD",
      "MATERIALS_TERMS",
      "MEDIUM",
      "PARTNER",
      "PRICE_RANGE"
    ]
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 30
  },
  {
    "kind": "Literal",
    "name": "input",
    "value": {
      "includeArtworksByFollowedArtists": true,
      "sort": "-decayed_merch"
    }
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "ArtworksAggregationResults",
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
        (v5/*: any*/),
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
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "followedArtists",
  "storageKey": null
},
v10 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Fair"
},
v11 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "FilterArtworksConnection"
},
v12 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v13 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "ArtworksAggregationResults"
},
v14 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "AggregationCount"
},
v15 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Int"
},
v16 = {
  "enumValues": [
    "ARTIST",
    "ARTIST_NATIONALITY",
    "ATTRIBUTION_CLASS",
    "COLOR",
    "DIMENSION_RANGE",
    "FOLLOWED_ARTISTS",
    "GALLERY",
    "INSTITUTION",
    "LOCATION_CITY",
    "MAJOR_PERIOD",
    "MATERIALS_TERMS",
    "MEDIUM",
    "MERCHANDISABLE_ARTISTS",
    "PARTNER",
    "PARTNER_CITY",
    "PERIOD",
    "PRICE_RANGE",
    "TOTAL"
  ],
  "nullable": true,
  "plural": false,
  "type": "ArtworkAggregation"
},
v17 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "FilterArtworksCounts"
},
v18 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "FormattedNumber"
},
v19 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v20 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v21 = {
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
    "name": "FairAllFollowedArtistsTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Fair",
        "kind": "LinkedField",
        "name": "fair",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FairAllFollowedArtists_fair"
          }
        ],
        "storageKey": null
      },
      {
        "alias": "fairForFilters",
        "args": (v1/*: any*/),
        "concreteType": "Fair",
        "kind": "LinkedField",
        "name": "fair",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FairAllFollowedArtists_fairForFilters"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FairAllFollowedArtistsTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Fair",
        "kind": "LinkedField",
        "name": "fair",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": "fairArtworks",
            "args": (v4/*: any*/),
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "filterArtworksConnection",
            "plural": false,
            "selections": [
              (v6/*: any*/),
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
                  }
                ],
                "storageKey": null
              },
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
                  },
                  (v9/*: any*/)
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
              (v7/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
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
                  },
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
                          (v3/*: any*/),
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
                                "name": "aspectRatio",
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
                            "kind": "ScalarField",
                            "name": "saleMessage",
                            "storageKey": null
                          },
                          (v2/*: any*/),
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
                            "name": "href",
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
                              (v5/*: any*/),
                              (v7/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v7/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "type": "ArtworkConnectionInterface",
                "abstractKey": "__isArtworkConnectionInterface"
              }
            ],
            "storageKey": "filterArtworksConnection(aggregations:[\"ARTIST\",\"ARTIST_NATIONALITY\",\"COLOR\",\"DIMENSION_RANGE\",\"FOLLOWED_ARTISTS\",\"LOCATION_CITY\",\"MAJOR_PERIOD\",\"MATERIALS_TERMS\",\"MEDIUM\",\"PARTNER\",\"PRICE_RANGE\"],first:30,input:{\"includeArtworksByFollowedArtists\":true,\"sort\":\"-decayed_merch\"})"
          },
          {
            "alias": "fairArtworks",
            "args": (v4/*: any*/),
            "filters": [
              "aggregations",
              "input"
            ],
            "handle": "connection",
            "key": "Fair_fairArtworks",
            "kind": "LinkedHandle",
            "name": "filterArtworksConnection"
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "fairForFilters",
        "args": (v1/*: any*/),
        "concreteType": "Fair",
        "kind": "LinkedField",
        "name": "fair",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "aggregations",
                "value": [
                  "COLOR",
                  "DIMENSION_RANGE",
                  "PARTNER",
                  "MAJOR_PERIOD",
                  "MEDIUM",
                  "PRICE_RANGE",
                  "FOLLOWED_ARTISTS",
                  "ARTIST"
                ]
              },
              {
                "kind": "Literal",
                "name": "first",
                "value": 0
              }
            ],
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "filterArtworksConnection",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "FilterArtworksCounts",
                "kind": "LinkedField",
                "name": "counts",
                "plural": false,
                "selections": [
                  (v9/*: any*/)
                ],
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "storageKey": "filterArtworksConnection(aggregations:[\"COLOR\",\"DIMENSION_RANGE\",\"PARTNER\",\"MAJOR_PERIOD\",\"MEDIUM\",\"PRICE_RANGE\",\"FOLLOWED_ARTISTS\",\"ARTIST\"],first:0)"
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c68978f33c405c74b0cb111fc9828983",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "fair": (v10/*: any*/),
        "fair.fairArtworks": (v11/*: any*/),
        "fair.fairArtworks.__isArtworkConnectionInterface": (v12/*: any*/),
        "fair.fairArtworks.aggregations": (v13/*: any*/),
        "fair.fairArtworks.aggregations.counts": (v14/*: any*/),
        "fair.fairArtworks.aggregations.counts.count": (v15/*: any*/),
        "fair.fairArtworks.aggregations.counts.name": (v12/*: any*/),
        "fair.fairArtworks.aggregations.counts.value": (v12/*: any*/),
        "fair.fairArtworks.aggregations.slice": (v16/*: any*/),
        "fair.fairArtworks.counts": (v17/*: any*/),
        "fair.fairArtworks.counts.followedArtists": (v18/*: any*/),
        "fair.fairArtworks.counts.total": (v18/*: any*/),
        "fair.fairArtworks.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworkEdgeInterface"
        },
        "fair.fairArtworks.edges.__isNode": (v12/*: any*/),
        "fair.fairArtworks.edges.__typename": (v12/*: any*/),
        "fair.fairArtworks.edges.cursor": (v12/*: any*/),
        "fair.fairArtworks.edges.id": (v19/*: any*/),
        "fair.fairArtworks.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "fair.fairArtworks.edges.node.__typename": (v12/*: any*/),
        "fair.fairArtworks.edges.node.artistNames": (v20/*: any*/),
        "fair.fairArtworks.edges.node.date": (v20/*: any*/),
        "fair.fairArtworks.edges.node.href": (v20/*: any*/),
        "fair.fairArtworks.edges.node.id": (v19/*: any*/),
        "fair.fairArtworks.edges.node.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "fair.fairArtworks.edges.node.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "fair.fairArtworks.edges.node.image.url": (v20/*: any*/),
        "fair.fairArtworks.edges.node.internalID": (v19/*: any*/),
        "fair.fairArtworks.edges.node.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "fair.fairArtworks.edges.node.partner.id": (v19/*: any*/),
        "fair.fairArtworks.edges.node.partner.name": (v20/*: any*/),
        "fair.fairArtworks.edges.node.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "fair.fairArtworks.edges.node.sale.displayTimelyAt": (v20/*: any*/),
        "fair.fairArtworks.edges.node.sale.endAt": (v20/*: any*/),
        "fair.fairArtworks.edges.node.sale.id": (v19/*: any*/),
        "fair.fairArtworks.edges.node.sale.isAuction": (v21/*: any*/),
        "fair.fairArtworks.edges.node.sale.isClosed": (v21/*: any*/),
        "fair.fairArtworks.edges.node.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "fair.fairArtworks.edges.node.saleArtwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "fair.fairArtworks.edges.node.saleArtwork.counts.bidderPositions": (v18/*: any*/),
        "fair.fairArtworks.edges.node.saleArtwork.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "fair.fairArtworks.edges.node.saleArtwork.currentBid.display": (v20/*: any*/),
        "fair.fairArtworks.edges.node.saleArtwork.id": (v19/*: any*/),
        "fair.fairArtworks.edges.node.saleArtwork.lotLabel": (v20/*: any*/),
        "fair.fairArtworks.edges.node.saleMessage": (v20/*: any*/),
        "fair.fairArtworks.edges.node.slug": (v19/*: any*/),
        "fair.fairArtworks.edges.node.title": (v20/*: any*/),
        "fair.fairArtworks.id": (v19/*: any*/),
        "fair.fairArtworks.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "fair.fairArtworks.pageInfo.endCursor": (v20/*: any*/),
        "fair.fairArtworks.pageInfo.hasNextPage": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Boolean"
        },
        "fair.fairArtworks.pageInfo.startCursor": (v20/*: any*/),
        "fair.id": (v19/*: any*/),
        "fair.internalID": (v19/*: any*/),
        "fair.slug": (v19/*: any*/),
        "fairForFilters": (v10/*: any*/),
        "fairForFilters.filterArtworksConnection": (v11/*: any*/),
        "fairForFilters.filterArtworksConnection.aggregations": (v13/*: any*/),
        "fairForFilters.filterArtworksConnection.aggregations.counts": (v14/*: any*/),
        "fairForFilters.filterArtworksConnection.aggregations.counts.count": (v15/*: any*/),
        "fairForFilters.filterArtworksConnection.aggregations.counts.name": (v12/*: any*/),
        "fairForFilters.filterArtworksConnection.aggregations.counts.value": (v12/*: any*/),
        "fairForFilters.filterArtworksConnection.aggregations.slice": (v16/*: any*/),
        "fairForFilters.filterArtworksConnection.counts": (v17/*: any*/),
        "fairForFilters.filterArtworksConnection.counts.followedArtists": (v18/*: any*/),
        "fairForFilters.filterArtworksConnection.id": (v19/*: any*/),
        "fairForFilters.id": (v19/*: any*/)
      }
    },
    "name": "FairAllFollowedArtistsTestsQuery",
    "operationKind": "query",
    "text": "query FairAllFollowedArtistsTestsQuery(\n  $fairID: String!\n) {\n  fair(id: $fairID) {\n    ...FairAllFollowedArtists_fair\n    id\n  }\n  fairForFilters: fair(id: $fairID) {\n    ...FairAllFollowedArtists_fairForFilters\n    id\n  }\n}\n\nfragment ArtworkGridItem_artwork on Artwork {\n  title\n  date\n  saleMessage\n  slug\n  internalID\n  artistNames\n  href\n  sale {\n    isAuction\n    isClosed\n    displayTimelyAt\n    endAt\n    id\n  }\n  saleArtwork {\n    counts {\n      bidderPositions\n    }\n    currentBid {\n      display\n    }\n    lotLabel\n    id\n  }\n  partner {\n    name\n    id\n  }\n  image {\n    url(version: \"large\")\n    aspectRatio\n  }\n}\n\nfragment FairAllFollowedArtists_fair on Fair {\n  internalID\n  slug\n  ...FairArtworks_fair_26N2Rt\n}\n\nfragment FairAllFollowedArtists_fairForFilters on Fair {\n  filterArtworksConnection(first: 0, aggregations: [COLOR, DIMENSION_RANGE, PARTNER, MAJOR_PERIOD, MEDIUM, PRICE_RANGE, FOLLOWED_ARTISTS, ARTIST]) {\n    aggregations {\n      slice\n      counts {\n        count\n        name\n        value\n      }\n    }\n    counts {\n      followedArtists\n    }\n    id\n  }\n}\n\nfragment FairArtworks_fair_26N2Rt on Fair {\n  slug\n  internalID\n  fairArtworks: filterArtworksConnection(first: 30, aggregations: [ARTIST, ARTIST_NATIONALITY, COLOR, DIMENSION_RANGE, FOLLOWED_ARTISTS, LOCATION_CITY, MAJOR_PERIOD, MATERIALS_TERMS, MEDIUM, PARTNER, PRICE_RANGE], input: {includeArtworksByFollowedArtists: true, sort: \"-decayed_merch\"}) {\n    aggregations {\n      slice\n      counts {\n        count\n        name\n        value\n      }\n    }\n    edges {\n      node {\n        id\n        __typename\n      }\n      cursor\n    }\n    counts {\n      total\n      followedArtists\n    }\n    ...InfiniteScrollArtworksGrid_connection\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n    id\n  }\n}\n\nfragment InfiniteScrollArtworksGrid_connection on ArtworkConnectionInterface {\n  __isArtworkConnectionInterface: __typename\n  pageInfo {\n    hasNextPage\n    startCursor\n    endCursor\n  }\n  edges {\n    __typename\n    node {\n      slug\n      id\n      image {\n        aspectRatio\n      }\n      ...ArtworkGridItem_artwork\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "dcf6037aa5312eba178640a2be04ca3d";

export default node;
