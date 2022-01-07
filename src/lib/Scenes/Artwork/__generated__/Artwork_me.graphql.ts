/**
 * @generated SignedSource<<3a9e24c2263f9fa35a5fee9b69270a28>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Artwork_me$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CommercialInformation_me">;
  readonly " $fragmentType": "Artwork_me";
};
export type Artwork_me = Artwork_me$data;
export type Artwork_me$key = {
  readonly " $data"?: Artwork_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"Artwork_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Artwork_me",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommercialInformation_me"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "3f47e88f99ccf53ed6c4f9a8273b8d54";

export default node;
