/**
 * @generated SignedSource<<2d6e674eedda9a55e67b0af1a858ce70>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyBids_me$data = {
  readonly myBids: {
    readonly active: ReadonlyArray<{
      readonly sale: {
        readonly internalID: string;
        readonly registrationStatus: {
          readonly qualifiedForBidding: boolean | null;
        } | null;
        readonly " $fragmentSpreads": FragmentRefs<"SaleCard_sale">;
      } | null;
      readonly saleArtworks: ReadonlyArray<{
        readonly internalID: string;
        readonly " $fragmentSpreads": FragmentRefs<"LotStatusListItem_saleArtwork">;
      } | null> | null;
    } | null> | null;
    readonly closed: ReadonlyArray<{
      readonly sale: {
        readonly internalID: string;
        readonly registrationStatus: {
          readonly qualifiedForBidding: boolean | null;
        } | null;
        readonly " $fragmentSpreads": FragmentRefs<"SaleCard_sale">;
      } | null;
      readonly saleArtworks: ReadonlyArray<{
        readonly internalID: string;
        readonly " $fragmentSpreads": FragmentRefs<"LotStatusListItem_saleArtwork">;
      } | null> | null;
    } | null> | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"SaleCard_me">;
  readonly " $fragmentType": "MyBids_me";
};
export type MyBids_me = MyBids_me$data;
export type MyBids_me$key = {
  readonly " $data"?: MyBids_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyBids_me">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Sale",
    "kind": "LinkedField",
    "name": "sale",
    "plural": false,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "SaleCard_sale"
      },
      (v0/*: any*/),
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
    "concreteType": "SaleArtwork",
    "kind": "LinkedField",
    "name": "saleArtworks",
    "plural": true,
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "LotStatusListItem_saleArtwork"
      },
      (v0/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyBids_me",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SaleCard_me"
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
          "selections": (v1/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "MyBid",
          "kind": "LinkedField",
          "name": "closed",
          "plural": true,
          "selections": (v1/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};
})();

(node as any).hash = "a36c4d711d7185d4dbbb51c0cc024737";

export default node;
