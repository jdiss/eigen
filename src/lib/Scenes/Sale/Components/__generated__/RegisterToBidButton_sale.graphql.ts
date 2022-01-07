/**
 * @generated SignedSource<<86705b0b5347cbf13f26547246188a2a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RegisterToBidButton_sale$data = {
  readonly slug: string;
  readonly startAt: string | null;
  readonly endAt: string | null;
  readonly internalID: string;
  readonly requireIdentityVerification: boolean | null;
  readonly registrationStatus: {
    readonly qualifiedForBidding: boolean | null;
  } | null;
  readonly " $fragmentType": "RegisterToBidButton_sale";
};
export type RegisterToBidButton_sale = RegisterToBidButton_sale$data;
export type RegisterToBidButton_sale$key = {
  readonly " $data"?: RegisterToBidButton_sale$data;
  readonly " $fragmentSpreads": FragmentRefs<"RegisterToBidButton_sale">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RegisterToBidButton_sale",
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
      "name": "startAt",
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
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "requireIdentityVerification",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Sale",
  "abstractKey": null
};

(node as any).hash = "a6061cc19d9a172e454f3f219d9c952a";

export default node;
