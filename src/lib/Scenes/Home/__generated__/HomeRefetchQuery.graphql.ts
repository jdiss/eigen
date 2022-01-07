/**
 * @generated SignedSource<<dee86dd4e8fff0024b2f471a5a80a776>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomePageHeroUnitImageVersion = "NARROW" | "WIDE" | "%future added value";
export type HomeRefetchQuery$variables = {
  heroImageVersion: HomePageHeroUnitImageVersion;
};
export type HomeRefetchQueryVariables = HomeRefetchQuery$variables;
export type HomeRefetchQuery$data = {
  readonly homePage: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_homePageAbove">;
  } | null;
  readonly homePageBelow: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_homePageBelow">;
  } | null;
  readonly me: {
    readonly showsByFollowedArtists: {
      readonly " $fragmentSpreads": FragmentRefs<"Home_showsByFollowedArtists">;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"Home_meAbove" | "AuctionResultsRail_me" | "RecommendedArtistsRail_me" | "NewWorksForYouRail_me">;
  } | null;
  readonly meBelow: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_meBelow">;
  } | null;
  readonly featured: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_featured">;
  } | null;
  readonly articlesConnection: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_articlesConnection">;
  } | null;
};
export type HomeRefetchQueryResponse = HomeRefetchQuery$data;
export type HomeRefetchQuery = {
  variables: HomeRefetchQueryVariables;
  response: HomeRefetchQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "heroImageVersion"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "heroImageVersion",
    "variableName": "heroImageVersion"
  }
],
v2 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v3 = [
  (v2/*: any*/),
  {
    "kind": "Literal",
    "name": "status",
    "value": "RUNNING_AND_UPCOMING"
  }
],
v4 = [
  {
    "kind": "Literal",
    "name": "featured",
    "value": true
  }
],
v5 = [
  (v2/*: any*/),
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
  "name": "title",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "key",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "saleMessage",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "artistNames",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isAuction",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isClosed",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayTimelyAt",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "concreteType": "Sale",
  "kind": "LinkedField",
  "name": "sale",
  "plural": false,
  "selections": [
    (v14/*: any*/),
    (v15/*: any*/),
    (v16/*: any*/),
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
v18 = {
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
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "display",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "concreteType": "SaleArtworkCurrentBid",
  "kind": "LinkedField",
  "name": "currentBid",
  "plural": false,
  "selections": [
    (v19/*: any*/)
  ],
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lotLabel",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v23 = [
  (v22/*: any*/),
  (v6/*: any*/)
],
v24 = {
  "alias": null,
  "args": null,
  "concreteType": "Partner",
  "kind": "LinkedField",
  "name": "partner",
  "plural": false,
  "selections": (v23/*: any*/),
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageURL",
  "storageKey": null
},
v26 = {
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
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "aspectRatio",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "concreteType": "Artist",
  "kind": "LinkedField",
  "name": "basedOn",
  "plural": false,
  "selections": (v23/*: any*/),
  "storageKey": null
},
v31 = [
  (v9/*: any*/)
],
v32 = {
  "kind": "InlineFragment",
  "selections": [
    (v6/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v33 = [
  (v6/*: any*/),
  (v7/*: any*/),
  (v8/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Artwork",
    "kind": "LinkedField",
    "name": "results",
    "plural": true,
    "selections": [
      (v9/*: any*/),
      (v10/*: any*/),
      (v11/*: any*/),
      (v12/*: any*/),
      (v13/*: any*/),
      (v17/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "SaleArtwork",
        "kind": "LinkedField",
        "name": "saleArtwork",
        "plural": false,
        "selections": [
          (v18/*: any*/),
          (v20/*: any*/),
          (v6/*: any*/),
          (v21/*: any*/)
        ],
        "storageKey": null
      },
      (v24/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Image",
        "kind": "LinkedField",
        "name": "image",
        "plural": false,
        "selections": [
          (v25/*: any*/),
          {
            "alias": "aspect_ratio",
            "args": null,
            "kind": "ScalarField",
            "name": "aspectRatio",
            "storageKey": null
          },
          (v26/*: any*/),
          (v27/*: any*/)
        ],
        "storageKey": null
      },
      (v6/*: any*/),
      (v7/*: any*/),
      (v28/*: any*/)
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": null,
    "kind": "LinkedField",
    "name": "context",
    "plural": false,
    "selections": [
      (v29/*: any*/),
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artist",
            "plural": false,
            "selections": [
              (v12/*: any*/),
              (v13/*: any*/),
              (v9/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v30/*: any*/)
        ],
        "type": "HomePageRelatedArtistArtworkModule",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artist",
            "plural": false,
            "selections": [
              (v9/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "type": "HomePageFollowedArtistArtworkModule",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v31/*: any*/),
        "type": "Fair",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v31/*: any*/),
        "type": "Gene",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v31/*: any*/),
        "type": "Sale",
        "abstractKey": null
      },
      (v32/*: any*/)
    ],
    "storageKey": null
  }
],
v34 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  }
],
v35 = [
  (v26/*: any*/)
],
v36 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": (v35/*: any*/),
  "storageKey": null
},
v37 = [
  (v36/*: any*/),
  (v6/*: any*/)
],
v38 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "formattedNationalityAndBirthday",
  "storageKey": null
},
v39 = [
  {
    "kind": "Literal",
    "name": "version",
    "value": "small"
  }
],
v40 = [
  {
    "alias": null,
    "args": (v39/*: any*/),
    "kind": "ScalarField",
    "name": "url",
    "storageKey": "url(version:\"small\")"
  }
],
v41 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": (v40/*: any*/),
  "storageKey": null
},
v42 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isFollowed",
  "storageKey": null
},
v43 = [
  (v6/*: any*/),
  (v8/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Artist",
    "kind": "LinkedField",
    "name": "results",
    "plural": true,
    "selections": [
      (v6/*: any*/),
      (v12/*: any*/),
      (v13/*: any*/),
      (v9/*: any*/),
      (v22/*: any*/),
      (v38/*: any*/),
      (v41/*: any*/),
      (v30/*: any*/),
      (v42/*: any*/)
    ],
    "storageKey": null
  }
],
v44 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "platform",
      "value": "MOBILE"
    }
  ],
  "concreteType": "HomePageHeroUnit",
  "kind": "LinkedField",
  "name": "heroUnits",
  "plural": true,
  "selections": [
    (v7/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "subtitle",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "creditLine",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "linkText",
      "storageKey": null
    },
    (v9/*: any*/),
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "version",
          "variableName": "heroImageVersion"
        }
      ],
      "kind": "ScalarField",
      "name": "backgroundImageURL",
      "storageKey": null
    },
    (v6/*: any*/)
  ],
  "storageKey": "heroUnits(platform:\"MOBILE\")"
},
v45 = {
  "kind": "Literal",
  "name": "first",
  "value": 2
},
v46 = {
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
      "selections": (v37/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v47 = [
  (v46/*: any*/),
  (v6/*: any*/)
],
v48 = {
  "kind": "Literal",
  "name": "first",
  "value": 6
},
v49 = [
  (v48/*: any*/),
  {
    "kind": "Literal",
    "name": "includeArtworksByFollowedArtists",
    "value": true
  },
  {
    "kind": "Literal",
    "name": "isAuction",
    "value": true
  },
  {
    "kind": "Literal",
    "name": "liveSale",
    "value": true
  }
],
v50 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v51 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v52 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    (v50/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startCursor",
      "storageKey": null
    },
    (v51/*: any*/)
  ],
  "storageKey": null
},
v53 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v54 = [
  (v48/*: any*/)
],
v55 = {
  "alias": null,
  "args": (v34/*: any*/),
  "concreteType": "AuctionResultConnection",
  "kind": "LinkedField",
  "name": "auctionResultsByFollowedArtists",
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
      "concreteType": "AuctionResultEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        (v53/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "AuctionResult",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
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
            (v6/*: any*/),
            (v13/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "Artist",
              "kind": "LinkedField",
              "name": "artist",
              "plural": false,
              "selections": (v23/*: any*/),
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
                    (v27/*: any*/)
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
                (v19/*: any*/),
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
            (v7/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "artistID",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "auctionResultsByFollowedArtists(first:3)"
},
v56 = [
  {
    "kind": "Literal",
    "name": "format",
    "value": "MMM D"
  }
],
v57 = [
  {
    "kind": "Literal",
    "name": "short",
    "value": true
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "HomePage",
        "kind": "LinkedField",
        "name": "homePage",
        "plural": false,
        "selections": [
          {
            "args": (v1/*: any*/),
            "kind": "FragmentSpread",
            "name": "Home_homePageAbove"
          }
        ],
        "storageKey": null
      },
      {
        "alias": "homePageBelow",
        "args": null,
        "concreteType": "HomePage",
        "kind": "LinkedField",
        "name": "homePage",
        "plural": false,
        "selections": [
          {
            "args": (v1/*: any*/),
            "kind": "FragmentSpread",
            "name": "Home_homePageBelow"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Home_meAbove"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AuctionResultsRail_me"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RecommendedArtistsRail_me"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NewWorksForYouRail_me"
          },
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "ShowConnection",
            "kind": "LinkedField",
            "name": "showsByFollowedArtists",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "Home_showsByFollowedArtists"
              }
            ],
            "storageKey": "showsByFollowedArtists(first:10,status:\"RUNNING_AND_UPCOMING\")"
          }
        ],
        "storageKey": null
      },
      {
        "alias": "meBelow",
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Home_meBelow"
          }
        ],
        "storageKey": null
      },
      {
        "alias": "featured",
        "args": (v4/*: any*/),
        "concreteType": "ViewingRoomConnection",
        "kind": "LinkedField",
        "name": "viewingRooms",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Home_featured"
          }
        ],
        "storageKey": "viewingRooms(featured:true)"
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "ArticleConnection",
        "kind": "LinkedField",
        "name": "articlesConnection",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Home_articlesConnection"
          }
        ],
        "storageKey": "articlesConnection(first:10,inEditorialFeed:true,sort:\"PUBLISHED_AT_DESC\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HomeRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "HomePage",
        "kind": "LinkedField",
        "name": "homePage",
        "plural": false,
        "selections": [
          {
            "alias": "followedArtistsArtworkModule",
            "args": [
              {
                "kind": "Literal",
                "name": "key",
                "value": "FOLLOWED_ARTISTS"
              }
            ],
            "concreteType": "HomePageArtworkModule",
            "kind": "LinkedField",
            "name": "artworkModule",
            "plural": false,
            "selections": (v33/*: any*/),
            "storageKey": "artworkModule(key:\"FOLLOWED_ARTISTS\")"
          },
          {
            "alias": "activeBidsArtworkModule",
            "args": [
              {
                "kind": "Literal",
                "name": "key",
                "value": "ACTIVE_BIDS"
              }
            ],
            "concreteType": "HomePageArtworkModule",
            "kind": "LinkedField",
            "name": "artworkModule",
            "plural": false,
            "selections": (v33/*: any*/),
            "storageKey": "artworkModule(key:\"ACTIVE_BIDS\")"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "HomePageSalesModule",
            "kind": "LinkedField",
            "name": "salesModule",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Sale",
                "kind": "LinkedField",
                "name": "results",
                "plural": true,
                "selections": [
                  (v6/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v9/*: any*/),
                  (v22/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "liveURLIfOpen",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "liveStartAt",
                    "storageKey": null
                  },
                  (v16/*: any*/),
                  {
                    "alias": null,
                    "args": (v34/*: any*/),
                    "concreteType": "SaleArtworkConnection",
                    "kind": "LinkedField",
                    "name": "saleArtworksConnection",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SaleArtworkEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "SaleArtwork",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Artwork",
                                "kind": "LinkedField",
                                "name": "artwork",
                                "plural": false,
                                "selections": (v37/*: any*/),
                                "storageKey": null
                              },
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "saleArtworksConnection(first:3)"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": "recommendedArtistsArtistModule",
            "args": [
              {
                "kind": "Literal",
                "name": "key",
                "value": "SUGGESTED"
              }
            ],
            "concreteType": "HomePageArtistModule",
            "kind": "LinkedField",
            "name": "artistModule",
            "plural": false,
            "selections": (v43/*: any*/),
            "storageKey": "artistModule(key:\"SUGGESTED\")"
          },
          (v44/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "homePageBelow",
        "args": null,
        "concreteType": "HomePage",
        "kind": "LinkedField",
        "name": "homePage",
        "plural": false,
        "selections": [
          {
            "alias": "recentlyViewedWorksArtworkModule",
            "args": [
              {
                "kind": "Literal",
                "name": "key",
                "value": "RECENTLY_VIEWED_WORKS"
              }
            ],
            "concreteType": "HomePageArtworkModule",
            "kind": "LinkedField",
            "name": "artworkModule",
            "plural": false,
            "selections": (v33/*: any*/),
            "storageKey": "artworkModule(key:\"RECENTLY_VIEWED_WORKS\")"
          },
          {
            "alias": "similarToRecentlyViewedArtworkModule",
            "args": [
              {
                "kind": "Literal",
                "name": "key",
                "value": "SIMILAR_TO_RECENTLY_VIEWED"
              }
            ],
            "concreteType": "HomePageArtworkModule",
            "kind": "LinkedField",
            "name": "artworkModule",
            "plural": false,
            "selections": (v33/*: any*/),
            "storageKey": "artworkModule(key:\"SIMILAR_TO_RECENTLY_VIEWED\")"
          },
          {
            "alias": "popularArtistsArtistModule",
            "args": [
              {
                "kind": "Literal",
                "name": "key",
                "value": "POPULAR"
              }
            ],
            "concreteType": "HomePageArtistModule",
            "kind": "LinkedField",
            "name": "artistModule",
            "plural": false,
            "selections": (v43/*: any*/),
            "storageKey": "artistModule(key:\"POPULAR\")"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "HomePageFairsModule",
            "kind": "LinkedField",
            "name": "fairsModule",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Fair",
                "kind": "LinkedField",
                "name": "results",
                "plural": true,
                "selections": [
                  (v6/*: any*/),
                  (v13/*: any*/),
                  (v12/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Profile",
                    "kind": "LinkedField",
                    "name": "profile",
                    "plural": false,
                    "selections": [
                      (v12/*: any*/),
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v22/*: any*/),
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "format",
                        "value": "SHORT"
                      }
                    ],
                    "kind": "ScalarField",
                    "name": "exhibitionPeriod",
                    "storageKey": "exhibitionPeriod(format:\"SHORT\")"
                  },
                  (v36/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Location",
                    "kind": "LinkedField",
                    "name": "location",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "city",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "country",
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": "followedArtistArtworks",
                    "args": [
                      (v45/*: any*/),
                      {
                        "kind": "Literal",
                        "name": "input",
                        "value": {
                          "includeArtworksByFollowedArtists": true
                        }
                      }
                    ],
                    "concreteType": "FilterArtworksConnection",
                    "kind": "LinkedField",
                    "name": "filterArtworksConnection",
                    "plural": false,
                    "selections": (v47/*: any*/),
                    "storageKey": "filterArtworksConnection(first:2,input:{\"includeArtworksByFollowedArtists\":true})"
                  },
                  {
                    "alias": "otherArtworks",
                    "args": [
                      (v45/*: any*/)
                    ],
                    "concreteType": "FilterArtworksConnection",
                    "kind": "LinkedField",
                    "name": "filterArtworksConnection",
                    "plural": false,
                    "selections": (v47/*: any*/),
                    "storageKey": "filterArtworksConnection(first:2)"
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
            "concreteType": "HomePageMarketingCollectionsModule",
            "kind": "LinkedField",
            "name": "marketingCollectionsModule",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MarketingCollection",
                "kind": "LinkedField",
                "name": "results",
                "plural": true,
                "selections": [
                  (v7/*: any*/),
                  (v12/*: any*/),
                  {
                    "alias": null,
                    "args": (v34/*: any*/),
                    "concreteType": "FilterArtworksConnection",
                    "kind": "LinkedField",
                    "name": "artworksConnection",
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
                      (v46/*: any*/),
                      (v6/*: any*/)
                    ],
                    "storageKey": "artworksConnection(first:3)"
                  },
                  (v6/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v44/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "canRequestEmailConfirmation",
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v49/*: any*/),
            "concreteType": "SaleArtworksConnection",
            "kind": "LinkedField",
            "name": "lotsByFollowedArtistsConnection",
            "plural": false,
            "selections": [
              (v52/*: any*/),
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
                      (v6/*: any*/),
                      (v9/*: any*/),
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
                            "concreteType": "Artwork",
                            "kind": "LinkedField",
                            "name": "artwork",
                            "plural": false,
                            "selections": [
                              (v11/*: any*/),
                              (v28/*: any*/),
                              (v9/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Image",
                                "kind": "LinkedField",
                                "name": "image",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": "imageURL",
                                    "args": (v39/*: any*/),
                                    "kind": "ScalarField",
                                    "name": "url",
                                    "storageKey": "url(version:\"small\")"
                                  },
                                  (v27/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v13/*: any*/),
                              (v12/*: any*/),
                              (v10/*: any*/),
                              (v7/*: any*/),
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v18/*: any*/),
                          (v20/*: any*/),
                          (v21/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Sale",
                            "kind": "LinkedField",
                            "name": "sale",
                            "plural": false,
                            "selections": [
                              (v14/*: any*/),
                              (v15/*: any*/),
                              (v16/*: any*/),
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v29/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v53/*: any*/),
                  (v6/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "lotsByFollowedArtistsConnection(first:6,includeArtworksByFollowedArtists:true,isAuction:true,liveSale:true)"
          },
          {
            "alias": null,
            "args": (v49/*: any*/),
            "filters": [
              "includeArtworksByFollowedArtists",
              "isAuction",
              "liveSale"
            ],
            "handle": "connection",
            "key": "LotsByFollowedArtistsRail_lotsByFollowedArtistsConnection",
            "kind": "LinkedHandle",
            "name": "lotsByFollowedArtistsConnection"
          },
          {
            "alias": null,
            "args": (v54/*: any*/),
            "concreteType": "ArtworkConnection",
            "kind": "LinkedField",
            "name": "newWorksByInterestingArtists",
            "plural": false,
            "selections": [
              (v52/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ArtworkEdge",
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
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      (v17/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "SaleArtwork",
                        "kind": "LinkedField",
                        "name": "saleArtwork",
                        "plural": false,
                        "selections": [
                          (v18/*: any*/),
                          (v20/*: any*/),
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v24/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "image",
                        "plural": false,
                        "selections": [
                          (v25/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/),
                      (v29/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v53/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "newWorksByInterestingArtists(first:6)"
          },
          {
            "alias": null,
            "args": (v54/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "NewWorksForYouRail_newWorksByInterestingArtists",
            "kind": "LinkedHandle",
            "name": "newWorksByInterestingArtists"
          },
          {
            "alias": null,
            "args": (v54/*: any*/),
            "concreteType": "ArtistConnection",
            "kind": "LinkedField",
            "name": "artistRecommendations",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ArtistEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Artist",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v22/*: any*/),
                      (v6/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      (v9/*: any*/),
                      (v38/*: any*/),
                      (v41/*: any*/),
                      (v30/*: any*/),
                      (v42/*: any*/),
                      (v29/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v53/*: any*/)
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
                  (v51/*: any*/),
                  (v50/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "artistRecommendations(first:6)"
          },
          {
            "alias": null,
            "args": (v54/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "RecommendedArtistsRail_artistRecommendations",
            "kind": "LinkedHandle",
            "name": "artistRecommendations"
          },
          (v55/*: any*/),
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "ShowConnection",
            "kind": "LinkedField",
            "name": "showsByFollowedArtists",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ShowEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Show",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v13/*: any*/),
                      (v12/*: any*/),
                      (v22/*: any*/),
                      {
                        "alias": "formattedStartAt",
                        "args": (v56/*: any*/),
                        "kind": "ScalarField",
                        "name": "startAt",
                        "storageKey": "startAt(format:\"MMM D\")"
                      },
                      {
                        "alias": "formattedEndAt",
                        "args": (v56/*: any*/),
                        "kind": "ScalarField",
                        "name": "endAt",
                        "storageKey": "endAt(format:\"MMM D\")"
                      },
                      (v9/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "metaImage",
                        "plural": false,
                        "selections": (v40/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": null,
                        "kind": "LinkedField",
                        "name": "partner",
                        "plural": false,
                        "selections": [
                          (v29/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v22/*: any*/)
                            ],
                            "type": "Partner",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v23/*: any*/),
                            "type": "ExternalPartner",
                            "abstractKey": null
                          },
                          (v32/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "showsByFollowedArtists(first:10,status:\"RUNNING_AND_UPCOMING\")"
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "meBelow",
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v55/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "featured",
        "args": (v4/*: any*/),
        "concreteType": "ViewingRoomConnection",
        "kind": "LinkedField",
        "name": "viewingRooms",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ViewingRoomEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ViewingRoom",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v13/*: any*/),
                  (v7/*: any*/),
                  (v12/*: any*/),
                  {
                    "alias": "heroImage",
                    "args": null,
                    "concreteType": "ARImage",
                    "kind": "LinkedField",
                    "name": "image",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ImageURLs",
                        "kind": "LinkedField",
                        "name": "imageURLs",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "normalized",
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
                    "kind": "ScalarField",
                    "name": "status",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": (v57/*: any*/),
                    "kind": "ScalarField",
                    "name": "distanceToOpen",
                    "storageKey": "distanceToOpen(short:true)"
                  },
                  {
                    "alias": null,
                    "args": (v57/*: any*/),
                    "kind": "ScalarField",
                    "name": "distanceToClose",
                    "storageKey": "distanceToClose(short:true)"
                  },
                  (v24/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "viewingRooms(featured:true)"
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
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
                  (v13/*: any*/),
                  (v12/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Author",
                    "kind": "LinkedField",
                    "name": "author",
                    "plural": false,
                    "selections": (v23/*: any*/),
                    "storageKey": null
                  },
                  (v9/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Image",
                    "kind": "LinkedField",
                    "name": "thumbnailImage",
                    "plural": false,
                    "selections": (v35/*: any*/),
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
                    "kind": "ScalarField",
                    "name": "vertical",
                    "storageKey": null
                  },
                  (v6/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "articlesConnection(first:10,inEditorialFeed:true,sort:\"PUBLISHED_AT_DESC\")"
      }
    ]
  },
  "params": {
    "cacheID": "36d362de223317f8be336c3c42265549",
    "id": null,
    "metadata": {},
    "name": "HomeRefetchQuery",
    "operationKind": "query",
    "text": "query HomeRefetchQuery(\n  $heroImageVersion: HomePageHeroUnitImageVersion!\n) {\n  homePage @optionalField {\n    ...Home_homePageAbove_1IwJ0h\n  }\n  homePageBelow: homePage @optionalField {\n    ...Home_homePageBelow_1IwJ0h\n  }\n  me @optionalField {\n    ...Home_meAbove\n    ...AuctionResultsRail_me\n    ...RecommendedArtistsRail_me\n    ...NewWorksForYouRail_me\n    showsByFollowedArtists(first: 10, status: RUNNING_AND_UPCOMING) @optionalField {\n      ...Home_showsByFollowedArtists\n    }\n    id\n  }\n  meBelow: me @optionalField {\n    ...Home_meBelow\n    id\n  }\n  featured: viewingRooms(featured: true) @optionalField {\n    ...Home_featured\n  }\n  articlesConnection(first: 10, sort: PUBLISHED_AT_DESC, inEditorialFeed: true) @optionalField {\n    ...Home_articlesConnection\n  }\n}\n\nfragment ArticleCard_article on Article {\n  internalID\n  slug\n  author {\n    name\n    id\n  }\n  href\n  thumbnailImage {\n    url(version: \"large\")\n  }\n  thumbnailTitle\n  vertical\n}\n\nfragment ArticlesRail_articlesConnection on ArticleConnection {\n  edges {\n    node {\n      internalID\n      slug\n      ...ArticleCard_article\n      id\n    }\n  }\n}\n\nfragment ArtistRail_rail on HomePageArtistModule {\n  id\n  key\n  results {\n    id\n    slug\n    internalID\n    href\n    name\n    formattedNationalityAndBirthday\n    image {\n      url(version: \"small\")\n    }\n    basedOn {\n      name\n      id\n    }\n    isFollowed\n  }\n}\n\nfragment ArtworkGridItem_artwork on Artwork {\n  title\n  date\n  saleMessage\n  slug\n  internalID\n  artistNames\n  href\n  sale {\n    isAuction\n    isClosed\n    displayTimelyAt\n    endAt\n    id\n  }\n  saleArtwork {\n    counts {\n      bidderPositions\n    }\n    currentBid {\n      display\n    }\n    lotLabel\n    id\n  }\n  partner {\n    name\n    id\n  }\n  image {\n    url(version: \"large\")\n    aspectRatio\n  }\n}\n\nfragment ArtworkRail_rail on HomePageArtworkModule {\n  title\n  key\n  results {\n    ...SmallTileRail_artworks\n    ...GenericGrid_artworks\n    id\n  }\n  context {\n    __typename\n    ... on HomePageRelatedArtistArtworkModule {\n      __typename\n      artist {\n        slug\n        internalID\n        href\n        id\n      }\n      basedOn {\n        name\n        id\n      }\n    }\n    ... on HomePageFollowedArtistArtworkModule {\n      artist {\n        href\n        id\n      }\n    }\n    ... on Fair {\n      href\n    }\n    ... on Gene {\n      href\n    }\n    ... on Sale {\n      href\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment AuctionResultListItem_auctionResult on AuctionResult {\n  currency\n  dateText\n  id\n  internalID\n  artist {\n    name\n    id\n  }\n  images {\n    thumbnail {\n      url(version: \"square140\")\n      height\n      width\n      aspectRatio\n    }\n  }\n  estimate {\n    low\n  }\n  mediumText\n  organization\n  boughtIn\n  performance {\n    mid\n  }\n  priceRealized {\n    cents\n    display\n    displayUSD\n  }\n  saleDate\n  title\n}\n\nfragment AuctionResultsRail_me on Me {\n  auctionResultsByFollowedArtists(first: 3) {\n    totalCount\n    edges {\n      cursor\n      node {\n        ...AuctionResultListItem_auctionResult\n        artistID\n        internalID\n        id\n      }\n    }\n  }\n}\n\nfragment CollectionsRail_collectionsModule on HomePageMarketingCollectionsModule {\n  results {\n    title\n    slug\n    artworksConnection(first: 3) {\n      counts {\n        total\n      }\n      edges {\n        node {\n          image {\n            url(version: \"large\")\n          }\n          id\n        }\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment EmailConfirmationBanner_me on Me {\n  canRequestEmailConfirmation\n}\n\nfragment FairsRail_fairsModule on HomePageFairsModule {\n  results {\n    id\n    internalID\n    slug\n    profile {\n      slug\n      id\n    }\n    name\n    exhibitionPeriod(format: SHORT)\n    image {\n      url(version: \"large\")\n    }\n    location {\n      city\n      country\n      id\n    }\n    followedArtistArtworks: filterArtworksConnection(first: 2, input: {includeArtworksByFollowedArtists: true}) {\n      edges {\n        node {\n          image {\n            url(version: \"large\")\n          }\n          id\n        }\n      }\n      id\n    }\n    otherArtworks: filterArtworksConnection(first: 2) {\n      edges {\n        node {\n          image {\n            url(version: \"large\")\n          }\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment GenericGrid_artworks on Artwork {\n  id\n  image {\n    aspect_ratio: aspectRatio\n  }\n  ...ArtworkGridItem_artwork\n}\n\nfragment HomeHero_homePage_1IwJ0h on HomePage {\n  heroUnits(platform: MOBILE) {\n    title\n    subtitle\n    creditLine\n    linkText\n    href\n    backgroundImageURL(version: $heroImageVersion)\n    id\n  }\n}\n\nfragment Home_articlesConnection on ArticleConnection {\n  ...ArticlesRail_articlesConnection\n}\n\nfragment Home_featured on ViewingRoomConnection {\n  ...ViewingRoomsListFeatured_featured\n}\n\nfragment Home_homePageAbove_1IwJ0h on HomePage {\n  followedArtistsArtworkModule: artworkModule(key: FOLLOWED_ARTISTS) {\n    id\n    ...ArtworkRail_rail\n  }\n  activeBidsArtworkModule: artworkModule(key: ACTIVE_BIDS) {\n    id\n    ...ArtworkRail_rail\n  }\n  salesModule {\n    ...SalesRail_salesModule\n  }\n  recommendedArtistsArtistModule: artistModule(key: SUGGESTED) {\n    id\n    ...ArtistRail_rail\n  }\n  ...HomeHero_homePage_1IwJ0h\n}\n\nfragment Home_homePageBelow_1IwJ0h on HomePage {\n  recentlyViewedWorksArtworkModule: artworkModule(key: RECENTLY_VIEWED_WORKS) {\n    id\n    ...ArtworkRail_rail\n  }\n  similarToRecentlyViewedArtworkModule: artworkModule(key: SIMILAR_TO_RECENTLY_VIEWED) {\n    id\n    ...ArtworkRail_rail\n  }\n  popularArtistsArtistModule: artistModule(key: POPULAR) {\n    id\n    ...ArtistRail_rail\n  }\n  fairsModule {\n    ...FairsRail_fairsModule\n  }\n  marketingCollectionsModule {\n    ...CollectionsRail_collectionsModule\n  }\n  ...HomeHero_homePage_1IwJ0h\n  ...Trove_trove_1IwJ0h\n}\n\nfragment Home_meAbove on Me {\n  ...EmailConfirmationBanner_me\n  ...LotsByFollowedArtistsRail_me\n  ...NewWorksForYouRail_me\n  ...RecommendedArtistsRail_me\n}\n\nfragment Home_meBelow on Me {\n  ...AuctionResultsRail_me\n}\n\nfragment Home_showsByFollowedArtists on ShowConnection {\n  ...ShowsRail_showsConnection\n}\n\nfragment LotsByFollowedArtistsRail_me on Me {\n  lotsByFollowedArtistsConnection(first: 6, includeArtworksByFollowedArtists: true, isAuction: true, liveSale: true) {\n    pageInfo {\n      hasNextPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        href\n        saleArtwork {\n          ...SaleArtworkTileRailCard_saleArtwork\n          id\n        }\n        __typename\n      }\n      cursor\n      id\n    }\n  }\n}\n\nfragment NewWorksForYouRail_me on Me {\n  newWorksByInterestingArtists(first: 6) {\n    pageInfo {\n      hasNextPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        ...SmallTileRail_artworks\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment RecommendedArtistsRail_me on Me {\n  artistRecommendations(first: 6) {\n    edges {\n      node {\n        name\n        id\n        slug\n        internalID\n        href\n        formattedNationalityAndBirthday\n        image {\n          url(version: \"small\")\n        }\n        basedOn {\n          name\n          id\n        }\n        isFollowed\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment SaleArtworkTileRailCard_saleArtwork on SaleArtwork {\n  artwork {\n    artistNames\n    date\n    href\n    image {\n      imageURL: url(version: \"small\")\n      aspectRatio\n    }\n    internalID\n    slug\n    saleMessage\n    title\n    id\n  }\n  counts {\n    bidderPositions\n  }\n  currentBid {\n    display\n  }\n  lotLabel\n  sale {\n    isAuction\n    isClosed\n    displayTimelyAt\n    id\n  }\n}\n\nfragment SalesRail_salesModule on HomePageSalesModule {\n  results {\n    id\n    slug\n    internalID\n    href\n    name\n    liveURLIfOpen\n    liveStartAt\n    displayTimelyAt\n    saleArtworksConnection(first: 3) {\n      edges {\n        node {\n          artwork {\n            image {\n              url(version: \"large\")\n            }\n            id\n          }\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment ShowCard_show on Show {\n  name\n  formattedStartAt: startAt(format: \"MMM D\")\n  formattedEndAt: endAt(format: \"MMM D\")\n  href\n  metaImage {\n    url(version: \"small\")\n  }\n  partner {\n    __typename\n    ... on Partner {\n      name\n    }\n    ... on ExternalPartner {\n      name\n      id\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ShowsRail_showsConnection on ShowConnection {\n  edges {\n    node {\n      internalID\n      slug\n      ...ShowCard_show\n      id\n    }\n  }\n}\n\nfragment SmallTileRail_artworks on Artwork {\n  href\n  saleMessage\n  artistNames\n  slug\n  internalID\n  sale {\n    isAuction\n    isClosed\n    displayTimelyAt\n    endAt\n    id\n  }\n  saleArtwork {\n    counts {\n      bidderPositions\n    }\n    currentBid {\n      display\n    }\n    id\n  }\n  partner {\n    name\n    id\n  }\n  image {\n    imageURL\n  }\n}\n\nfragment Trove_trove_1IwJ0h on HomePage {\n  heroUnits(platform: MOBILE) {\n    title\n    subtitle\n    creditLine\n    href\n    backgroundImageURL(version: $heroImageVersion)\n    id\n  }\n}\n\nfragment ViewingRoomsListFeatured_featured on ViewingRoomConnection {\n  edges {\n    node {\n      internalID\n      title\n      slug\n      heroImage: image {\n        imageURLs {\n          normalized\n        }\n      }\n      status\n      distanceToOpen(short: true)\n      distanceToClose(short: true)\n      partner {\n        name\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "47e37daf6f61eb4bf2e56bd8bc9e4f87";

export default node;
