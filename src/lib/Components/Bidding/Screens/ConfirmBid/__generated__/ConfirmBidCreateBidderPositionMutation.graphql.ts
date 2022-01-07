/**
 * @generated SignedSource<<29abe7e163cacd8cd192747b04bd077a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type BidderPositionInput = {
  artworkID: string;
  clientMutationId?: string | null;
  maxBidAmountCents: number;
  saleID: string;
};
export type ConfirmBidCreateBidderPositionMutation$variables = {
  input: BidderPositionInput;
};
export type ConfirmBidCreateBidderPositionMutationVariables = ConfirmBidCreateBidderPositionMutation$variables;
export type ConfirmBidCreateBidderPositionMutation$data = {
  readonly createBidderPosition: {
    readonly result: {
      readonly status: string;
      readonly message_header: string | null;
      readonly message_description_md: string | null;
      readonly position: {
        readonly internalID: string;
        readonly suggested_next_bid: {
          readonly cents: number | null;
          readonly display: string | null;
        } | null;
        readonly saleArtwork: {
          readonly reserveMessage: string | null;
          readonly currentBid: {
            readonly display: string | null;
          } | null;
          readonly counts: {
            readonly bidderPositions: any | null;
          } | null;
          readonly artwork: {
            readonly myLotStanding: ReadonlyArray<{
              readonly activeBid: {
                readonly isWinning: boolean | null;
              } | null;
              readonly mostRecentBid: {
                readonly maxBid: {
                  readonly display: string | null;
                } | null;
              } | null;
            }> | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};
export type ConfirmBidCreateBidderPositionMutationResponse = ConfirmBidCreateBidderPositionMutation$data;
export type ConfirmBidCreateBidderPositionMutation = {
  variables: ConfirmBidCreateBidderPositionMutationVariables;
  response: ConfirmBidCreateBidderPositionMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v3 = {
  "alias": "message_header",
  "args": null,
  "kind": "ScalarField",
  "name": "messageHeader",
  "storageKey": null
},
v4 = {
  "alias": "message_description_md",
  "args": null,
  "kind": "ScalarField",
  "name": "messageDescriptionMD",
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
  "name": "display",
  "storageKey": null
},
v7 = {
  "alias": "suggested_next_bid",
  "args": null,
  "concreteType": "BidderPositionSuggestedNextBid",
  "kind": "LinkedField",
  "name": "suggestedNextBid",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cents",
      "storageKey": null
    },
    (v6/*: any*/)
  ],
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "reserveMessage",
  "storageKey": null
},
v9 = [
  (v6/*: any*/)
],
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "SaleArtworkCurrentBid",
  "kind": "LinkedField",
  "name": "currentBid",
  "plural": false,
  "selections": (v9/*: any*/),
  "storageKey": null
},
v11 = {
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
v12 = [
  {
    "kind": "Literal",
    "name": "live",
    "value": true
  }
],
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isWinning",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "BidderPositionMaxBid",
  "kind": "LinkedField",
  "name": "maxBid",
  "plural": false,
  "selections": (v9/*: any*/),
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ConfirmBidCreateBidderPositionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "BidderPositionPayload",
        "kind": "LinkedField",
        "name": "createBidderPosition",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BidderPositionResult",
            "kind": "LinkedField",
            "name": "result",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "BidderPosition",
                "kind": "LinkedField",
                "name": "position",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SaleArtwork",
                    "kind": "LinkedField",
                    "name": "saleArtwork",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artwork",
                        "kind": "LinkedField",
                        "name": "artwork",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": (v12/*: any*/),
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
                                  (v13/*: any*/)
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
                                  (v14/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "myLotStanding(live:true)"
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
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ConfirmBidCreateBidderPositionMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "BidderPositionPayload",
        "kind": "LinkedField",
        "name": "createBidderPosition",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BidderPositionResult",
            "kind": "LinkedField",
            "name": "result",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "BidderPosition",
                "kind": "LinkedField",
                "name": "position",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SaleArtwork",
                    "kind": "LinkedField",
                    "name": "saleArtwork",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/),
                      (v10/*: any*/),
                      (v11/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Artwork",
                        "kind": "LinkedField",
                        "name": "artwork",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": (v12/*: any*/),
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
                                  (v13/*: any*/),
                                  (v15/*: any*/)
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
                                  (v14/*: any*/),
                                  (v15/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "myLotStanding(live:true)"
                          },
                          (v15/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v15/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v15/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f13a1e3f9edab81a2e15f0b2e09aa384",
    "id": null,
    "metadata": {},
    "name": "ConfirmBidCreateBidderPositionMutation",
    "operationKind": "mutation",
    "text": "mutation ConfirmBidCreateBidderPositionMutation(\n  $input: BidderPositionInput!\n) {\n  createBidderPosition(input: $input) {\n    result {\n      status\n      message_header: messageHeader\n      message_description_md: messageDescriptionMD\n      position {\n        internalID\n        suggested_next_bid: suggestedNextBid {\n          cents\n          display\n        }\n        saleArtwork {\n          reserveMessage\n          currentBid {\n            display\n          }\n          counts {\n            bidderPositions\n          }\n          artwork {\n            myLotStanding(live: true) {\n              activeBid {\n                isWinning\n                id\n              }\n              mostRecentBid {\n                maxBid {\n                  display\n                }\n                id\n              }\n            }\n            id\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ea8fe1b16086285f4e116fe45d482dd2";

export default node;
