/**
 * @generated SignedSource<<90828d36910b8d28ea8007161e8ebc9d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BidButtonTestsQuery$variables = {};
export type BidButtonTestsQueryVariables = BidButtonTestsQuery$variables;
export type BidButtonTestsQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"BidButton_artwork">;
  } | null;
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"BidButton_me">;
  } | null;
};
export type BidButtonTestsQueryResponse = BidButtonTestsQuery$data;
export type BidButtonTestsQuery$rawResponse = {
  readonly artwork: {
    readonly slug: string;
    readonly sale: {
      readonly slug: string;
      readonly registrationStatus: {
        readonly qualifiedForBidding: boolean | null;
        readonly id: string;
      } | null;
      readonly isPreview: boolean | null;
      readonly isLiveOpen: boolean | null;
      readonly isClosed: boolean | null;
      readonly isRegistrationClosed: boolean | null;
      readonly requireIdentityVerification: boolean | null;
      readonly id: string;
    } | null;
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
    readonly id: string;
  } | null;
  readonly me: {
    readonly identityVerified: boolean | null;
    readonly id: string;
  } | null;
};
export type BidButtonTestsQueryRawResponse = BidButtonTestsQuery$rawResponse;
export type BidButtonTestsQuery = {
  variables: BidButtonTestsQueryVariables;
  response: BidButtonTestsQuery$data;
  rawResponse: BidButtonTestsQuery$rawResponse;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "auction_artwork"
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
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "cents",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BidButtonTestsQuery",
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
            "name": "BidButton_artwork"
          }
        ],
        "storageKey": "artwork(id:\"auction_artwork\")"
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
            "name": "BidButton_me"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BidButtonTestsQuery",
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
            "concreteType": "Sale",
            "kind": "LinkedField",
            "name": "sale",
            "plural": false,
            "selections": [
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
                "name": "isClosed",
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
              (v2/*: any*/)
            ],
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
                    "selections": (v3/*: any*/),
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
                "selections": (v3/*: any*/),
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": "artwork(id:\"auction_artwork\")"
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
    "cacheID": "4e56442e91b7dae53dbb45ffc5bf52cd",
    "id": null,
    "metadata": {},
    "name": "BidButtonTestsQuery",
    "operationKind": "query",
    "text": "query BidButtonTestsQuery {\n  artwork(id: \"auction_artwork\") {\n    ...BidButton_artwork\n    id\n  }\n  me {\n    ...BidButton_me\n    id\n  }\n}\n\nfragment BidButton_artwork on Artwork {\n  slug\n  sale {\n    slug\n    registrationStatus {\n      qualifiedForBidding\n      id\n    }\n    isPreview\n    isLiveOpen\n    isClosed\n    isRegistrationClosed\n    requireIdentityVerification\n    id\n  }\n  myLotStanding(live: true) {\n    mostRecentBid {\n      maxBid {\n        cents\n      }\n      id\n    }\n  }\n  saleArtwork {\n    increments {\n      cents\n    }\n    id\n  }\n}\n\nfragment BidButton_me on Me {\n  identityVerified\n}\n"
  }
};
})();

(node as any).hash = "505afd431c2e9bde73b4098d823cc4a1";

export default node;
