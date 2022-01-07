/**
 * @generated SignedSource<<96e957075396162f76bfc58ebbdda1c3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClosedLotStanding_saleArtwork$data = {
  readonly isHighestBidder: boolean | null;
  readonly estimate: string | null;
  readonly artwork: {
    readonly internalID: string;
    readonly href: string | null;
    readonly slug: string;
  } | null;
  readonly lotState: {
    readonly soldStatus: string | null;
    readonly sellingPrice: {
      readonly display: string | null;
    } | null;
  } | null;
  readonly sale: {
    readonly endAt: string | null;
    readonly status: string | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"Lot_saleArtwork">;
  readonly " $fragmentType": "ClosedLotStanding_saleArtwork";
};
export type ClosedLotStanding_saleArtwork = ClosedLotStanding_saleArtwork$data;
export type ClosedLotStanding_saleArtwork$key = {
  readonly " $data"?: ClosedLotStanding_saleArtwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ClosedLotStanding_saleArtwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClosedLotStanding_saleArtwork",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Lot_saleArtwork"
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
      "concreteType": "Artwork",
      "kind": "LinkedField",
      "name": "artwork",
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
          "name": "href",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "slug",
          "storageKey": null
        }
      ],
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
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "display",
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
      "concreteType": "Sale",
      "kind": "LinkedField",
      "name": "sale",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "endAt",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "status",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SaleArtwork",
  "abstractKey": null
};

(node as any).hash = "2c9fa1a2260362700fd1c8f2182c99a7";

export default node;
