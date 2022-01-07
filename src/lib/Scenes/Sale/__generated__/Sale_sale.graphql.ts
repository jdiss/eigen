/**
 * @generated SignedSource<<b8b88db1f14793dd3832e955e01d03ee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Sale_sale$data = {
  readonly endAt: string | null;
  readonly internalID: string;
  readonly liveStartAt: string | null;
  readonly startAt: string | null;
  readonly registrationEndsAt: string | null;
  readonly slug: string;
  readonly " $fragmentSpreads": FragmentRefs<"SaleHeader_sale" | "RegisterToBidButton_sale" | "BuyNowArtworksRail_sale">;
  readonly " $fragmentType": "Sale_sale";
};
export type Sale_sale = Sale_sale$data;
export type Sale_sale$key = {
  readonly " $data"?: Sale_sale$data;
  readonly " $fragmentSpreads": FragmentRefs<"Sale_sale">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Sale_sale",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SaleHeader_sale"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RegisterToBidButton_sale"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BuyNowArtworksRail_sale"
    },
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
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "liveStartAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "registrationEndsAt",
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
  "type": "Sale",
  "abstractKey": null
};

(node as any).hash = "85fc0e67fa0fba69e83ae332d69bb377";

export default node;
