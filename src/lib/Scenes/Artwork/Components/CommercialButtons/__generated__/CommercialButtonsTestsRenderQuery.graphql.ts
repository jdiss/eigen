/**
 * @generated SignedSource<<beefa7054dbd40c0bfc6d480167b32f0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommercialButtonsTestsRenderQuery$variables = {};
export type CommercialButtonsTestsRenderQueryVariables = CommercialButtonsTestsRenderQuery$variables;
export type CommercialButtonsTestsRenderQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"CommercialButtons_artwork">;
  } | null;
};
export type CommercialButtonsTestsRenderQueryResponse = CommercialButtonsTestsRenderQuery$data;
export type CommercialButtonsTestsRenderQuery$rawResponse = {
  readonly artwork: {
    readonly slug: string;
    readonly isAcquireable: boolean | null;
    readonly isOfferable: boolean | null;
    readonly isInquireable: boolean | null;
    readonly isInAuction: boolean | null;
    readonly isBuyNowable: boolean | null;
    readonly isForSale: boolean | null;
    readonly editionSets: ReadonlyArray<{
      readonly id: string;
    } | null> | null;
    readonly sale: {
      readonly isClosed: boolean | null;
      readonly id: string;
      readonly slug: string;
      readonly registrationStatus: {
        readonly qualifiedForBidding: boolean | null;
        readonly id: string;
      } | null;
      readonly isPreview: boolean | null;
      readonly isLiveOpen: boolean | null;
      readonly isRegistrationClosed: boolean | null;
      readonly requireIdentityVerification: boolean | null;
    } | null;
    readonly internalID: string;
    readonly saleMessage: string | null;
    readonly myLotStanding: ReadonlyArray<{
      readonly mostRecentBid: {
        readonly maxBid: {
          readonly cents: number | null;
        } | null;
        readonly id: string;
      } | null;
    }> | null;
    readonly saleArtwork: {
      readonly increments: ReadonlyArray<{
        readonly cents: number | null;
      } | null> | null;
      readonly id: string;
    } | null;
    readonly image: {
      readonly url: string | null;
      readonly width: number | null;
      readonly height: number | null;
    } | null;
    readonly isPriceHidden: boolean | null;
    readonly title: string | null;
    readonly date: string | null;
    readonly medium: string | null;
    readonly dimensions: {
      readonly in: string | null;
      readonly cm: string | null;
    } | null;
    readonly editionOf: string | null;
    readonly signatureInfo: {
      readonly details: string | null;
    } | null;
    readonly artist: {
      readonly name: string | null;
      readonly id: string;
    } | null;
    readonly attributionClass: {
      readonly name: string | null;
      readonly id: string;
    } | null;
    readonly category: string | null;
    readonly manufacturer: string | null;
    readonly publisher: string | null;
    readonly conditionDescription: {
      readonly details: string | null;
    } | null;
    readonly certificateOfAuthenticity: {
      readonly details: string | null;
    } | null;
    readonly framed: {
      readonly details: string | null;
    } | null;
    readonly artistNames: string | null;
    readonly inquiryQuestions: ReadonlyArray<{
      readonly internalID: string;
      readonly question: string;
      readonly id: string;
    } | null> | null;
    readonly id: string;
  } | null;
};
export type CommercialButtonsTestsRenderQueryRawResponse = CommercialButtonsTestsRenderQuery$rawResponse;
export type CommercialButtonsTestsRenderQuery = {
  variables: CommercialButtonsTestsRenderQueryVariables;
  response: CommercialButtonsTestsRenderQuery$data;
  rawResponse: CommercialButtonsTestsRenderQuery$rawResponse;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "artworkID"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
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
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "cents",
    "storageKey": null
  }
],
v5 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "details",
    "storageKey": null
  }
],
v6 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  },
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CommercialButtonsTestsRenderQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CommercialButtons_artwork"
          }
        ],
        "storageKey": "artwork(id:\"artworkID\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CommercialButtonsTestsRenderQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
            "name": "isInAuction",
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
              (v2/*: any*/)
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
                "name": "isClosed",
                "storageKey": null
              },
              (v2/*: any*/),
              (v1/*: any*/),
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
                "name": "isPreview",
                "storageKey": null
              },
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
                "name": "isRegistrationClosed",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "requireIdentityVerification",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "saleMessage",
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
                    "selections": (v4/*: any*/),
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
            "concreteType": "SaleArtwork",
            "kind": "LinkedField",
            "name": "saleArtwork",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "BidIncrementsFormatted",
                "kind": "LinkedField",
                "name": "increments",
                "plural": true,
                "selections": (v4/*: any*/),
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "width",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "height",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isPriceHidden",
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
            "name": "medium",
            "storageKey": null
          },
          {
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "editionOf",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "kind": "LinkedField",
            "name": "signatureInfo",
            "plural": false,
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "artist",
            "plural": false,
            "selections": (v6/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "AttributionClass",
            "kind": "LinkedField",
            "name": "attributionClass",
            "plural": false,
            "selections": (v6/*: any*/),
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
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "kind": "LinkedField",
            "name": "certificateOfAuthenticity",
            "plural": false,
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "kind": "LinkedField",
            "name": "framed",
            "plural": false,
            "selections": (v5/*: any*/),
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
          (v2/*: any*/)
        ],
        "storageKey": "artwork(id:\"artworkID\")"
      }
    ]
  },
  "params": {
    "cacheID": "fc5ff50b2c27b1832a259bdd87a6fc02",
    "id": null,
    "metadata": {},
    "name": "CommercialButtonsTestsRenderQuery",
    "operationKind": "query",
    "text": "query CommercialButtonsTestsRenderQuery {\n  artwork(id: \"artworkID\") {\n    ...CommercialButtons_artwork\n    id\n  }\n}\n\nfragment BidButton_artwork on Artwork {\n  slug\n  sale {\n    slug\n    registrationStatus {\n      qualifiedForBidding\n      id\n    }\n    isPreview\n    isLiveOpen\n    isClosed\n    isRegistrationClosed\n    requireIdentityVerification\n    id\n  }\n  myLotStanding(live: true) {\n    mostRecentBid {\n      maxBid {\n        cents\n      }\n      id\n    }\n  }\n  saleArtwork {\n    increments {\n      cents\n    }\n    id\n  }\n}\n\nfragment BuyNowButton_artwork on Artwork {\n  internalID\n  slug\n  saleMessage\n}\n\nfragment CollapsibleArtworkDetails_artwork on Artwork {\n  image {\n    url\n    width\n    height\n  }\n  internalID\n  title\n  date\n  saleMessage\n  attributionClass {\n    name\n    id\n  }\n  category\n  manufacturer\n  publisher\n  medium\n  conditionDescription {\n    details\n  }\n  certificateOfAuthenticity {\n    details\n  }\n  framed {\n    details\n  }\n  dimensions {\n    in\n    cm\n  }\n  signatureInfo {\n    details\n  }\n  artistNames\n}\n\nfragment CommercialButtons_artwork on Artwork {\n  slug\n  isAcquireable\n  isOfferable\n  isInquireable\n  isInAuction\n  isBuyNowable\n  isForSale\n  editionSets {\n    id\n  }\n  sale {\n    isClosed\n    id\n  }\n  ...BuyNowButton_artwork\n  ...BidButton_artwork\n  ...MakeOfferButton_artwork\n  ...InquiryButtons_artwork\n}\n\nfragment InquiryButtons_artwork on Artwork {\n  image {\n    url\n    width\n    height\n  }\n  slug\n  internalID\n  isPriceHidden\n  title\n  date\n  medium\n  dimensions {\n    in\n    cm\n  }\n  editionOf\n  signatureInfo {\n    details\n  }\n  artist {\n    name\n    id\n  }\n  ...InquiryModal_artwork\n}\n\nfragment InquiryModal_artwork on Artwork {\n  ...CollapsibleArtworkDetails_artwork\n  internalID\n  slug\n  inquiryQuestions {\n    internalID\n    question\n    id\n  }\n}\n\nfragment MakeOfferButton_artwork on Artwork {\n  internalID\n}\n"
  }
};
})();

(node as any).hash = "e6032e41bb2e166a864d1a8ddd18cfb5";

export default node;
