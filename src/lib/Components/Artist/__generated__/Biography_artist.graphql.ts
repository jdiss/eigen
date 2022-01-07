/**
 * @generated SignedSource<<4f3898cd3179c14d76ba9dd182542ae3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Biography_artist$data = {
  readonly bio: string | null;
  readonly blurb: string | null;
  readonly " $fragmentType": "Biography_artist";
};
export type Biography_artist = Biography_artist$data;
export type Biography_artist$key = {
  readonly " $data"?: Biography_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"Biography_artist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Biography_artist",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "bio",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "blurb",
      "storageKey": null
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "c69d884d6a5b77e0d57f6324d613c6be";

export default node;
