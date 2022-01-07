/**
 * @generated SignedSource<<573982e272417a1eaad485f17a8a41ea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkAboveTheFoldQuery$variables = {
  artworkID: string;
};
export type ArtworkAboveTheFoldQueryVariables = ArtworkAboveTheFoldQuery$variables;
export type ArtworkAboveTheFoldQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"Artwork_artworkAboveTheFold">;
  } | null;
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"Artwork_me">;
  } | null;
};
export type ArtworkAboveTheFoldQueryResponse = ArtworkAboveTheFoldQuery$data;
export type ArtworkAboveTheFoldQuery = {
  variables: ArtworkAboveTheFoldQueryVariables;
  response: ArtworkAboveTheFoldQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "artworkID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artworkID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
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
  "name": "width",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
},
v9 = [
  (v6/*: any*/),
  (v2/*: any*/)
],
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "Partner",
  "kind": "LinkedField",
  "name": "partner",
  "plural": false,
  "selections": (v9/*: any*/),
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cents",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "display",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "dimensions",
  "kind": "LinkedField",
  "name": "dimensions",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "in",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cm",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "saleMessage",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "editionOf",
  "storageKey": null
},
v16 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "details",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtworkAboveTheFoldQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Artwork_artworkAboveTheFold"
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
            "name": "Artwork_me"
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
    "name": "ArtworkAboveTheFoldQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          (v5/*: any*/),
          {
            "alias": "is_saved",
            "args": null,
            "kind": "ScalarField",
            "name": "isSaved",
            "storageKey": null
          },
          {
            "alias": "is_hangable",
            "args": null,
            "kind": "ScalarField",
            "name": "isHangable",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artists",
            "plural": true,
            "selections": [
              (v6/*: any*/),
              (v2/*: any*/),
              (v5/*: any*/),
              (v4/*: any*/),
              (v3/*: any*/),
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
                "name": "isConsignable",
                "storageKey": null
              }
            ],
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
                "name": "url",
                "storageKey": null
              },
              (v7/*: any*/),
              (v8/*: any*/)
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
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isLiveOpen",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isPreview",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "liveStartAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endAt",
                "storageKey": null
              },
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startAt",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Bidder",
                "kind": "LinkedField",
                "name": "registrationStatus",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "qualifiedForBidding",
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isRegistrationClosed",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "requireIdentityVerification",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isBenefit",
                "storageKey": null
              },
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isWithBuyersPremium",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "widthCm",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "heightCm",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isInAuction",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "medium",
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
            "alias": "cultural_maker",
            "args": null,
            "kind": "ScalarField",
            "name": "culturalMaker",
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
                "kind": "ScalarField",
                "name": "lotLabel",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "estimate",
                "storageKey": null
              },
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "BidIncrementsFormatted",
                "kind": "LinkedField",
                "name": "increments",
                "plural": true,
                "selections": [
                  (v11/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "reserveMessage",
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
                  (v12/*: any*/)
                ],
                "storageKey": null
              },
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
              }
            ],
            "storageKey": null
          },
          (v10/*: any*/),
          (v13/*: any*/),
          {
            "alias": "edition_of",
            "args": null,
            "kind": "ScalarField",
            "name": "editionOf",
            "storageKey": null
          },
          {
            "alias": "attribution_class",
            "args": null,
            "concreteType": "AttributionClass",
            "kind": "LinkedField",
            "name": "attributionClass",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "shortDescription",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "images",
            "plural": true,
            "selections": [
              {
                "alias": "url",
                "args": null,
                "kind": "ScalarField",
                "name": "imageURL",
                "storageKey": null
              },
              (v7/*: any*/),
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "imageVersions",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "DeepZoom",
                "kind": "LinkedField",
                "name": "deepZoom",
                "plural": false,
                "selections": [
                  {
                    "alias": "image",
                    "args": null,
                    "concreteType": "DeepZoomImage",
                    "kind": "LinkedField",
                    "name": "Image",
                    "plural": false,
                    "selections": [
                      {
                        "alias": "tileSize",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "TileSize",
                        "storageKey": null
                      },
                      {
                        "alias": "url",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "Url",
                        "storageKey": null
                      },
                      {
                        "alias": "format",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "Format",
                        "storageKey": null
                      },
                      {
                        "alias": "size",
                        "args": null,
                        "concreteType": "DeepZoomImageSize",
                        "kind": "LinkedField",
                        "name": "Size",
                        "plural": false,
                        "selections": [
                          {
                            "alias": "width",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "Width",
                            "storageKey": null
                          },
                          {
                            "alias": "height",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "Height",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
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
            "name": "isAcquireable",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isOfferable",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isInquireable",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "availability",
            "storageKey": null
          },
          (v14/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isForSale",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "EditionSet",
            "kind": "LinkedField",
            "name": "editionSets",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v13/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isBuyNowable",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "live",
                "value": true
              }
            ],
            "concreteType": "LotStanding",
            "kind": "LinkedField",
            "name": "myLotStanding",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "BidderPosition",
                "kind": "LinkedField",
                "name": "mostRecentBid",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "BidderPositionMaxBid",
                    "kind": "LinkedField",
                    "name": "maxBid",
                    "plural": false,
                    "selections": [
                      (v11/*: any*/),
                      (v12/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "BidderPosition",
                "kind": "LinkedField",
                "name": "activeBid",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isWinning",
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "myLotStanding(live:true)"
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isPriceHidden",
            "storageKey": null
          },
          (v15/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "kind": "LinkedField",
            "name": "signatureInfo",
            "plural": false,
            "selections": (v16/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artist",
            "plural": false,
            "selections": (v9/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "AttributionClass",
            "kind": "LinkedField",
            "name": "attributionClass",
            "plural": false,
            "selections": (v9/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "category",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "manufacturer",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "publisher",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "kind": "LinkedField",
            "name": "conditionDescription",
            "plural": false,
            "selections": (v16/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "kind": "LinkedField",
            "name": "certificateOfAuthenticity",
            "plural": false,
            "selections": (v16/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "kind": "LinkedField",
            "name": "framed",
            "plural": false,
            "selections": (v16/*: any*/),
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
            "concreteType": "InquiryQuestion",
            "kind": "LinkedField",
            "name": "inquiryQuestions",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "question",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "shippingOrigin",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "shippingInfo",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "priceIncludesTaxDisplay",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isBiddable",
            "storageKey": null
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "identityVerified",
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0e2b6cbdd2a74d06241f4c0303b0b09c",
    "id": null,
    "metadata": {},
    "name": "ArtworkAboveTheFoldQuery",
    "operationKind": "query",
    "text": "query ArtworkAboveTheFoldQuery(\n  $artworkID: String!\n) {\n  artwork(id: $artworkID) {\n    ...Artwork_artworkAboveTheFold\n    id\n  }\n  me {\n    ...Artwork_me\n    id\n  }\n}\n\nfragment ArtworkActions_artwork on Artwork {\n  id\n  internalID\n  slug\n  title\n  href\n  is_saved: isSaved\n  is_hangable: isHangable\n  artists {\n    name\n    id\n  }\n  image {\n    url\n  }\n  sale {\n    isAuction\n    isClosed\n    id\n  }\n  widthCm\n  heightCm\n}\n\nfragment ArtworkExtraLinks_artwork on Artwork {\n  isAcquireable\n  isInAuction\n  isOfferable\n  title\n  isForSale\n  sale {\n    isClosed\n    isBenefit\n    partner {\n      name\n      id\n    }\n    id\n  }\n  artists {\n    isConsignable\n    name\n    id\n  }\n  artist {\n    name\n    id\n  }\n}\n\nfragment ArtworkHeader_artwork on Artwork {\n  ...ArtworkActions_artwork\n  ...ArtworkTombstone_artwork\n  images {\n    ...ImageCarousel_images\n    url: imageURL\n    imageVersions\n  }\n  title\n  href\n  internalID\n  slug\n  artists {\n    name\n    id\n  }\n}\n\nfragment ArtworkTombstone_artwork on Artwork {\n  title\n  isInAuction\n  medium\n  date\n  cultural_maker: culturalMaker\n  saleArtwork {\n    lotLabel\n    estimate\n    id\n  }\n  partner {\n    name\n    id\n  }\n  sale {\n    isClosed\n    id\n  }\n  artists {\n    name\n    href\n    ...FollowArtistLink_artist\n    id\n  }\n  dimensions {\n    in\n    cm\n  }\n  edition_of: editionOf\n  attribution_class: attributionClass {\n    shortDescription\n    id\n  }\n}\n\nfragment Artwork_artworkAboveTheFold on Artwork {\n  ...ArtworkHeader_artwork\n  ...CommercialInformation_artwork\n  slug\n  internalID\n  id\n  isAcquireable\n  isOfferable\n  isBiddable\n  isInquireable\n  availability\n}\n\nfragment Artwork_me on Me {\n  ...CommercialInformation_me\n}\n\nfragment AuctionPrice_artwork on Artwork {\n  sale {\n    internalID\n    isWithBuyersPremium\n    isClosed\n    isLiveOpen\n    id\n  }\n  saleArtwork {\n    reserveMessage\n    currentBid {\n      display\n    }\n    counts {\n      bidderPositions\n    }\n    id\n  }\n  myLotStanding(live: true) {\n    activeBid {\n      isWinning\n      id\n    }\n    mostRecentBid {\n      maxBid {\n        display\n      }\n      id\n    }\n  }\n}\n\nfragment BidButton_artwork on Artwork {\n  slug\n  sale {\n    slug\n    registrationStatus {\n      qualifiedForBidding\n      id\n    }\n    isPreview\n    isLiveOpen\n    isClosed\n    isRegistrationClosed\n    requireIdentityVerification\n    id\n  }\n  myLotStanding(live: true) {\n    mostRecentBid {\n      maxBid {\n        cents\n      }\n      id\n    }\n  }\n  saleArtwork {\n    increments {\n      cents\n    }\n    id\n  }\n}\n\nfragment BidButton_me on Me {\n  identityVerified\n}\n\nfragment BuyNowButton_artwork on Artwork {\n  internalID\n  slug\n  saleMessage\n}\n\nfragment CollapsibleArtworkDetails_artwork on Artwork {\n  image {\n    url\n    width\n    height\n  }\n  internalID\n  title\n  date\n  saleMessage\n  attributionClass {\n    name\n    id\n  }\n  category\n  manufacturer\n  publisher\n  medium\n  conditionDescription {\n    details\n  }\n  certificateOfAuthenticity {\n    details\n  }\n  framed {\n    details\n  }\n  dimensions {\n    in\n    cm\n  }\n  signatureInfo {\n    details\n  }\n  artistNames\n}\n\nfragment CommercialButtons_artwork on Artwork {\n  slug\n  isAcquireable\n  isOfferable\n  isInquireable\n  isInAuction\n  isBuyNowable\n  isForSale\n  editionSets {\n    id\n  }\n  sale {\n    isClosed\n    id\n  }\n  ...BuyNowButton_artwork\n  ...BidButton_artwork\n  ...MakeOfferButton_artwork\n  ...InquiryButtons_artwork\n}\n\nfragment CommercialButtons_me on Me {\n  ...BidButton_me\n}\n\nfragment CommercialEditionSetInformation_artwork on Artwork {\n  editionSets {\n    id\n    internalID\n    saleMessage\n    editionOf\n    dimensions {\n      in\n      cm\n    }\n  }\n  ...CommercialPartnerInformation_artwork\n}\n\nfragment CommercialInformation_artwork on Artwork {\n  isAcquireable\n  isOfferable\n  isInquireable\n  isInAuction\n  availability\n  saleMessage\n  isForSale\n  internalID\n  slug\n  artists {\n    isConsignable\n    id\n  }\n  editionSets {\n    id\n  }\n  sale {\n    internalID\n    isClosed\n    isAuction\n    isLiveOpen\n    isPreview\n    liveStartAt\n    endAt\n    slug\n    startAt\n    id\n  }\n  ...CommercialButtons_artwork\n  ...CommercialPartnerInformation_artwork\n  ...CommercialEditionSetInformation_artwork\n  ...ArtworkExtraLinks_artwork\n  ...AuctionPrice_artwork\n}\n\nfragment CommercialInformation_me on Me {\n  ...CommercialButtons_me\n}\n\nfragment CommercialPartnerInformation_artwork on Artwork {\n  availability\n  isAcquireable\n  isForSale\n  isOfferable\n  shippingOrigin\n  shippingInfo\n  priceIncludesTaxDisplay\n  partner {\n    name\n    id\n  }\n}\n\nfragment FollowArtistLink_artist on Artist {\n  id\n  slug\n  internalID\n  is_followed: isFollowed\n}\n\nfragment ImageCarousel_images on Image {\n  url: imageURL\n  width\n  height\n  imageVersions\n  deepZoom {\n    image: Image {\n      tileSize: TileSize\n      url: Url\n      format: Format\n      size: Size {\n        width: Width\n        height: Height\n      }\n    }\n  }\n}\n\nfragment InquiryButtons_artwork on Artwork {\n  image {\n    url\n    width\n    height\n  }\n  slug\n  internalID\n  isPriceHidden\n  title\n  date\n  medium\n  dimensions {\n    in\n    cm\n  }\n  editionOf\n  signatureInfo {\n    details\n  }\n  artist {\n    name\n    id\n  }\n  ...InquiryModal_artwork\n}\n\nfragment InquiryModal_artwork on Artwork {\n  ...CollapsibleArtworkDetails_artwork\n  internalID\n  slug\n  inquiryQuestions {\n    internalID\n    question\n    id\n  }\n}\n\nfragment MakeOfferButton_artwork on Artwork {\n  internalID\n}\n"
  }
};
})();

(node as any).hash = "ab8df2123e04578ceb7ac3bf21eed61a";

export default node;
