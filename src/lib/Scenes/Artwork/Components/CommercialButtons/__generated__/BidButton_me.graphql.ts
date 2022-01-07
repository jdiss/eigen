/**
 * @generated SignedSource<<a35aeb7db43642fea17166985da540b1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BidButton_me$data = {
  readonly identityVerified: boolean | null;
  readonly " $fragmentType": "BidButton_me";
};
export type BidButton_me = BidButton_me$data;
export type BidButton_me$key = {
  readonly " $data"?: BidButton_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"BidButton_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BidButton_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "identityVerified",
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "4a1c7e4593abf1b3b1ab07a71a03457b";

export default node;
