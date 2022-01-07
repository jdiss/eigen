/**
 * @generated SignedSource<<543a654b6bf083b1d76f56b2a3034cea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommercialButtons_me$data = {
  readonly " $fragmentSpreads": FragmentRefs<"BidButton_me">;
  readonly " $fragmentType": "CommercialButtons_me";
};
export type CommercialButtons_me = CommercialButtons_me$data;
export type CommercialButtons_me$key = {
  readonly " $data"?: CommercialButtons_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommercialButtons_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommercialButtons_me",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BidButton_me"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "6774dff4c22324842f91845c3a03587f";

export default node;
