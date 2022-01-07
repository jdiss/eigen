/**
 * @generated SignedSource<<a09a5e879117a9ffa0f0fdf434379d0c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TagHeader_tag$data = {
  readonly name: string | null;
  readonly " $fragmentType": "TagHeader_tag";
};
export type TagHeader_tag = TagHeader_tag$data;
export type TagHeader_tag$key = {
  readonly " $data"?: TagHeader_tag$data;
  readonly " $fragmentSpreads": FragmentRefs<"TagHeader_tag">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TagHeader_tag",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Tag",
  "abstractKey": null
};

(node as any).hash = "4f16f2f0e520c921419cbed9d1352b28";

export default node;
