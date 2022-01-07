/**
 * @generated SignedSource<<19f5de0eef41d1ba0ad1059e41484768>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaleActiveBidItemTestsQuery$variables = {};
export type SaleActiveBidItemTestsQueryVariables = SaleActiveBidItemTestsQuery$variables;
export type SaleActiveBidItemTestsQuery$data = {
  readonly me: {
    readonly lotStandings: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"SaleActiveBidItem_lotStanding">;
    } | null> | null;
  } | null;
};
export type SaleActiveBidItemTestsQueryResponse = SaleActiveBidItemTestsQuery$data;
export type SaleActiveBidItemTestsQuery = {
  variables: SaleActiveBidItemTestsQueryVariables;
  response: SaleActiveBidItemTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "saleID",
    "value": "sale-id"
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
],
v3 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v4 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "BidderPosition"
},
v5 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SaleActiveBidItemTestsQuery",
    "selections": [
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
            "args": (v0/*: any*/),
            "concreteType": "LotStanding",
            "kind": "LinkedField",
            "name": "lotStandings",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "SaleActiveBidItem_lotStanding"
              }
            ],
            "storageKey": "lotStandings(saleID:\"sale-id\")"
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
    "name": "SaleActiveBidItemTestsQuery",
    "selections": [
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
            "args": (v0/*: any*/),
            "concreteType": "LotStanding",
            "kind": "LinkedField",
            "name": "lotStandings",
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
                    "name": "reserveStatus",
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
                    "concreteType": "Artwork",
                    "kind": "LinkedField",
                    "name": "artwork",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "href",
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
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "image",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "version",
                                "value": "medium"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "url",
                            "storageKey": "url(version:\"medium\")"
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
                    "name": "lotLabel",
                    "storageKey": null
                  },
                  (v1/*: any*/)
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
                    "name": "liveStartAt",
                    "storageKey": null
                  },
                  (v1/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "lotStandings(saleID:\"sale-id\")"
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9533d72f958050791bff97bfe3c7b62d",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.id": (v3/*: any*/),
        "me.lotStandings": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "LotStanding"
        },
        "me.lotStandings.activeBid": (v4/*: any*/),
        "me.lotStandings.activeBid.id": (v3/*: any*/),
        "me.lotStandings.activeBid.isWinning": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Boolean"
        },
        "me.lotStandings.mostRecentBid": (v4/*: any*/),
        "me.lotStandings.mostRecentBid.id": (v3/*: any*/),
        "me.lotStandings.mostRecentBid.maxBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "BidderPositionMaxBid"
        },
        "me.lotStandings.mostRecentBid.maxBid.display": (v5/*: any*/),
        "me.lotStandings.sale": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Sale"
        },
        "me.lotStandings.sale.id": (v3/*: any*/),
        "me.lotStandings.sale.liveStartAt": (v5/*: any*/),
        "me.lotStandings.saleArtwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtwork"
        },
        "me.lotStandings.saleArtwork.artwork": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Artwork"
        },
        "me.lotStandings.saleArtwork.artwork.artistNames": (v5/*: any*/),
        "me.lotStandings.saleArtwork.artwork.href": (v5/*: any*/),
        "me.lotStandings.saleArtwork.artwork.id": (v3/*: any*/),
        "me.lotStandings.saleArtwork.artwork.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Image"
        },
        "me.lotStandings.saleArtwork.artwork.image.url": (v5/*: any*/),
        "me.lotStandings.saleArtwork.counts": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCounts"
        },
        "me.lotStandings.saleArtwork.counts.bidderPositions": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "FormattedNumber"
        },
        "me.lotStandings.saleArtwork.currentBid": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "SaleArtworkCurrentBid"
        },
        "me.lotStandings.saleArtwork.currentBid.display": (v5/*: any*/),
        "me.lotStandings.saleArtwork.id": (v3/*: any*/),
        "me.lotStandings.saleArtwork.lotLabel": (v5/*: any*/),
        "me.lotStandings.saleArtwork.reserveStatus": (v5/*: any*/)
      }
    },
    "name": "SaleActiveBidItemTestsQuery",
    "operationKind": "query",
    "text": "query SaleActiveBidItemTestsQuery {\n  me {\n    lotStandings(saleID: \"sale-id\") {\n      ...SaleActiveBidItem_lotStanding\n    }\n    id\n  }\n}\n\nfragment Lot_saleArtwork on SaleArtwork {\n  lotLabel\n  artwork {\n    artistNames\n    image {\n      url(version: \"medium\")\n    }\n    id\n  }\n}\n\nfragment SaleActiveBidItem_lotStanding on LotStanding {\n  activeBid {\n    isWinning\n    id\n  }\n  mostRecentBid {\n    maxBid {\n      display\n    }\n    id\n  }\n  saleArtwork {\n    reserveStatus\n    counts {\n      bidderPositions\n    }\n    currentBid {\n      display\n    }\n    artwork {\n      href\n      id\n    }\n    ...Lot_saleArtwork\n    id\n  }\n  sale {\n    liveStartAt\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "4e4aa68f80df2d12e54754cfc3ddb666";

export default node;
