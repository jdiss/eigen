/**
 * @generated SignedSource<<96537c3cdf377bb8027222a4a288bba8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommercialInformation_me$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CommercialButtons_me">;
  readonly " $fragmentType": "CommercialInformation_me";
};
export type CommercialInformation_me = CommercialInformation_me$data;
export type CommercialInformation_me$key = {
  readonly " $data"?: CommercialInformation_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommercialInformation_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommercialInformation_me",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommercialButtons_me"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "6ad39fbc2e21290347d9a597e5759b88";

export default node;
