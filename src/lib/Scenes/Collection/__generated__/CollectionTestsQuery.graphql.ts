/**
 * @generated SignedSource<<700c85c2d38ef26f119acca551487241>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CollectionTestsQuery$variables = {};
export type CollectionTestsQueryVariables = CollectionTestsQuery$variables;
export type CollectionTestsQuery$data = {
  readonly marketingCollection: {
    readonly " $fragmentSpreads": FragmentRefs<"Collection_collection">;
  } | null;
};
export type CollectionTestsQueryResponse = CollectionTestsQuery$data;
export type CollectionTestsQuery = {
  variables: CollectionTestsQueryVariables;
  response: CollectionTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "slug",
    "value": "doesn't matter"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "descriptionMarkdown",
  "storageKey": null
},
v5 = {
  "kind": "Literal",
  "name": "first",
  "value": 1
},
v6 = {
  "kind": "Literal",
  "name": "sort",
  "value": "-decayed_merch"
},
v7 = [
  {
    "kind": "Literal",
    "name": "aggregations",
    "value": [
      "ARTIST",
      "ARTIST_NATIONALITY",
      "COLOR",
      "DIMENSION_RANGE",
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
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "input",
    "value": {
      "sort": "-decayed_merch"
    }
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v12 = {
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
v13 = {
  "kind": "Literal",
  "name": "aggregations",
  "value": [
    "TOTAL"
  ]
},
v14 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "FilterArtworksConnection"
},
v15 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v16 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v17 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v18 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v19 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v20 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "FormattedNumber"
},
v21 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Artwork"
},
v22 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
},
v23 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "String"
},
v24 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "FilterArtworksEdge"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CollectionTestsQuery",
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
            "name": "Collection_collection"
          }
        ],
        "storageKey": "marketingCollection(slug:\"doesn't matter\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CollectionTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "MarketingCollection",
        "kind": "LinkedField",
        "name": "marketingCollection",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isDepartment",
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "headerImage",
            "storageKey": null
          },
          (v4/*: any*/),
          {
            "alias": "image",
            "args": [
              (v5/*: any*/),
              (v6/*: any*/)
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
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "version",
                                "value": "larger"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "url",
                            "storageKey": "url(version:\"larger\")"
                          }
                        ],
                        "storageKey": null
                      },
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": "artworksConnection(first:1,sort:\"-decayed_merch\")"
          },
          {
            "alias": "collectionArtworks",
            "args": (v7/*: any*/),
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "artworksConnection",
            "plural": false,
            "selections": [
              {
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
                        "name": "value",
                        "storageKey": null
                      },
                      (v8/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "count",
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
                      (v1/*: any*/),
                      (v9/*: any*/)
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
              (v1/*: any*/),
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
                      (v9/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artwork",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
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
                          (v3/*: any*/),
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
                          (v10/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "artistNames",
                            "storageKey": null
                          },
                          (v11/*: any*/),
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
                              (v1/*: any*/)
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
                              (v1/*: any*/)
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
                              (v8/*: any*/),
                              (v1/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v1/*: any*/)
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
            "storageKey": "artworksConnection(aggregations:[\"ARTIST\",\"ARTIST_NATIONALITY\",\"COLOR\",\"DIMENSION_RANGE\",\"LOCATION_CITY\",\"MAJOR_PERIOD\",\"MATERIALS_TERMS\",\"MEDIUM\",\"PARTNER\",\"PRICE_RANGE\"],first:10,input:{\"sort\":\"-decayed_merch\"})"
          },
          {
            "alias": "collectionArtworks",
            "args": (v7/*: any*/),
            "filters": [
              "aggregations",
              "input"
            ],
            "handle": "connection",
            "key": "Collection_collectionArtworks",
            "kind": "LinkedHandle",
            "name": "artworksConnection"
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "aggregations",
                "value": [
                  "MERCHANDISABLE_ARTISTS"
                ]
              },
              {
                "kind": "Literal",
                "name": "size",
                "value": 0
              },
              (v6/*: any*/)
            ],
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "artworksConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "size",
                    "value": 4
                  }
                ],
                "concreteType": "Artist",
                "kind": "LinkedField",
                "name": "merchandisableArtists",
                "plural": true,
                "selections": [
                  (v10/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "initials",
                    "storageKey": null
                  },
                  (v11/*: any*/),
                  {
                    "alias": "is_followed",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isFollowed",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "nationality",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "birthday",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "deathday",
                    "storageKey": null
                  },
                  (v12/*: any*/)
                ],
                "storageKey": "merchandisableArtists(size:4)"
              },
              (v1/*: any*/)
            ],
            "storageKey": "artworksConnection(aggregations:[\"MERCHANDISABLE_ARTISTS\"],size:0,sort:\"-decayed_merch\")"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "MarketingCollectionQuery",
            "kind": "LinkedField",
            "name": "query",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "artistIDs",
                "storageKey": null
              },
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "featuredArtistExclusionIds",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "MarketingCollectionGroup",
            "kind": "LinkedField",
            "name": "linkedCollections",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "groupType",
                "storageKey": null
              },
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "MarketingCollection",
                "kind": "LinkedField",
                "name": "members",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v1/*: any*/),
                  (v3/*: any*/),
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
                      (v13/*: any*/),
                      {
                        "kind": "Literal",
                        "name": "first",
                        "value": 3
                      },
                      (v6/*: any*/)
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
                              (v3/*: any*/),
                              (v12/*: any*/),
                              (v1/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v1/*: any*/)
                    ],
                    "storageKey": "artworksConnection(aggregations:[\"TOTAL\"],first:3,sort:\"-decayed_merch\")"
                  },
                  (v4/*: any*/),
                  {
                    "alias": "featuredCollectionArtworks",
                    "args": [
                      (v13/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/)
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
                              (v12/*: any*/),
                              (v1/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v1/*: any*/)
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
        "storageKey": "marketingCollection(slug:\"doesn't matter\")"
      }
    ]
  },
  "params": {
    "cacheID": "de9cb7a3bbbf848f8875419a2f8d9a99",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "marketingCollection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "MarketingCollection"
        },
        "marketingCollection.artworksConnection": (v14/*: any*/),
        "marketingCollection.artworksConnection.id": (v15/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Artist"
        },
        "marketingCollection.artworksConnection.merchandisableArtists.birthday": (v16/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.deathday": (v16/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.href": (v16/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.id": (v15/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.image": (v17/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.image.url": (v16/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.initials": (v16/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.internalID": (v15/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.is_followed": (v18/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.name": (v16/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.nationality": (v16/*: any*/),
        "marketingCollection.artworksConnection.merchandisableArtists.slug": (v15/*: any*/),
        "marketingCollection.collectionArtworks": (v14/*: any*/),
        "marketingCollection.collectionArtworks.__isArtworkConnectionInterface": (v19/*: any*/),
        "marketingCollection.collectionArtworks.aggregations": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworksAggregationResults"
        },
        "marketingCollection.collectionArtworks.aggregations.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "AggregationCount"
        },
        "marketingCollection.collectionArtworks.aggregations.counts.count": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Int"
        },
        "marketingCollection.collectionArtworks.aggregations.counts.name": (v19/*: any*/),
        "marketingCollection.collectionArtworks.aggregations.counts.value": (v19/*: any*/),
        "marketingCollection.collectionArtworks.aggregations.slice": {
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
        "marketingCollection.collectionArtworks.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterArtworksCounts"
        },
        "marketingCollection.collectionArtworks.counts.total": (v20/*: any*/),
        "marketingCollection.collectionArtworks.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworkEdgeInterface"
        },
        "marketingCollection.collectionArtworks.edges.__isNode": (v19/*: any*/),
        "marketingCollection.collectionArtworks.edges.__typename": (v19/*: any*/),
        "marketingCollection.collectionArtworks.edges.cursor": (v19/*: any*/),
        "marketingCollection.collectionArtworks.edges.id": (v15/*: any*/),
        "marketingCollection.collectionArtworks.edges.node": (v21/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.__typename": (v19/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.artistNames": (v16/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.date": (v16/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.href": (v16/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.id": (v15/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.image": (v17/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "marketingCollection.collectionArtworks.edges.node.image.url": (v16/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.internalID": (v15/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "marketingCollection.collectionArtworks.edges.node.partner.id": (v15/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.partner.name": (v16/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "marketingCollection.collectionArtworks.edges.node.sale.displayTimelyAt": (v16/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.sale.endAt": (v16/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.sale.id": (v15/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.sale.isAuction": (v18/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.sale.isClosed": (v18/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "marketingCollection.collectionArtworks.edges.node.saleArtwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "marketingCollection.collectionArtworks.edges.node.saleArtwork.counts.bidderPositions": (v20/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.saleArtwork.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "marketingCollection.collectionArtworks.edges.node.saleArtwork.currentBid.display": (v16/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.saleArtwork.id": (v15/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.saleArtwork.lotLabel": (v16/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.saleMessage": (v16/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.slug": (v15/*: any*/),
        "marketingCollection.collectionArtworks.edges.node.title": (v16/*: any*/),
        "marketingCollection.collectionArtworks.id": (v15/*: any*/),
        "marketingCollection.collectionArtworks.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "marketingCollection.collectionArtworks.pageInfo.endCursor": (v16/*: any*/),
        "marketingCollection.collectionArtworks.pageInfo.hasNextPage": (v22/*: any*/),
        "marketingCollection.collectionArtworks.pageInfo.startCursor": (v16/*: any*/),
        "marketingCollection.descriptionMarkdown": (v16/*: any*/),
        "marketingCollection.featuredArtistExclusionIds": (v23/*: any*/),
        "marketingCollection.headerImage": (v16/*: any*/),
        "marketingCollection.id": (v15/*: any*/),
        "marketingCollection.image": (v14/*: any*/),
        "marketingCollection.image.edges": (v24/*: any*/),
        "marketingCollection.image.edges.node": (v21/*: any*/),
        "marketingCollection.image.edges.node.id": (v15/*: any*/),
        "marketingCollection.image.edges.node.image": (v17/*: any*/),
        "marketingCollection.image.edges.node.image.url": (v16/*: any*/),
        "marketingCollection.image.id": (v15/*: any*/),
        "marketingCollection.isDepartment": (v22/*: any*/),
        "marketingCollection.linkedCollections": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "MarketingCollectionGroup"
        },
        "marketingCollection.linkedCollections.groupType": {
          "enumValues": [
            "ArtistSeries",
            "FeaturedCollections",
            "OtherCollections"
          ],
          "nullable": false,
          "plural": false,
          "type": "MarketingGroupTypes"
        },
        "marketingCollection.linkedCollections.members": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "MarketingCollection"
        },
        "marketingCollection.linkedCollections.members.artworksConnection": (v14/*: any*/),
        "marketingCollection.linkedCollections.members.artworksConnection.edges": (v24/*: any*/),
        "marketingCollection.linkedCollections.members.artworksConnection.edges.node": (v21/*: any*/),
        "marketingCollection.linkedCollections.members.artworksConnection.edges.node.id": (v15/*: any*/),
        "marketingCollection.linkedCollections.members.artworksConnection.edges.node.image": (v17/*: any*/),
        "marketingCollection.linkedCollections.members.artworksConnection.edges.node.image.url": (v16/*: any*/),
        "marketingCollection.linkedCollections.members.artworksConnection.edges.node.title": (v16/*: any*/),
        "marketingCollection.linkedCollections.members.artworksConnection.id": (v15/*: any*/),
        "marketingCollection.linkedCollections.members.descriptionMarkdown": (v16/*: any*/),
        "marketingCollection.linkedCollections.members.featuredCollectionArtworks": (v14/*: any*/),
        "marketingCollection.linkedCollections.members.featuredCollectionArtworks.edges": (v24/*: any*/),
        "marketingCollection.linkedCollections.members.featuredCollectionArtworks.edges.node": (v21/*: any*/),
        "marketingCollection.linkedCollections.members.featuredCollectionArtworks.edges.node.id": (v15/*: any*/),
        "marketingCollection.linkedCollections.members.featuredCollectionArtworks.edges.node.image": (v17/*: any*/),
        "marketingCollection.linkedCollections.members.featuredCollectionArtworks.edges.node.image.url": (v16/*: any*/),
        "marketingCollection.linkedCollections.members.featuredCollectionArtworks.id": (v15/*: any*/),
        "marketingCollection.linkedCollections.members.id": (v15/*: any*/),
        "marketingCollection.linkedCollections.members.priceGuidance": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Float"
        },
        "marketingCollection.linkedCollections.members.slug": (v19/*: any*/),
        "marketingCollection.linkedCollections.members.title": (v19/*: any*/),
        "marketingCollection.linkedCollections.name": (v19/*: any*/),
        "marketingCollection.query": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "MarketingCollectionQuery"
        },
        "marketingCollection.query.artistIDs": (v23/*: any*/),
        "marketingCollection.query.id": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ID"
        },
        "marketingCollection.slug": (v19/*: any*/),
        "marketingCollection.title": (v19/*: any*/)
      }
    },
    "name": "CollectionTestsQuery",
    "operationKind": "query",
    "text": "query CollectionTestsQuery {\n  marketingCollection(slug: \"doesn't matter\") {\n    ...Collection_collection\n    id\n  }\n}\n\nfragment ArtistListItem_artist on Artist {\n  id\n  internalID\n  slug\n  name\n  initials\n  href\n  is_followed: isFollowed\n  nationality\n  birthday\n  deathday\n  image {\n    url\n  }\n}\n\nfragment ArtworkGridItem_artwork on Artwork {\n  title\n  date\n  saleMessage\n  slug\n  internalID\n  artistNames\n  href\n  sale {\n    isAuction\n    isClosed\n    displayTimelyAt\n    endAt\n    id\n  }\n  saleArtwork {\n    counts {\n      bidderPositions\n    }\n    currentBid {\n      display\n    }\n    lotLabel\n    id\n  }\n  partner {\n    name\n    id\n  }\n  image {\n    url(version: \"large\")\n    aspectRatio\n  }\n}\n\nfragment CollectionArtistSeriesRail_collection on MarketingCollection {\n  slug\n  id\n}\n\nfragment CollectionArtistSeriesRail_collectionGroup on MarketingCollectionGroup {\n  name\n  members {\n    slug\n    id\n    title\n    priceGuidance\n    artworksConnection(first: 3, aggregations: [TOTAL], sort: \"-decayed_merch\") {\n      edges {\n        node {\n          title\n          image {\n            url\n          }\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CollectionArtworksFilter_collection on MarketingCollection {\n  slug\n  id\n}\n\nfragment CollectionArtworks_collection_ZORN9 on MarketingCollection {\n  isDepartment\n  slug\n  id\n  collectionArtworks: artworksConnection(first: 10, aggregations: [ARTIST, ARTIST_NATIONALITY, COLOR, DIMENSION_RANGE, LOCATION_CITY, MAJOR_PERIOD, MATERIALS_TERMS, MEDIUM, PARTNER, PRICE_RANGE], input: {sort: \"-decayed_merch\"}) {\n    aggregations {\n      slice\n      counts {\n        value\n        name\n        count\n      }\n    }\n    counts {\n      total\n    }\n    edges {\n      node {\n        id\n        __typename\n      }\n      cursor\n    }\n    ...InfiniteScrollArtworksGrid_connection\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n    id\n  }\n}\n\nfragment CollectionHeader_collection on MarketingCollection {\n  title\n  headerImage\n  descriptionMarkdown\n  image: artworksConnection(sort: \"-decayed_merch\", first: 1) {\n    edges {\n      node {\n        image {\n          url(version: \"larger\")\n        }\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CollectionHubsRails_collection on MarketingCollection {\n  ...CollectionArtistSeriesRail_collection\n  ...FeaturedCollectionsRail_collection\n}\n\nfragment CollectionHubsRails_linkedCollections on MarketingCollectionGroup {\n  groupType\n  ...CollectionArtistSeriesRail_collectionGroup\n  ...OtherCollectionsRail_collectionGroup\n  ...FeaturedCollectionsRail_collectionGroup\n}\n\nfragment Collection_collection on MarketingCollection {\n  id\n  slug\n  isDepartment\n  ...CollectionHeader_collection\n  ...CollectionArtworks_collection_ZORN9\n  ...CollectionArtworksFilter_collection\n  ...FeaturedArtists_collection\n  ...CollectionHubsRails_collection\n  linkedCollections {\n    ...CollectionHubsRails_linkedCollections\n  }\n}\n\nfragment FeaturedArtists_collection on MarketingCollection {\n  slug\n  artworksConnection(aggregations: [MERCHANDISABLE_ARTISTS], size: 0, sort: \"-decayed_merch\") {\n    merchandisableArtists(size: 4) {\n      internalID\n      ...ArtistListItem_artist\n      id\n    }\n    id\n  }\n  query {\n    artistIDs\n    id\n  }\n  featuredArtistExclusionIds\n}\n\nfragment FeaturedCollectionsRail_collection on MarketingCollection {\n  slug\n  id\n}\n\nfragment FeaturedCollectionsRail_collectionGroup on MarketingCollectionGroup {\n  name\n  members {\n    slug\n    id\n    title\n    priceGuidance\n    descriptionMarkdown\n    featuredCollectionArtworks: artworksConnection(first: 1, aggregations: [TOTAL], sort: \"-decayed_merch\") {\n      edges {\n        node {\n          image {\n            url\n          }\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment InfiniteScrollArtworksGrid_connection on ArtworkConnectionInterface {\n  __isArtworkConnectionInterface: __typename\n  pageInfo {\n    hasNextPage\n    startCursor\n    endCursor\n  }\n  edges {\n    __typename\n    node {\n      slug\n      id\n      image {\n        aspectRatio\n      }\n      ...ArtworkGridItem_artwork\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment OtherCollectionsRail_collectionGroup on MarketingCollectionGroup {\n  groupType\n  name\n  members {\n    id\n    slug\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "fbe5831179fb6d1e2f66b7360c128d63";

export default node;
