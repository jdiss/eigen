/**
 * @generated SignedSource<<1b3d4d85f1e5b81fe77193fef7cca011>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MakeOfferButton_artwork$data = {
  readonly internalID: string;
  readonly " $fragmentType": "MakeOfferButton_artwork";
};
export type MakeOfferButton_artwork = MakeOfferButton_artwork$data;
export type MakeOfferButton_artwork$key = {
  readonly " $data"?: MakeOfferButton_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"MakeOfferButton_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MakeOfferButton_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "c704ec89c83e93427db1eca75f364aef";

export default node;
