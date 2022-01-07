/**
 * @generated SignedSource<<af1723ddde58c75209e72bd0e078f4a3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AuctionPriceTestsQuery$variables = {};
export type AuctionPriceTestsQueryVariables = AuctionPriceTestsQuery$variables;
export type AuctionPriceTestsQuery$data = {
  readonly artwork: {
    readonly " $fragmentSpreads": FragmentRefs<"AuctionPrice_artwork">;
  } | null;
};
export type AuctionPriceTestsQueryResponse = AuctionPriceTestsQuery$data;
export type AuctionPriceTestsQuery$rawResponse = {
  readonly artwork: {
    readonly sale: {
      readonly internalID: string;
      readonly isWithBuyersPremium: boolean | null;
      readonly isClosed: boolean | null;
      readonly isLiveOpen: boolean | null;
      readonly id: string;
    } | null;
    readonly saleArtwork: {
      readonly reserveMessage: string | null;
      readonly currentBid: {
        readonly display: string | null;
      } | null;
      readonly counts: {
        readonly bidderPositions: any | null;
      } | null;
      readonly id: string;
    } | null;
    readonly myLotStanding: ReadonlyArray<{
      readonly activeBid: {
        readonly isWinning: boolean | null;
        readonly id: string;
      } | null;
      readonly mostRecentBid: {
        readonly maxBid: {
          readonly display: string | null;
        } | null;
        readonly id: string;
      } | null;
    }> | null;
    readonly id: string;
  } | null;
};
export type AuctionPriceTestsQueryRawResponse = AuctionPriceTestsQuery$rawResponse;
export type AuctionPriceTestsQuery = {
  variables: AuctionPriceTestsQueryVariables;
  response: AuctionPriceTestsQuery$data;
  rawResponse: AuctionPriceTestsQuery$rawResponse;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "auction_artwork_estimate_premium"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "display",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AuctionPriceTestsQuery",
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
            "name": "AuctionPrice_artwork"
          }
        ],
        "storageKey": "artwork(id:\"auction_artwork_estimate_premium\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AuctionPriceTestsQuery",
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
                "name": "internalID",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isWithBuyersPremium",
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
                "name": "isLiveOpen",
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
                "selections": (v2/*: any*/),
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
              },
              (v1/*: any*/)
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
                  (v1/*: any*/)
                ],
                "storageKey": null
              },
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
                    "selections": (v2/*: any*/),
                    "storageKey": null
                  },
                  (v1/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "myLotStanding(live:true)"
          },
          (v1/*: any*/)
        ],
        "storageKey": "artwork(id:\"auction_artwork_estimate_premium\")"
      }
    ]
  },
  "params": {
    "cacheID": "6d244de9906e4602332d1cf51d127e2b",
    "id": null,
    "metadata": {},
    "name": "AuctionPriceTestsQuery",
    "operationKind": "query",
    "text": "query AuctionPriceTestsQuery {\n  artwork(id: \"auction_artwork_estimate_premium\") {\n    ...AuctionPrice_artwork\n    id\n  }\n}\n\nfragment AuctionPrice_artwork on Artwork {\n  sale {\n    internalID\n    isWithBuyersPremium\n    isClosed\n    isLiveOpen\n    id\n  }\n  saleArtwork {\n    reserveMessage\n    currentBid {\n      display\n    }\n    counts {\n      bidderPositions\n    }\n    id\n  }\n  myLotStanding(live: true) {\n    activeBid {\n      isWinning\n      id\n    }\n    mostRecentBid {\n      maxBid {\n        display\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e19a32c63c473884513a6119095fe8ad";

export default node;
