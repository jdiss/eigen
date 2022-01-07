/**
 * @generated SignedSource<<73d811b9cc1177fb9feadd4d02f1f61b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomePageHeroUnitImageVersion = "NARROW" | "WIDE" | "%future added value";
export type HomeBelowTheFoldQuery$variables = {
  heroImageVersion?: HomePageHeroUnitImageVersion | null;
};
export type HomeBelowTheFoldQueryVariables = HomeBelowTheFoldQuery$variables;
export type HomeBelowTheFoldQuery$data = {
  readonly homePage: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_homePageBelow">;
  } | null;
  readonly featured: {
    readonly " $fragmentSpreads": FragmentRefs<"Home_featured">;
  } | null;
  readonly me: {
    readonly showsByFollowedArtists: {
      readonly " $fragmentSpreads": FragmentRefs<"Home_showsByFollowedArtists">;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"Home_meBelow" | "RecommendedArtistsRail_me" | "AuctionResultsRail_me">;
  } | null;
};
export type HomeBelowTheFoldQueryResponse = HomeBelowTheFoldQuery$data;
export type HomeBelowTheFoldQuery = {
  variables: HomeBelowTheFoldQueryVariables;
  response: HomeBelowTheFoldQuery$data;
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
    "kind": "Literal",
    "name": "featured",
    "value": true
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "status",
    "value": "RUNNING_AND_UPCOMING"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "key",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "display",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v11 = [
  (v10/*: any*/),
  (v3/*: any*/)
],
v12 = {
  "alias": null,
  "args": null,
  "concreteType": "Partner",
  "kind": "LinkedField",
  "name": "partner",
  "plural": false,
  "selections": (v11/*: any*/),
  "storageKey": null
},
v13 = {
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
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "aspectRatio",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "concreteType": "Artist",
  "kind": "LinkedField",
  "name": "basedOn",
  "plural": false,
  "selections": (v11/*: any*/),
  "storageKey": null
},
v17 = [
  (v6/*: any*/)
],
v18 = {
  "kind": "InlineFragment",
  "selections": [
    (v3/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v19 = [
  (v3/*: any*/),
  (v4/*: any*/),
  (v5/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Artwork",
    "kind": "LinkedField",
    "name": "results",
    "plural": true,
    "selections": [
      (v6/*: any*/),
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
        "name": "artistNames",
        "storageKey": null
      },
      (v7/*: any*/),
      (v8/*: any*/),
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
              (v9/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lotLabel",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v12/*: any*/),
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
            "alias": "aspect_ratio",
            "args": null,
            "kind": "ScalarField",
            "name": "aspectRatio",
            "storageKey": null
          },
          (v13/*: any*/),
          (v14/*: any*/)
        ],
        "storageKey": null
      },
      (v3/*: any*/),
      (v4/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "date",
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
    "name": "context",
    "plural": false,
    "selections": [
      (v15/*: any*/),
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
              (v7/*: any*/),
              (v8/*: any*/),
              (v6/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v16/*: any*/)
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
              (v6/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "type": "HomePageFollowedArtistArtworkModule",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v17/*: any*/),
        "type": "Fair",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v17/*: any*/),
        "type": "Gene",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": (v17/*: any*/),
        "type": "Sale",
        "abstractKey": null
      },
      (v18/*: any*/)
    ],
    "storageKey": null
  }
],
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "formattedNationalityAndBirthday",
  "storageKey": null
},
v21 = [
  {
    "alias": null,
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
  }
],
v22 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": (v21/*: any*/),
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isFollowed",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "image",
  "plural": false,
  "selections": [
    (v13/*: any*/)
  ],
  "storageKey": null
},
v25 = {
  "kind": "Literal",
  "name": "first",
  "value": 2
},
v26 = {
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
        (v24/*: any*/),
        (v3/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v27 = [
  (v26/*: any*/),
  (v3/*: any*/)
],
v28 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  }
],
v29 = [
  {
    "kind": "Literal",
    "name": "short",
    "value": true
  }
],
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v31 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 6
  }
],
v32 = [
  {
    "kind": "Literal",
    "name": "format",
    "value": "MMM D"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeBelowTheFoldQuery",
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
            "args": [
              {
                "kind": "Variable",
                "name": "heroImageVersion",
                "variableName": "heroImageVersion"
              }
            ],
            "kind": "FragmentSpread",
            "name": "Home_homePageBelow"
          }
        ],
        "storageKey": null
      },
      {
        "alias": "featured",
        "args": (v1/*: any*/),
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
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RecommendedArtistsRail_me"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AuctionResultsRail_me"
          },
          {
            "alias": null,
            "args": (v2/*: any*/),
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
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HomeBelowTheFoldQuery",
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
            "selections": (v19/*: any*/),
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
            "selections": (v19/*: any*/),
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
            "selections": [
              (v3/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Artist",
                "kind": "LinkedField",
                "name": "results",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v6/*: any*/),
                  (v10/*: any*/),
                  (v20/*: any*/),
                  (v22/*: any*/),
                  (v16/*: any*/),
                  (v23/*: any*/)
                ],
                "storageKey": null
              }
            ],
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
                  (v3/*: any*/),
                  (v8/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Profile",
                    "kind": "LinkedField",
                    "name": "profile",
                    "plural": false,
                    "selections": [
                      (v7/*: any*/),
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/),
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
                  (v24/*: any*/),
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
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": "followedArtistArtworks",
                    "args": [
                      (v25/*: any*/),
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
                    "selections": (v27/*: any*/),
                    "storageKey": "filterArtworksConnection(first:2,input:{\"includeArtworksByFollowedArtists\":true})"
                  },
                  {
                    "alias": "otherArtworks",
                    "args": [
                      (v25/*: any*/)
                    ],
                    "concreteType": "FilterArtworksConnection",
                    "kind": "LinkedField",
                    "name": "filterArtworksConnection",
                    "plural": false,
                    "selections": (v27/*: any*/),
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
                  (v4/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": (v28/*: any*/),
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
                      (v26/*: any*/),
                      (v3/*: any*/)
                    ],
                    "storageKey": "artworksConnection(first:3)"
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
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
              (v4/*: any*/),
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
              (v6/*: any*/),
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
              (v3/*: any*/)
            ],
            "storageKey": "heroUnits(platform:\"MOBILE\")"
          }
        ],
        "storageKey": null
      },
      {
        "alias": "featured",
        "args": (v1/*: any*/),
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
                  (v8/*: any*/),
                  (v4/*: any*/),
                  (v7/*: any*/),
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
                    "args": (v29/*: any*/),
                    "kind": "ScalarField",
                    "name": "distanceToOpen",
                    "storageKey": "distanceToOpen(short:true)"
                  },
                  {
                    "alias": null,
                    "args": (v29/*: any*/),
                    "kind": "ScalarField",
                    "name": "distanceToClose",
                    "storageKey": "distanceToClose(short:true)"
                  },
                  (v12/*: any*/)
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
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v28/*: any*/),
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
                  (v30/*: any*/),
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
                      (v3/*: any*/),
                      (v8/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artist",
                        "kind": "LinkedField",
                        "name": "artist",
                        "plural": false,
                        "selections": (v11/*: any*/),
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
                              (v14/*: any*/)
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
                          (v9/*: any*/),
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
                      (v4/*: any*/),
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
          {
            "alias": null,
            "args": (v31/*: any*/),
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
                      (v10/*: any*/),
                      (v3/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      (v6/*: any*/),
                      (v20/*: any*/),
                      (v22/*: any*/),
                      (v16/*: any*/),
                      (v23/*: any*/),
                      (v15/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v30/*: any*/)
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
              }
            ],
            "storageKey": "artistRecommendations(first:6)"
          },
          {
            "alias": null,
            "args": (v31/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "RecommendedArtistsRail_artistRecommendations",
            "kind": "LinkedHandle",
            "name": "artistRecommendations"
          },
          {
            "alias": null,
            "args": (v2/*: any*/),
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
                      (v8/*: any*/),
                      (v7/*: any*/),
                      (v10/*: any*/),
                      {
                        "alias": "formattedStartAt",
                        "args": (v32/*: any*/),
                        "kind": "ScalarField",
                        "name": "startAt",
                        "storageKey": "startAt(format:\"MMM D\")"
                      },
                      {
                        "alias": "formattedEndAt",
                        "args": (v32/*: any*/),
                        "kind": "ScalarField",
                        "name": "endAt",
                        "storageKey": "endAt(format:\"MMM D\")"
                      },
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "metaImage",
                        "plural": false,
                        "selections": (v21/*: any*/),
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
                          (v15/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v10/*: any*/)
                            ],
                            "type": "Partner",
                            "abstractKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "selections": (v11/*: any*/),
                            "type": "ExternalPartner",
                            "abstractKey": null
                          },
                          (v18/*: any*/)
                        ],
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
            "storageKey": "showsByFollowedArtists(first:10,status:\"RUNNING_AND_UPCOMING\")"
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5fbfb1de4814040975e5ac3f82152443",
    "id": null,
    "metadata": {},
    "name": "HomeBelowTheFoldQuery",
    "operationKind": "query",
    "text": "query HomeBelowTheFoldQuery(\n  $heroImageVersion: HomePageHeroUnitImageVersion\n) {\n  homePage @optionalField {\n    ...Home_homePageBelow_1IwJ0h\n  }\n  featured: viewingRooms(featured: true) @optionalField {\n    ...Home_featured\n  }\n  me @optionalField {\n    ...Home_meBelow\n    ...RecommendedArtistsRail_me\n    ...AuctionResultsRail_me\n    showsByFollowedArtists(first: 10, status: RUNNING_AND_UPCOMING) @optionalField {\n      ...Home_showsByFollowedArtists\n    }\n    id\n  }\n}\n\nfragment ArtistRail_rail on HomePageArtistModule {\n  id\n  key\n  results {\n    id\n    slug\n    internalID\n    href\n    name\n    formattedNationalityAndBirthday\n    image {\n      url(version: \"small\")\n    }\n    basedOn {\n      name\n      id\n    }\n    isFollowed\n  }\n}\n\nfragment ArtworkGridItem_artwork on Artwork {\n  title\n  date\n  saleMessage\n  slug\n  internalID\n  artistNames\n  href\n  sale {\n    isAuction\n    isClosed\n    displayTimelyAt\n    endAt\n    id\n  }\n  saleArtwork {\n    counts {\n      bidderPositions\n    }\n    currentBid {\n      display\n    }\n    lotLabel\n    id\n  }\n  partner {\n    name\n    id\n  }\n  image {\n    url(version: \"large\")\n    aspectRatio\n  }\n}\n\nfragment ArtworkRail_rail on HomePageArtworkModule {\n  title\n  key\n  results {\n    ...SmallTileRail_artworks\n    ...GenericGrid_artworks\n    id\n  }\n  context {\n    __typename\n    ... on HomePageRelatedArtistArtworkModule {\n      __typename\n      artist {\n        slug\n        internalID\n        href\n        id\n      }\n      basedOn {\n        name\n        id\n      }\n    }\n    ... on HomePageFollowedArtistArtworkModule {\n      artist {\n        href\n        id\n      }\n    }\n    ... on Fair {\n      href\n    }\n    ... on Gene {\n      href\n    }\n    ... on Sale {\n      href\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment AuctionResultListItem_auctionResult on AuctionResult {\n  currency\n  dateText\n  id\n  internalID\n  artist {\n    name\n    id\n  }\n  images {\n    thumbnail {\n      url(version: \"square140\")\n      height\n      width\n      aspectRatio\n    }\n  }\n  estimate {\n    low\n  }\n  mediumText\n  organization\n  boughtIn\n  performance {\n    mid\n  }\n  priceRealized {\n    cents\n    display\n    displayUSD\n  }\n  saleDate\n  title\n}\n\nfragment AuctionResultsRail_me on Me {\n  auctionResultsByFollowedArtists(first: 3) {\n    totalCount\n    edges {\n      cursor\n      node {\n        ...AuctionResultListItem_auctionResult\n        artistID\n        internalID\n        id\n      }\n    }\n  }\n}\n\nfragment CollectionsRail_collectionsModule on HomePageMarketingCollectionsModule {\n  results {\n    title\n    slug\n    artworksConnection(first: 3) {\n      counts {\n        total\n      }\n      edges {\n        node {\n          image {\n            url(version: \"large\")\n          }\n          id\n        }\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment FairsRail_fairsModule on HomePageFairsModule {\n  results {\n    id\n    internalID\n    slug\n    profile {\n      slug\n      id\n    }\n    name\n    exhibitionPeriod(format: SHORT)\n    image {\n      url(version: \"large\")\n    }\n    location {\n      city\n      country\n      id\n    }\n    followedArtistArtworks: filterArtworksConnection(first: 2, input: {includeArtworksByFollowedArtists: true}) {\n      edges {\n        node {\n          image {\n            url(version: \"large\")\n          }\n          id\n        }\n      }\n      id\n    }\n    otherArtworks: filterArtworksConnection(first: 2) {\n      edges {\n        node {\n          image {\n            url(version: \"large\")\n          }\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment GenericGrid_artworks on Artwork {\n  id\n  image {\n    aspect_ratio: aspectRatio\n  }\n  ...ArtworkGridItem_artwork\n}\n\nfragment HomeHero_homePage_1IwJ0h on HomePage {\n  heroUnits(platform: MOBILE) {\n    title\n    subtitle\n    creditLine\n    linkText\n    href\n    backgroundImageURL(version: $heroImageVersion)\n    id\n  }\n}\n\nfragment Home_featured on ViewingRoomConnection {\n  ...ViewingRoomsListFeatured_featured\n}\n\nfragment Home_homePageBelow_1IwJ0h on HomePage {\n  recentlyViewedWorksArtworkModule: artworkModule(key: RECENTLY_VIEWED_WORKS) {\n    id\n    ...ArtworkRail_rail\n  }\n  similarToRecentlyViewedArtworkModule: artworkModule(key: SIMILAR_TO_RECENTLY_VIEWED) {\n    id\n    ...ArtworkRail_rail\n  }\n  popularArtistsArtistModule: artistModule(key: POPULAR) {\n    id\n    ...ArtistRail_rail\n  }\n  fairsModule {\n    ...FairsRail_fairsModule\n  }\n  marketingCollectionsModule {\n    ...CollectionsRail_collectionsModule\n  }\n  ...HomeHero_homePage_1IwJ0h\n  ...Trove_trove_1IwJ0h\n}\n\nfragment Home_meBelow on Me {\n  ...AuctionResultsRail_me\n}\n\nfragment Home_showsByFollowedArtists on ShowConnection {\n  ...ShowsRail_showsConnection\n}\n\nfragment RecommendedArtistsRail_me on Me {\n  artistRecommendations(first: 6) {\n    edges {\n      node {\n        name\n        id\n        slug\n        internalID\n        href\n        formattedNationalityAndBirthday\n        image {\n          url(version: \"small\")\n        }\n        basedOn {\n          name\n          id\n        }\n        isFollowed\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment ShowCard_show on Show {\n  name\n  formattedStartAt: startAt(format: \"MMM D\")\n  formattedEndAt: endAt(format: \"MMM D\")\n  href\n  metaImage {\n    url(version: \"small\")\n  }\n  partner {\n    __typename\n    ... on Partner {\n      name\n    }\n    ... on ExternalPartner {\n      name\n      id\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ShowsRail_showsConnection on ShowConnection {\n  edges {\n    node {\n      internalID\n      slug\n      ...ShowCard_show\n      id\n    }\n  }\n}\n\nfragment SmallTileRail_artworks on Artwork {\n  href\n  saleMessage\n  artistNames\n  slug\n  internalID\n  sale {\n    isAuction\n    isClosed\n    displayTimelyAt\n    endAt\n    id\n  }\n  saleArtwork {\n    counts {\n      bidderPositions\n    }\n    currentBid {\n      display\n    }\n    id\n  }\n  partner {\n    name\n    id\n  }\n  image {\n    imageURL\n  }\n}\n\nfragment Trove_trove_1IwJ0h on HomePage {\n  heroUnits(platform: MOBILE) {\n    title\n    subtitle\n    creditLine\n    href\n    backgroundImageURL(version: $heroImageVersion)\n    id\n  }\n}\n\nfragment ViewingRoomsListFeatured_featured on ViewingRoomConnection {\n  edges {\n    node {\n      internalID\n      title\n      slug\n      heroImage: image {\n        imageURLs {\n          normalized\n        }\n      }\n      status\n      distanceToOpen(short: true)\n      distanceToClose(short: true)\n      partner {\n        name\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e278b0b653c6c0af8b171b4cb7a663a8";

export default node;
