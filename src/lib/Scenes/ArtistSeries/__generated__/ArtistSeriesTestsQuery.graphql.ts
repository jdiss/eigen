/**
 * @generated SignedSource<<434253d526ea3144b2bb0a76b7bb3594>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistSeriesTestsQuery$variables = {};
export type ArtistSeriesTestsQueryVariables = ArtistSeriesTestsQuery$variables;
export type ArtistSeriesTestsQuery$data = {
  readonly artistSeries: {
    readonly " $fragmentSpreads": FragmentRefs<"ArtistSeries_artistSeries">;
  } | null;
};
export type ArtistSeriesTestsQueryResponse = ArtistSeriesTestsQuery$data;
export type ArtistSeriesTestsQuery = {
  variables: ArtistSeriesTestsQueryVariables;
  response: ArtistSeriesTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "pumpkins"
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "size",
    "value": 1
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = [
  {
    "kind": "Literal",
    "name": "aggregations",
    "value": [
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
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v10 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "ArtistSeries"
},
v11 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "Artist"
},
v12 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v13 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
},
v14 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v15 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v16 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v17 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Int"
},
v18 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "FormattedNumber"
},
v19 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtistSeriesTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ArtistSeries",
        "kind": "LinkedField",
        "name": "artistSeries",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtistSeries_artistSeries"
          }
        ],
        "storageKey": "artistSeries(id:\"pumpkins\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ArtistSeriesTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ArtistSeries",
        "kind": "LinkedField",
        "name": "artistSeries",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "artistIDs",
            "storageKey": null
          },
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v5/*: any*/),
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artists",
            "plural": true,
            "selections": [
              (v6/*: any*/),
              (v1/*: any*/),
              (v7/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isFollowed",
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": "artists(size:1)"
          },
          {
            "alias": "artistSeriesArtworks",
            "args": (v8/*: any*/),
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "filterArtworksConnection",
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
                        "name": "count",
                        "storageKey": null
                      },
                      (v7/*: any*/),
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
                      (v6/*: any*/),
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
              (v6/*: any*/),
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
                          (v4/*: any*/),
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
                          (v1/*: any*/),
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
                              (v6/*: any*/)
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
                              (v6/*: any*/)
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
                              (v7/*: any*/),
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v6/*: any*/)
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
            "storageKey": "filterArtworksConnection(aggregations:[\"COLOR\",\"DIMENSION_RANGE\",\"LOCATION_CITY\",\"MAJOR_PERIOD\",\"MATERIALS_TERMS\",\"MEDIUM\",\"PARTNER\",\"PRICE_RANGE\"],first:20,input:{\"sort\":\"-decayed_merch\"})"
          },
          {
            "alias": "artistSeriesArtworks",
            "args": (v8/*: any*/),
            "filters": [
              "aggregations",
              "input"
            ],
            "handle": "connection",
            "key": "ArtistSeries_artistSeriesArtworks",
            "kind": "LinkedHandle",
            "name": "filterArtworksConnection"
          },
          {
            "alias": "artist",
            "args": (v5/*: any*/),
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artists",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 4
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
                    "kind": "ScalarField",
                    "name": "totalCount",
                    "storageKey": null
                  },
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
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "featured",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "artworksCountMessage",
                            "storageKey": null
                          },
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "artistSeriesConnection(first:4)"
              },
              (v6/*: any*/)
            ],
            "storageKey": "artists(size:1)"
          }
        ],
        "storageKey": "artistSeries(id:\"pumpkins\")"
      }
    ]
  },
  "params": {
    "cacheID": "a3e753c735173c3977459f118df6eeff",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artistSeries": (v10/*: any*/),
        "artistSeries.artist": (v11/*: any*/),
        "artistSeries.artist.artistSeriesConnection": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "ArtistSeriesConnection"
        },
        "artistSeries.artist.artistSeriesConnection.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtistSeriesEdge"
        },
        "artistSeries.artist.artistSeriesConnection.edges.node": (v10/*: any*/),
        "artistSeries.artist.artistSeriesConnection.edges.node.artworksCountMessage": (v12/*: any*/),
        "artistSeries.artist.artistSeriesConnection.edges.node.featured": (v13/*: any*/),
        "artistSeries.artist.artistSeriesConnection.edges.node.image": (v14/*: any*/),
        "artistSeries.artist.artistSeriesConnection.edges.node.image.url": (v12/*: any*/),
        "artistSeries.artist.artistSeriesConnection.edges.node.internalID": (v15/*: any*/),
        "artistSeries.artist.artistSeriesConnection.edges.node.slug": (v16/*: any*/),
        "artistSeries.artist.artistSeriesConnection.edges.node.title": (v16/*: any*/),
        "artistSeries.artist.artistSeriesConnection.totalCount": (v17/*: any*/),
        "artistSeries.artist.id": (v15/*: any*/),
        "artistSeries.artist.internalID": (v15/*: any*/),
        "artistSeries.artist.slug": (v15/*: any*/),
        "artistSeries.artistIDs": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "String"
        },
        "artistSeries.artistSeriesArtworks": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterArtworksConnection"
        },
        "artistSeries.artistSeriesArtworks.__isArtworkConnectionInterface": (v16/*: any*/),
        "artistSeries.artistSeriesArtworks.aggregations": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworksAggregationResults"
        },
        "artistSeries.artistSeriesArtworks.aggregations.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "AggregationCount"
        },
        "artistSeries.artistSeriesArtworks.aggregations.counts.count": (v17/*: any*/),
        "artistSeries.artistSeriesArtworks.aggregations.counts.name": (v16/*: any*/),
        "artistSeries.artistSeriesArtworks.aggregations.counts.value": (v16/*: any*/),
        "artistSeries.artistSeriesArtworks.aggregations.slice": {
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
        "artistSeries.artistSeriesArtworks.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterArtworksCounts"
        },
        "artistSeries.artistSeriesArtworks.counts.total": (v18/*: any*/),
        "artistSeries.artistSeriesArtworks.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworkEdgeInterface"
        },
        "artistSeries.artistSeriesArtworks.edges.__isNode": (v16/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.__typename": (v16/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.cursor": (v16/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.id": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "artistSeries.artistSeriesArtworks.edges.node.__typename": (v16/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.artistNames": (v12/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.date": (v12/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.href": (v12/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.id": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.image": (v14/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "artistSeries.artistSeriesArtworks.edges.node.image.url": (v12/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.internalID": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "artistSeries.artistSeriesArtworks.edges.node.partner.id": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.partner.name": (v12/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "artistSeries.artistSeriesArtworks.edges.node.sale.displayTimelyAt": (v12/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.sale.endAt": (v12/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.sale.id": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.sale.isAuction": (v19/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.sale.isClosed": (v19/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "artistSeries.artistSeriesArtworks.edges.node.saleArtwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "artistSeries.artistSeriesArtworks.edges.node.saleArtwork.counts.bidderPositions": (v18/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.saleArtwork.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "artistSeries.artistSeriesArtworks.edges.node.saleArtwork.currentBid.display": (v12/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.saleArtwork.id": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.saleArtwork.lotLabel": (v12/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.saleMessage": (v12/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.slug": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.edges.node.title": (v12/*: any*/),
        "artistSeries.artistSeriesArtworks.id": (v15/*: any*/),
        "artistSeries.artistSeriesArtworks.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "artistSeries.artistSeriesArtworks.pageInfo.endCursor": (v12/*: any*/),
        "artistSeries.artistSeriesArtworks.pageInfo.hasNextPage": (v13/*: any*/),
        "artistSeries.artistSeriesArtworks.pageInfo.startCursor": (v12/*: any*/),
        "artistSeries.artists": (v11/*: any*/),
        "artistSeries.artists.id": (v15/*: any*/),
        "artistSeries.artists.image": (v14/*: any*/),
        "artistSeries.artists.image.url": (v12/*: any*/),
        "artistSeries.artists.internalID": (v15/*: any*/),
        "artistSeries.artists.isFollowed": (v19/*: any*/),
        "artistSeries.artists.name": (v12/*: any*/),
        "artistSeries.artists.slug": (v15/*: any*/),
        "artistSeries.description": (v12/*: any*/),
        "artistSeries.image": (v14/*: any*/),
        "artistSeries.image.url": (v12/*: any*/),
        "artistSeries.internalID": (v15/*: any*/),
        "artistSeries.slug": (v16/*: any*/),
        "artistSeries.title": (v16/*: any*/)
      }
    },
    "name": "ArtistSeriesTestsQuery",
    "operationKind": "query",
    "text": "query ArtistSeriesTestsQuery {\n  artistSeries(id: \"pumpkins\") {\n    ...ArtistSeries_artistSeries\n  }\n}\n\nfragment ArtistSeriesArtworks_artistSeries_ZORN9 on ArtistSeries {\n  slug\n  internalID\n  artistSeriesArtworks: filterArtworksConnection(first: 20, aggregations: [COLOR, DIMENSION_RANGE, LOCATION_CITY, MAJOR_PERIOD, MATERIALS_TERMS, MEDIUM, PARTNER, PRICE_RANGE], input: {sort: \"-decayed_merch\"}) {\n    aggregations {\n      slice\n      counts {\n        count\n        name\n        value\n      }\n    }\n    edges {\n      node {\n        id\n        __typename\n      }\n      cursor\n    }\n    counts {\n      total\n    }\n    ...InfiniteScrollArtworksGrid_connection\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n    id\n  }\n}\n\nfragment ArtistSeriesHeader_artistSeries on ArtistSeries {\n  image {\n    url\n  }\n}\n\nfragment ArtistSeriesMeta_artistSeries on ArtistSeries {\n  internalID\n  slug\n  title\n  description\n  artists(size: 1) {\n    id\n    internalID\n    name\n    slug\n    isFollowed\n    image {\n      url\n    }\n  }\n}\n\nfragment ArtistSeriesMoreSeries_artist on Artist {\n  internalID\n  slug\n  artistSeriesConnection(first: 4) {\n    totalCount\n    edges {\n      node {\n        slug\n        internalID\n        title\n        featured\n        artworksCountMessage\n        image {\n          url\n        }\n      }\n    }\n  }\n}\n\nfragment ArtistSeries_artistSeries on ArtistSeries {\n  internalID\n  slug\n  artistIDs\n  ...ArtistSeriesHeader_artistSeries\n  ...ArtistSeriesMeta_artistSeries\n  ...ArtistSeriesArtworks_artistSeries_ZORN9\n  artist: artists(size: 1) {\n    ...ArtistSeriesMoreSeries_artist\n    artistSeriesConnection(first: 4) {\n      totalCount\n    }\n    id\n  }\n}\n\nfragment ArtworkGridItem_artwork on Artwork {\n  title\n  date\n  saleMessage\n  slug\n  internalID\n  artistNames\n  href\n  sale {\n    isAuction\n    isClosed\n    displayTimelyAt\n    endAt\n    id\n  }\n  saleArtwork {\n    counts {\n      bidderPositions\n    }\n    currentBid {\n      display\n    }\n    lotLabel\n    id\n  }\n  partner {\n    name\n    id\n  }\n  image {\n    url(version: \"large\")\n    aspectRatio\n  }\n}\n\nfragment InfiniteScrollArtworksGrid_connection on ArtworkConnectionInterface {\n  __isArtworkConnectionInterface: __typename\n  pageInfo {\n    hasNextPage\n    startCursor\n    endCursor\n  }\n  edges {\n    __typename\n    node {\n      slug\n      id\n      image {\n        aspectRatio\n      }\n      ...ArtworkGridItem_artwork\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8ed97d99428439041a0238da09bbc06e";

export default node;
