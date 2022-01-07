/**
 * @generated SignedSource<<d46989e0a7f50488425fec3742a6332e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SelectMaxBid_sale_artwork$data = {
  readonly id: string;
  readonly increments: ReadonlyArray<{
    readonly display: string | null;
    readonly cents: number | null;
  } | null> | null;
  readonly " $fragmentSpreads": FragmentRefs<"ConfirmBid_sale_artwork">;
  readonly " $fragmentType": "SelectMaxBid_sale_artwork";
};
export type SelectMaxBid_sale_artwork = SelectMaxBid_sale_artwork$data;
export type SelectMaxBid_sale_artwork$key = {
  readonly " $data"?: SelectMaxBid_sale_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"SelectMaxBid_sale_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SelectMaxBid_sale_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "useMyMaxBid",
          "value": true
        }
      ],
      "concreteType": "BidIncrementsFormatted",
      "kind": "LinkedField",
      "name": "increments",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "display",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cents",
          "storageKey": null
        }
      ],
      "storageKey": "increments(useMyMaxBid:true)"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ConfirmBid_sale_artwork"
    }
  ],
  "type": "SaleArtwork",
  "abstractKey": null
};

(node as any).hash = "da3f4c5b318013c4b3203bcd274c23bb";

export default node;
