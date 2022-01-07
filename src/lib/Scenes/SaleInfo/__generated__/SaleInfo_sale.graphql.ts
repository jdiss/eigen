/**
 * @generated SignedSource<<23c5ca54867c3db1d8a9767dc8b39b60>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaleInfo_sale$data = {
  readonly description: string | null;
  readonly slug: string;
  readonly internalID: string;
  readonly endAt: string | null;
  readonly liveStartAt: string | null;
  readonly name: string | null;
  readonly startAt: string | null;
  readonly registrationEndsAt: string | null;
  readonly timeZone: string | null;
  readonly isWithBuyersPremium: boolean | null;
  readonly buyersPremium: ReadonlyArray<{
    readonly amount: string | null;
    readonly percent: number | null;
  } | null> | null;
  readonly " $fragmentSpreads": FragmentRefs<"RegisterToBidButton_sale">;
  readonly " $fragmentType": "SaleInfo_sale";
};
export type SaleInfo_sale = SaleInfo_sale$data;
export type SaleInfo_sale$key = {
  readonly " $data"?: SaleInfo_sale$data;
  readonly " $fragmentSpreads": FragmentRefs<"SaleInfo_sale">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SaleInfo_sale",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RegisterToBidButton_sale"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
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
      "name": "internalID",
      "storageKey": null
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
      "name": "liveStartAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
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
      "name": "timeZone",
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
      "concreteType": "BuyersPremium",
      "kind": "LinkedField",
      "name": "buyersPremium",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "amount",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "percent",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Sale",
  "abstractKey": null
};

(node as any).hash = "cfdad82aa72dea8ea33c489659e22efa";

export default node;
