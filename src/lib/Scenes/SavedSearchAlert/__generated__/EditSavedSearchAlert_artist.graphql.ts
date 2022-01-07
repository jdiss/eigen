/**
 * @generated SignedSource<<ded7de1166fb493dd6f5822fa23911c6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EditSavedSearchAlert_artist$data = {
  readonly internalID: string;
  readonly name: string | null;
  readonly " $fragmentType": "EditSavedSearchAlert_artist";
};
export type EditSavedSearchAlert_artist = EditSavedSearchAlert_artist$data;
export type EditSavedSearchAlert_artist$key = {
  readonly " $data"?: EditSavedSearchAlert_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"EditSavedSearchAlert_artist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EditSavedSearchAlert_artist",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "7ad9dfd37f0d396f844bc54c9fb31a9a";

export default node;
