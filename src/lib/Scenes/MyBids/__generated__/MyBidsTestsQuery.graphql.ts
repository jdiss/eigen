/**
 * @generated SignedSource<<ae5db924fd8844719d3f362bb3959038>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyBidsTestsQuery$variables = {};
export type MyBidsTestsQueryVariables = MyBidsTestsQuery$variables;
export type MyBidsTestsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyBids_me">;
  } | null;
};
export type MyBidsTestsQueryResponse = MyBidsTestsQuery$data;
export type MyBidsTestsQuery = {
  variables: MyBidsTestsQueryVariables;
  response: MyBidsTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "href",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "liveStartAt",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endAt",
  "storageKey": null
},
v7 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "display",
    "storageKey": null
  }
],
v8 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Sale",
    "kind": "LinkedField",
    "name": "sale",
    "plural": false,
    "selections": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Image",
        "kind": "LinkedField",
        "name": "coverImage",
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
      {
        "alias": null,
        "args": null,
        "concreteType": "Partner",
        "kind": "LinkedField",
        "name": "partner",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v1/*: any*/)
        ],
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
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "requireIdentityVerification",
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
    "name": "saleArtworks",
    "plural": true,
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
        "concreteType": "Artwork",
        "kind": "LinkedField",
        "name": "artwork",
        "plural": false,
        "selections": [
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
          },
          (v1/*: any*/),
          (v0/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isHighestBidder",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "estimate",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "CausalityLotState",
        "kind": "LinkedField",
        "name": "lotState",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "soldStatus",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Money",
            "kind": "LinkedField",
            "name": "sellingPrice",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "bidCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "reserveStatus",
            "storageKey": null
          }
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
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "status",
            "storageKey": null
          },
          (v1/*: any*/),
          (v5/*: any*/)
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
        "selections": (v7/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isWatching",
        "storageKey": null
      },
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "storageKey": null
  }
],
v9 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v10 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Boolean"
},
v11 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "MyBid"
},
v12 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Sale"
},
v13 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Image"
},
v14 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v15 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Partner"
},
v16 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Bidder"
},
v17 = {
  "enumValues": null,
  "nullable": true,
  "plural": true,
  "type": "SaleArtwork"
},
v18 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Artwork"
},
v19 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "SaleArtworkCurrentBid"
},
v20 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "CausalityLotState"
},
v21 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Int"
},
v22 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Money"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyBidsTestsQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyBids_me"
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
    "name": "MyBidsTestsQuery",
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
            "args": null,
            "kind": "ScalarField",
            "name": "identityVerified",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "IdentityVerification",
            "kind": "LinkedField",
            "name": "pendingIdentityVerification",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "MyBids",
            "kind": "LinkedField",
            "name": "myBids",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MyBid",
                "kind": "LinkedField",
                "name": "active",
                "plural": true,
                "selections": (v8/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "MyBid",
                "kind": "LinkedField",
                "name": "closed",
                "plural": true,
                "selections": (v8/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5cd0d822f0117f18f8e9f00724ab9a1a",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "me": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Me"
        },
        "me.id": (v9/*: any*/),
        "me.identityVerified": (v10/*: any*/),
        "me.myBids": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "MyBids"
        },
        "me.myBids.active": (v11/*: any*/),
        "me.myBids.active.sale": (v12/*: any*/),
        "me.myBids.active.sale.coverImage": (v13/*: any*/),
        "me.myBids.active.sale.coverImage.url": (v14/*: any*/),
        "me.myBids.active.sale.endAt": (v14/*: any*/),
        "me.myBids.active.sale.href": (v14/*: any*/),
        "me.myBids.active.sale.id": (v9/*: any*/),
        "me.myBids.active.sale.internalID": (v9/*: any*/),
        "me.myBids.active.sale.liveStartAt": (v14/*: any*/),
        "me.myBids.active.sale.name": (v14/*: any*/),
        "me.myBids.active.sale.partner": (v15/*: any*/),
        "me.myBids.active.sale.partner.id": (v9/*: any*/),
        "me.myBids.active.sale.partner.name": (v14/*: any*/),
        "me.myBids.active.sale.registrationStatus": (v16/*: any*/),
        "me.myBids.active.sale.registrationStatus.id": (v9/*: any*/),
        "me.myBids.active.sale.registrationStatus.qualifiedForBidding": (v10/*: any*/),
        "me.myBids.active.sale.requireIdentityVerification": (v10/*: any*/),
        "me.myBids.active.sale.slug": (v9/*: any*/),
        "me.myBids.active.saleArtworks": (v17/*: any*/),
        "me.myBids.active.saleArtworks.artwork": (v18/*: any*/),
        "me.myBids.active.saleArtworks.artwork.artistNames": (v14/*: any*/),
        "me.myBids.active.saleArtworks.artwork.href": (v14/*: any*/),
        "me.myBids.active.saleArtworks.artwork.id": (v9/*: any*/),
        "me.myBids.active.saleArtworks.artwork.image": (v13/*: any*/),
        "me.myBids.active.saleArtworks.artwork.image.url": (v14/*: any*/),
        "me.myBids.active.saleArtworks.artwork.internalID": (v9/*: any*/),
        "me.myBids.active.saleArtworks.artwork.slug": (v9/*: any*/),
        "me.myBids.active.saleArtworks.currentBid": (v19/*: any*/),
        "me.myBids.active.saleArtworks.currentBid.display": (v14/*: any*/),
        "me.myBids.active.saleArtworks.estimate": (v14/*: any*/),
        "me.myBids.active.saleArtworks.id": (v9/*: any*/),
        "me.myBids.active.saleArtworks.internalID": (v9/*: any*/),
        "me.myBids.active.saleArtworks.isHighestBidder": (v10/*: any*/),
        "me.myBids.active.saleArtworks.isWatching": (v10/*: any*/),
        "me.myBids.active.saleArtworks.lotLabel": (v14/*: any*/),
        "me.myBids.active.saleArtworks.lotState": (v20/*: any*/),
        "me.myBids.active.saleArtworks.lotState.bidCount": (v21/*: any*/),
        "me.myBids.active.saleArtworks.lotState.reserveStatus": (v14/*: any*/),
        "me.myBids.active.saleArtworks.lotState.sellingPrice": (v22/*: any*/),
        "me.myBids.active.saleArtworks.lotState.sellingPrice.display": (v14/*: any*/),
        "me.myBids.active.saleArtworks.lotState.soldStatus": (v14/*: any*/),
        "me.myBids.active.saleArtworks.sale": (v12/*: any*/),
        "me.myBids.active.saleArtworks.sale.endAt": (v14/*: any*/),
        "me.myBids.active.saleArtworks.sale.id": (v9/*: any*/),
        "me.myBids.active.saleArtworks.sale.liveStartAt": (v14/*: any*/),
        "me.myBids.active.saleArtworks.sale.status": (v14/*: any*/),
        "me.myBids.closed": (v11/*: any*/),
        "me.myBids.closed.sale": (v12/*: any*/),
        "me.myBids.closed.sale.coverImage": (v13/*: any*/),
        "me.myBids.closed.sale.coverImage.url": (v14/*: any*/),
        "me.myBids.closed.sale.endAt": (v14/*: any*/),
        "me.myBids.closed.sale.href": (v14/*: any*/),
        "me.myBids.closed.sale.id": (v9/*: any*/),
        "me.myBids.closed.sale.internalID": (v9/*: any*/),
        "me.myBids.closed.sale.liveStartAt": (v14/*: any*/),
        "me.myBids.closed.sale.name": (v14/*: any*/),
        "me.myBids.closed.sale.partner": (v15/*: any*/),
        "me.myBids.closed.sale.partner.id": (v9/*: any*/),
        "me.myBids.closed.sale.partner.name": (v14/*: any*/),
        "me.myBids.closed.sale.registrationStatus": (v16/*: any*/),
        "me.myBids.closed.sale.registrationStatus.id": (v9/*: any*/),
        "me.myBids.closed.sale.registrationStatus.qualifiedForBidding": (v10/*: any*/),
        "me.myBids.closed.sale.requireIdentityVerification": (v10/*: any*/),
        "me.myBids.closed.sale.slug": (v9/*: any*/),
        "me.myBids.closed.saleArtworks": (v17/*: any*/),
        "me.myBids.closed.saleArtworks.artwork": (v18/*: any*/),
        "me.myBids.closed.saleArtworks.artwork.artistNames": (v14/*: any*/),
        "me.myBids.closed.saleArtworks.artwork.href": (v14/*: any*/),
        "me.myBids.closed.saleArtworks.artwork.id": (v9/*: any*/),
        "me.myBids.closed.saleArtworks.artwork.image": (v13/*: any*/),
        "me.myBids.closed.saleArtworks.artwork.image.url": (v14/*: any*/),
        "me.myBids.closed.saleArtworks.artwork.internalID": (v9/*: any*/),
        "me.myBids.closed.saleArtworks.artwork.slug": (v9/*: any*/),
        "me.myBids.closed.saleArtworks.currentBid": (v19/*: any*/),
        "me.myBids.closed.saleArtworks.currentBid.display": (v14/*: any*/),
        "me.myBids.closed.saleArtworks.estimate": (v14/*: any*/),
        "me.myBids.closed.saleArtworks.id": (v9/*: any*/),
        "me.myBids.closed.saleArtworks.internalID": (v9/*: any*/),
        "me.myBids.closed.saleArtworks.isHighestBidder": (v10/*: any*/),
        "me.myBids.closed.saleArtworks.isWatching": (v10/*: any*/),
        "me.myBids.closed.saleArtworks.lotLabel": (v14/*: any*/),
        "me.myBids.closed.saleArtworks.lotState": (v20/*: any*/),
        "me.myBids.closed.saleArtworks.lotState.bidCount": (v21/*: any*/),
        "me.myBids.closed.saleArtworks.lotState.reserveStatus": (v14/*: any*/),
        "me.myBids.closed.saleArtworks.lotState.sellingPrice": (v22/*: any*/),
        "me.myBids.closed.saleArtworks.lotState.sellingPrice.display": (v14/*: any*/),
        "me.myBids.closed.saleArtworks.lotState.soldStatus": (v14/*: any*/),
        "me.myBids.closed.saleArtworks.sale": (v12/*: any*/),
        "me.myBids.closed.saleArtworks.sale.endAt": (v14/*: any*/),
        "me.myBids.closed.saleArtworks.sale.id": (v9/*: any*/),
        "me.myBids.closed.saleArtworks.sale.liveStartAt": (v14/*: any*/),
        "me.myBids.closed.saleArtworks.sale.status": (v14/*: any*/),
        "me.pendingIdentityVerification": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "IdentityVerification"
        },
        "me.pendingIdentityVerification.id": (v9/*: any*/),
        "me.pendingIdentityVerification.internalID": (v9/*: any*/)
      }
    },
    "name": "MyBidsTestsQuery",
    "operationKind": "query",
    "text": "query MyBidsTestsQuery {\n  me {\n    ...MyBids_me\n    id\n  }\n}\n\nfragment ActiveLotStanding_saleArtwork on SaleArtwork {\n  ...Lot_saleArtwork\n  isHighestBidder\n  sale {\n    status\n    liveStartAt\n    endAt\n    id\n  }\n  lotState {\n    bidCount\n    reserveStatus\n    soldStatus\n    sellingPrice {\n      display\n    }\n  }\n  artwork {\n    internalID\n    href\n    slug\n    id\n  }\n  currentBid {\n    display\n  }\n  estimate\n}\n\nfragment ClosedLotStanding_saleArtwork on SaleArtwork {\n  ...Lot_saleArtwork\n  isHighestBidder\n  estimate\n  artwork {\n    internalID\n    href\n    slug\n    id\n  }\n  lotState {\n    soldStatus\n    sellingPrice {\n      display\n    }\n  }\n  sale {\n    endAt\n    status\n    id\n  }\n}\n\nfragment LotStatusListItem_saleArtwork on SaleArtwork {\n  ...ClosedLotStanding_saleArtwork\n  ...ActiveLotStanding_saleArtwork\n  ...WatchedLot_saleArtwork\n  isWatching\n  lotState {\n    soldStatus\n  }\n}\n\nfragment Lot_saleArtwork on SaleArtwork {\n  lotLabel\n  artwork {\n    artistNames\n    image {\n      url(version: \"medium\")\n    }\n    id\n  }\n}\n\nfragment MyBids_me on Me {\n  ...SaleCard_me\n  myBids {\n    active {\n      sale {\n        ...SaleCard_sale\n        internalID\n        registrationStatus {\n          qualifiedForBidding\n          id\n        }\n        id\n      }\n      saleArtworks {\n        ...LotStatusListItem_saleArtwork\n        internalID\n        id\n      }\n    }\n    closed {\n      sale {\n        ...SaleCard_sale\n        internalID\n        registrationStatus {\n          qualifiedForBidding\n          id\n        }\n        id\n      }\n      saleArtworks {\n        ...LotStatusListItem_saleArtwork\n        internalID\n        id\n      }\n    }\n  }\n}\n\nfragment SaleCard_me on Me {\n  identityVerified\n  pendingIdentityVerification {\n    internalID\n    id\n  }\n}\n\nfragment SaleCard_sale on Sale {\n  internalID\n  href\n  slug\n  name\n  liveStartAt\n  endAt\n  coverImage {\n    url\n  }\n  partner {\n    name\n    id\n  }\n  registrationStatus {\n    qualifiedForBidding\n    id\n  }\n  requireIdentityVerification\n}\n\nfragment WatchedLot_saleArtwork on SaleArtwork {\n  ...Lot_saleArtwork\n  lotState {\n    bidCount\n    sellingPrice {\n      display\n    }\n  }\n  artwork {\n    internalID\n    href\n    slug\n    id\n  }\n  currentBid {\n    display\n  }\n  estimate\n}\n"
  }
};
})();

(node as any).hash = "b171cc29f771a471afbf0365e3b1cc5e";

export default node;
