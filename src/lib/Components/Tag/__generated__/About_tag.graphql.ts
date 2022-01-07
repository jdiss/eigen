/**
 * @generated SignedSource<<7d7decad25973d9923b018e4bb5d33c8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type About_tag$data = {
  readonly description: string | null;
  readonly " $fragmentType": "About_tag";
};
export type About_tag = About_tag$data;
export type About_tag$key = {
  readonly " $data"?: About_tag$data;
  readonly " $fragmentSpreads": FragmentRefs<"About_tag">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "About_tag",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "Tag",
  "abstractKey": null
};

(node as any).hash = "f2ab5c190084f979851aa2f23e8808f5";

export default node;
