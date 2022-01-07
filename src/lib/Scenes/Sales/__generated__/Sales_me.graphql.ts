/**
 * @generated SignedSource<<0653f1e53bd1f92bd8cbae4bedc4d6f8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Sales_me$data = {
  readonly " $fragmentSpreads": FragmentRefs<"LotsByFollowedArtistsRail_me">;
  readonly " $fragmentType": "Sales_me";
};
export type Sales_me = Sales_me$data;
export type Sales_me$key = {
  readonly " $data"?: Sales_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"Sales_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Sales_me",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "LotsByFollowedArtistsRail_me"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "93feb5b3b158da713f7e34d1d2bbe805";

export default node;
