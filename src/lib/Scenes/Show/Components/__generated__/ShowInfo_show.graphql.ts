/**
 * @generated SignedSource<<7d64c1e812948b5d88cddb19207c3bfa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowInfo_show$data = {
  readonly href: string | null;
  readonly about: string | null;
  readonly " $fragmentType": "ShowInfo_show";
};
export type ShowInfo_show = ShowInfo_show$data;
export type ShowInfo_show$key = {
  readonly " $data"?: ShowInfo_show$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowInfo_show">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShowInfo_show",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "href",
      "storageKey": null
    },
    {
      "alias": "about",
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "Show",
  "abstractKey": null
};

(node as any).hash = "b096e3541ddc617d96a5eb413037bc28";

export default node;
