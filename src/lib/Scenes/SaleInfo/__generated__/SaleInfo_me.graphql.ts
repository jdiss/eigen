/**
 * @generated SignedSource<<bb8af3aa3e3f14ca5b0f3b9dba462b09>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaleInfo_me$data = {
  readonly " $fragmentSpreads": FragmentRefs<"RegisterToBidButton_me">;
  readonly " $fragmentType": "SaleInfo_me";
};
export type SaleInfo_me = SaleInfo_me$data;
export type SaleInfo_me$key = {
  readonly " $data"?: SaleInfo_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"SaleInfo_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "saleID"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "SaleInfo_me",
  "selections": [
    {
      "args": [
        {
          "kind": "Variable",
          "name": "saleID",
          "variableName": "saleID"
        }
      ],
      "kind": "FragmentSpread",
      "name": "RegisterToBidButton_me"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "a692fe458bad273e688deb39a90a3e46";

export default node;
