/**
 * @generated SignedSource<<2a63ef68ced1bdd30989ad727a5af3a6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkAggregation = "ARTIST" | "ARTIST_NATIONALITY" | "ATTRIBUTION_CLASS" | "COLOR" | "DIMENSION_RANGE" | "FOLLOWED_ARTISTS" | "GALLERY" | "INSTITUTION" | "LOCATION_CITY" | "MAJOR_PERIOD" | "MATERIALS_TERMS" | "MEDIUM" | "MERCHANDISABLE_ARTISTS" | "PARTNER" | "PARTNER_CITY" | "PERIOD" | "PRICE_RANGE" | "TOTAL" | "%future added value";
export type ArtworkSizes = "LARGE" | "MEDIUM" | "SMALL" | "%future added value";
export type FilterArtworksInput = {
  acquireable?: boolean | null;
  additionalGeneIDs?: ReadonlyArray<string | null> | null;
  after?: string | null;
  aggregationPartnerCities?: ReadonlyArray<string | null> | null;
  aggregations?: ReadonlyArray<ArtworkAggregation | null> | null;
  artistID?: string | null;
  artistIDs?: ReadonlyArray<string | null> | null;
  artistNationalities?: ReadonlyArray<string | null> | null;
  artistSeriesID?: string | null;
  atAuction?: boolean | null;
  attributionClass?: ReadonlyArray<string | null> | null;
  before?: string | null;
  color?: string | null;
  colors?: ReadonlyArray<string | null> | null;
  dimensionRange?: string | null;
  excludeArtworkIDs?: ReadonlyArray<string | null> | null;
  extraAggregationGeneIDs?: ReadonlyArray<string | null> | null;
  first?: number | null;
  forSale?: boolean | null;
  geneID?: string | null;
  geneIDs?: ReadonlyArray<string | null> | null;
  height?: string | null;
  includeArtworksByFollowedArtists?: boolean | null;
  includeMediumFilterInAggregation?: boolean | null;
  inquireableOnly?: boolean | null;
  keyword?: string | null;
  keywordMatchExact?: boolean | null;
  last?: number | null;
  locationCities?: ReadonlyArray<string | null> | null;
  majorPeriods?: ReadonlyArray<string | null> | null;
  marketable?: boolean | null;
  materialsTerms?: ReadonlyArray<string | null> | null;
  medium?: string | null;
  offerable?: boolean | null;
  page?: number | null;
  partnerCities?: ReadonlyArray<string | null> | null;
  partnerID?: string | null;
  partnerIDs?: ReadonlyArray<string | null> | null;
  period?: string | null;
  periods?: ReadonlyArray<string | null> | null;
  priceRange?: string | null;
  saleID?: string | null;
  size?: number | null;
  sizes?: ReadonlyArray<ArtworkSizes | null> | null;
  sort?: string | null;
  tagID?: string | null;
  width?: string | null;
};
export type TagArtworksTestsQuery$variables = {
  tagID: string;
  input?: FilterArtworksInput | null;
};
export type TagArtworksTestsQueryVariables = TagArtworksTestsQuery$variables;
export type TagArtworksTestsQuery$data = {
  readonly tag: {
    readonly " $fragmentSpreads": FragmentRefs<"TagArtworks_tag">;
  } | null;
};
export type TagArtworksTestsQueryResponse = TagArtworksTestsQuery$data;
export type TagArtworksTestsQuery = {
  variables: TagArtworksTestsQueryVariables;
  response: TagArtworksTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "tagID"
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "tagID"
  }
],
v3 = {
  "kind": "Variable",
  "name": "input",
  "variableName": "input"
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
  "name": "internalID",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v7 = [
  {
    "kind": "Literal",
    "name": "after",
    "value": ""
  },
  {
    "kind": "Literal",
    "name": "aggregations",
    "value": [
      "LOCATION_CITY",
      "ARTIST_NATIONALITY",
      "PRICE_RANGE",
      "COLOR",
      "DIMENSION_RANGE",
      "PARTNER",
      "MAJOR_PERIOD",
      "MEDIUM",
      "PRICE_RANGE",
      "ARTIST",
      "LOCATION_CITY",
      "MATERIALS_TERMS"
    ]
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  (v3/*: any*/)
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
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v11 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "FormattedNumber"
},
v12 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v13 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v14 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TagArtworksTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Tag",
        "kind": "LinkedField",
        "name": "tag",
        "plural": false,
        "selections": [
          {
            "args": [
              (v3/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "TagArtworks_tag"
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "TagArtworksTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Tag",
        "kind": "LinkedField",
        "name": "tag",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": "artworks",
            "args": (v7/*: any*/),
            "concreteType": "FilterArtworksConnection",
            "kind": "LinkedField",
            "name": "filterArtworksConnection",
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
              (v4/*: any*/),
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
                          (v6/*: any*/),
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
                          (v5/*: any*/),
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
                              (v8/*: any*/),
                              (v4/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v4/*: any*/)
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
            "storageKey": null
          },
          {
            "alias": "artworks",
            "args": (v7/*: any*/),
            "filters": [
              "aggregations",
              "input"
            ],
            "handle": "connection",
            "key": "TagArtworksGrid_artworks",
            "kind": "LinkedHandle",
            "name": "filterArtworksConnection"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "286d0ef4c849405391ff76044dd28a4f",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "tag": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Tag"
        },
        "tag.artworks": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterArtworksConnection"
        },
        "tag.artworks.__isArtworkConnectionInterface": (v10/*: any*/),
        "tag.artworks.aggregations": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworksAggregationResults"
        },
        "tag.artworks.aggregations.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "AggregationCount"
        },
        "tag.artworks.aggregations.counts.count": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Int"
        },
        "tag.artworks.aggregations.counts.name": (v10/*: any*/),
        "tag.artworks.aggregations.counts.value": (v10/*: any*/),
        "tag.artworks.aggregations.slice": {
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
        "tag.artworks.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FilterArtworksCounts"
        },
        "tag.artworks.counts.total": (v11/*: any*/),
        "tag.artworks.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "ArtworkEdgeInterface"
        },
        "tag.artworks.edges.__isNode": (v10/*: any*/),
        "tag.artworks.edges.__typename": (v10/*: any*/),
        "tag.artworks.edges.cursor": (v10/*: any*/),
        "tag.artworks.edges.id": (v12/*: any*/),
        "tag.artworks.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "tag.artworks.edges.node.__typename": (v10/*: any*/),
        "tag.artworks.edges.node.artistNames": (v13/*: any*/),
        "tag.artworks.edges.node.date": (v13/*: any*/),
        "tag.artworks.edges.node.href": (v13/*: any*/),
        "tag.artworks.edges.node.id": (v12/*: any*/),
        "tag.artworks.edges.node.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "tag.artworks.edges.node.image.aspectRatio": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Float"
        },
        "tag.artworks.edges.node.image.url": (v13/*: any*/),
        "tag.artworks.edges.node.internalID": (v12/*: any*/),
        "tag.artworks.edges.node.partner": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Partner"
        },
        "tag.artworks.edges.node.partner.id": (v12/*: any*/),
        "tag.artworks.edges.node.partner.name": (v13/*: any*/),
        "tag.artworks.edges.node.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "tag.artworks.edges.node.sale.displayTimelyAt": (v13/*: any*/),
        "tag.artworks.edges.node.sale.endAt": (v13/*: any*/),
        "tag.artworks.edges.node.sale.id": (v12/*: any*/),
        "tag.artworks.edges.node.sale.isAuction": (v14/*: any*/),
        "tag.artworks.edges.node.sale.isClosed": (v14/*: any*/),
        "tag.artworks.edges.node.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "tag.artworks.edges.node.saleArtwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "tag.artworks.edges.node.saleArtwork.counts.bidderPositions": (v11/*: any*/),
        "tag.artworks.edges.node.saleArtwork.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "tag.artworks.edges.node.saleArtwork.currentBid.display": (v13/*: any*/),
        "tag.artworks.edges.node.saleArtwork.id": (v12/*: any*/),
        "tag.artworks.edges.node.saleArtwork.lotLabel": (v13/*: any*/),
        "tag.artworks.edges.node.saleMessage": (v13/*: any*/),
        "tag.artworks.edges.node.slug": (v12/*: any*/),
        "tag.artworks.edges.node.title": (v13/*: any*/),
        "tag.artworks.id": (v12/*: any*/),
        "tag.artworks.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "tag.artworks.pageInfo.endCursor": (v13/*: any*/),
        "tag.artworks.pageInfo.hasNextPage": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Boolean"
        },
        "tag.artworks.pageInfo.startCursor": (v13/*: any*/),
        "tag.id": (v12/*: any*/),
        "tag.internalID": (v12/*: any*/),
        "tag.slug": (v12/*: any*/)
      }
    },
    "name": "TagArtworksTestsQuery",
    "operationKind": "query",
    "text": "query TagArtworksTestsQuery(\n  $tagID: String!\n  $input: FilterArtworksInput\n) {\n  tag(id: $tagID) {\n    ...TagArtworks_tag_2VV6jB\n    id\n  }\n}\n\nfragment ArtworkGridItem_artwork on Artwork {\n  title\n  date\n  saleMessage\n  slug\n  internalID\n  artistNames\n  href\n  sale {\n    isAuction\n    isClosed\n    displayTimelyAt\n    endAt\n    id\n  }\n  saleArtwork {\n    counts {\n      bidderPositions\n    }\n    currentBid {\n      display\n    }\n    lotLabel\n    id\n  }\n  partner {\n    name\n    id\n  }\n  image {\n    url(version: \"large\")\n    aspectRatio\n  }\n}\n\nfragment InfiniteScrollArtworksGrid_connection on ArtworkConnectionInterface {\n  __isArtworkConnectionInterface: __typename\n  pageInfo {\n    hasNextPage\n    startCursor\n    endCursor\n  }\n  edges {\n    __typename\n    node {\n      slug\n      id\n      image {\n        aspectRatio\n      }\n      ...ArtworkGridItem_artwork\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment TagArtworks_tag_2VV6jB on Tag {\n  id\n  internalID\n  slug\n  artworks: filterArtworksConnection(first: 10, after: \"\", aggregations: [LOCATION_CITY, ARTIST_NATIONALITY, PRICE_RANGE, COLOR, DIMENSION_RANGE, PARTNER, MAJOR_PERIOD, MEDIUM, PRICE_RANGE, ARTIST, LOCATION_CITY, MATERIALS_TERMS], input: $input) {\n    counts {\n      total\n    }\n    aggregations {\n      slice\n      counts {\n        value\n        name\n        count\n      }\n    }\n    edges {\n      node {\n        id\n        __typename\n      }\n      cursor\n    }\n    ...InfiniteScrollArtworksGrid_connection\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "91388526af3138203ec6594c07c58f17";

export default node;
