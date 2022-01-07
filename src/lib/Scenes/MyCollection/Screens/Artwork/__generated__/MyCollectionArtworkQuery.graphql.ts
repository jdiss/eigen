/**
 * @generated SignedSource<<0f4a3bb7e43e44b1b4d17a0dc38140da>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkQuery$variables = {
  artworkSlug: string;
  artistInternalID: string;
  medium: string;
};
export type MyCollectionArtworkQueryVariables = MyCollectionArtworkQuery$variables;
export type MyCollectionArtworkQuery$data = {
  readonly artwork: {
    readonly artist: {
      readonly internalID: string;
      readonly formattedNationalityAndBirthday: string | null;
    } | null;
    readonly artistNames: string | null;
    readonly category: string | null;
    readonly pricePaid: {
      readonly display: string | null;
      readonly minor: number;
      readonly currencyCode: string;
    } | null;
    readonly date: string | null;
    readonly depth: string | null;
    readonly editionSize: string | null;
    readonly editionNumber: string | null;
    readonly height: string | null;
    readonly attributionClass: {
      readonly name: string | null;
    } | null;
    readonly id: string;
    readonly images: ReadonlyArray<{
      readonly isDefault: boolean | null;
      readonly imageURL: string | null;
      readonly width: number | null;
      readonly height: number | null;
      readonly internalID: string | null;
    } | null> | null;
    readonly internalID: string;
    readonly isEdition: boolean | null;
    readonly medium: string | null;
    readonly metric: string | null;
    readonly provenance: string | null;
    readonly slug: string;
    readonly title: string | null;
    readonly width: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkHeader_artwork" | "MyCollectionArtworkMeta_artwork" | "MyCollectionArtworkInsights_artwork">;
  } | null;
  readonly marketPriceInsights: {
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkInsights_marketPriceInsights">;
  } | null;
};
export type MyCollectionArtworkQueryResponse = MyCollectionArtworkQuery$data;
export type MyCollectionArtworkQuery = {
  variables: MyCollectionArtworkQueryVariables;
  response: MyCollectionArtworkQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "artistInternalID"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "artworkSlug"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "medium"
},
v3 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artworkSlug"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "formattedNationalityAndBirthday",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artistNames",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "category",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "display",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "Money",
  "kind": "LinkedField",
  "name": "pricePaid",
  "plural": false,
  "selections": [
    (v8/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "minor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "currencyCode",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "depth",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "editionSize",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "editionNumber",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isDefault",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageURL",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "width",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isEdition",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "medium",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "metric",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "provenance",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v26 = [
  {
    "kind": "Variable",
    "name": "artistId",
    "variableName": "artistInternalID"
  },
  {
    "kind": "Variable",
    "name": "medium",
    "variableName": "medium"
  }
],
v27 = {
  "kind": "Literal",
  "name": "first",
  "value": 3
},
v28 = [
  (v15/*: any*/),
  (v16/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyCollectionArtworkQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artist",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/),
          (v7/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AttributionClass",
            "kind": "LinkedField",
            "name": "attributionClass",
            "plural": false,
            "selections": [
              (v15/*: any*/)
            ],
            "storageKey": null
          },
          (v16/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "images",
            "plural": true,
            "selections": [
              (v17/*: any*/),
              (v18/*: any*/),
              (v19/*: any*/),
              (v14/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/),
          (v20/*: any*/),
          (v21/*: any*/),
          (v22/*: any*/),
          (v23/*: any*/),
          (v24/*: any*/),
          (v25/*: any*/),
          (v19/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyCollectionArtworkHeader_artwork"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyCollectionArtworkMeta_artwork"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyCollectionArtworkInsights_artwork"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v26/*: any*/),
        "concreteType": "MarketPriceInsights",
        "kind": "LinkedField",
        "name": "marketPriceInsights",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyCollectionArtworkInsights_marketPriceInsights"
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
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "MyCollectionArtworkQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artist",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v16/*: any*/),
              (v15/*: any*/),
              (v24/*: any*/),
              {
                "alias": null,
                "args": [
                  (v27/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "sort",
                    "value": "DATE_DESC"
                  }
                ],
                "concreteType": "AuctionResultConnection",
                "kind": "LinkedField",
                "name": "auctionResultsConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AuctionResultEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AuctionResult",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v16/*: any*/),
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "currency",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "dateText",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Artist",
                            "kind": "LinkedField",
                            "name": "artist",
                            "plural": false,
                            "selections": (v28/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "AuctionLotImages",
                            "kind": "LinkedField",
                            "name": "images",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Image",
                                "kind": "LinkedField",
                                "name": "thumbnail",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": [
                                      {
                                        "kind": "Literal",
                                        "name": "version",
                                        "value": "square140"
                                      }
                                    ],
                                    "kind": "ScalarField",
                                    "name": "url",
                                    "storageKey": "url(version:\"square140\")"
                                  },
                                  (v14/*: any*/),
                                  (v19/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "aspectRatio",
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
                            "concreteType": "AuctionLotEstimate",
                            "kind": "LinkedField",
                            "name": "estimate",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "low",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "mediumText",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "organization",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "boughtIn",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "AuctionLotPerformance",
                            "kind": "LinkedField",
                            "name": "performance",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "mid",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "AuctionResultPriceRealized",
                            "kind": "LinkedField",
                            "name": "priceRealized",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "cents",
                                "storageKey": null
                              },
                              (v8/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "displayUSD",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "saleDate",
                            "storageKey": null
                          },
                          (v25/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "auctionResultsConnection(first:3,sort:\"DATE_DESC\")"
              },
              {
                "alias": null,
                "args": [
                  (v27/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "inEditorialFeed",
                    "value": true
                  },
                  {
                    "kind": "Literal",
                    "name": "sort",
                    "value": "PUBLISHED_AT_DESC"
                  }
                ],
                "concreteType": "ArticleConnection",
                "kind": "LinkedField",
                "name": "articlesConnection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ArticleEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Article",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v24/*: any*/),
                          (v4/*: any*/),
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
                            "name": "thumbnailTitle",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Author",
                            "kind": "LinkedField",
                            "name": "author",
                            "plural": false,
                            "selections": (v28/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "format",
                                "value": "MMM Do, YYYY"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "publishedAt",
                            "storageKey": "publishedAt(format:\"MMM Do, YYYY\")"
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Image",
                            "kind": "LinkedField",
                            "name": "thumbnailImage",
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
                          (v16/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "articlesConnection(first:3,inEditorialFeed:true,sort:\"PUBLISHED_AT_DESC\")"
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/),
          (v7/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/),
          (v14/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AttributionClass",
            "kind": "LinkedField",
            "name": "attributionClass",
            "plural": false,
            "selections": (v28/*: any*/),
            "storageKey": null
          },
          (v16/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "images",
            "plural": true,
            "selections": [
              (v17/*: any*/),
              (v18/*: any*/),
              (v19/*: any*/),
              (v14/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "imageVersions",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v4/*: any*/),
          (v20/*: any*/),
          (v21/*: any*/),
          (v22/*: any*/),
          (v23/*: any*/),
          (v24/*: any*/),
          (v25/*: any*/),
          (v19/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "sizeBucket",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v26/*: any*/),
        "concreteType": "MarketPriceInsights",
        "kind": "LinkedField",
        "name": "marketPriceInsights",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "demandRank",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "annualLotsSold",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "annualValueSoldCents",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "sellThroughRate",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "medianSaleToEstimateRatio",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "liquidityRank",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "demandTrend",
            "storageKey": null
          },
          (v16/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fb1676a90f6156f6e31aa755a6af608e",
    "id": null,
    "metadata": {},
    "name": "MyCollectionArtworkQuery",
    "operationKind": "query",
    "text": "query MyCollectionArtworkQuery(\n  $artworkSlug: String!\n  $artistInternalID: ID!\n  $medium: String!\n) {\n  artwork(id: $artworkSlug) {\n    artist {\n      internalID\n      formattedNationalityAndBirthday\n      id\n    }\n    artistNames\n    category\n    pricePaid {\n      display\n      minor\n      currencyCode\n    }\n    date\n    depth\n    editionSize\n    editionNumber\n    height\n    attributionClass {\n      name\n      id\n    }\n    id\n    images {\n      isDefault\n      imageURL\n      width\n      height\n      internalID\n    }\n    internalID\n    isEdition\n    medium\n    metric\n    provenance\n    slug\n    title\n    width\n    ...MyCollectionArtworkHeader_artwork\n    ...MyCollectionArtworkMeta_artwork\n    ...MyCollectionArtworkInsights_artwork\n  }\n  marketPriceInsights(artistId: $artistInternalID, medium: $medium) {\n    ...MyCollectionArtworkInsights_marketPriceInsights\n    id\n  }\n}\n\nfragment AuctionResultListItem_auctionResult on AuctionResult {\n  currency\n  dateText\n  id\n  internalID\n  artist {\n    name\n    id\n  }\n  images {\n    thumbnail {\n      url(version: \"square140\")\n      height\n      width\n      aspectRatio\n    }\n  }\n  estimate {\n    low\n  }\n  mediumText\n  organization\n  boughtIn\n  performance {\n    mid\n  }\n  priceRealized {\n    cents\n    display\n    displayUSD\n  }\n  saleDate\n  title\n}\n\nfragment MyCollectionArtworkArtistArticles_artwork on Artwork {\n  internalID\n  slug\n  artist {\n    slug\n    name\n    internalID\n    articlesConnection(first: 3, sort: PUBLISHED_AT_DESC, inEditorialFeed: true) {\n      edges {\n        node {\n          slug\n          internalID\n          href\n          thumbnailTitle\n          author {\n            name\n            id\n          }\n          publishedAt(format: \"MMM Do, YYYY\")\n          thumbnailImage {\n            url\n          }\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment MyCollectionArtworkArtistAuctionResults_artwork on Artwork {\n  internalID\n  slug\n  artist {\n    slug\n    name\n    auctionResultsConnection(first: 3, sort: DATE_DESC) {\n      edges {\n        node {\n          id\n          internalID\n          ...AuctionResultListItem_auctionResult\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment MyCollectionArtworkArtistMarket_artwork on Artwork {\n  internalID\n  slug\n}\n\nfragment MyCollectionArtworkArtistMarket_marketPriceInsights on MarketPriceInsights {\n  annualLotsSold\n  annualValueSoldCents\n  sellThroughRate\n  medianSaleToEstimateRatio\n  liquidityRank\n  demandTrend\n}\n\nfragment MyCollectionArtworkDemandIndex_artwork on Artwork {\n  internalID\n  slug\n}\n\nfragment MyCollectionArtworkDemandIndex_marketPriceInsights on MarketPriceInsights {\n  demandRank\n}\n\nfragment MyCollectionArtworkHeader_artwork on Artwork {\n  artistNames\n  date\n  images {\n    height\n    isDefault\n    imageURL\n    width\n    internalID\n    imageVersions\n  }\n  internalID\n  slug\n  title\n}\n\nfragment MyCollectionArtworkInsights_artwork on Artwork {\n  sizeBucket\n  medium\n  artist {\n    name\n    id\n  }\n  ...MyCollectionArtworkArtistAuctionResults_artwork\n  ...MyCollectionArtworkArtistArticles_artwork\n  ...MyCollectionArtworkArtistMarket_artwork\n  ...MyCollectionArtworkDemandIndex_artwork\n}\n\nfragment MyCollectionArtworkInsights_marketPriceInsights on MarketPriceInsights {\n  ...MyCollectionArtworkDemandIndex_marketPriceInsights\n  ...MyCollectionArtworkArtistMarket_marketPriceInsights\n}\n\nfragment MyCollectionArtworkMeta_artwork on Artwork {\n  slug\n  internalID\n  artistNames\n  category\n  pricePaid {\n    display\n  }\n  date\n  depth\n  editionNumber\n  editionSize\n  height\n  medium\n  metric\n  title\n  width\n}\n"
  }
};
})();

(node as any).hash = "ff48730bc0fe2c28a7e2ccd715f72842";

export default node;
