/**
 * @generated SignedSource<<3c0a3fad4fa802d77e7d9af8da40a126>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommercialButtons_artwork$data = {
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
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"BuyNowButton_artwork" | "BidButton_artwork" | "MakeOfferButton_artwork" | "InquiryButtons_artwork">;
  readonly " $fragmentType": "CommercialButtons_artwork";
};
export type CommercialButtons_artwork = CommercialButtons_artwork$data;
export type CommercialButtons_artwork$key = {
  readonly " $data"?: CommercialButtons_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommercialButtons_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommercialButtons_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
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
          "name": "isClosed",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BuyNowButton_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BidButton_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MakeOfferButton_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InquiryButtons_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "2102f0e74f94dea6289c4fbc8edff768";

export default node;
