/**
 * @generated SignedSource<<96f126b58bd2dd5fdd5af233fb696ed2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Inquiry_artwork$data = {
  readonly slug: string;
  readonly internalID: string;
  readonly contact_message: string | null;
  readonly partner: {
    readonly name: string | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkPreview_artwork">;
  readonly " $fragmentType": "Inquiry_artwork";
};
export type Inquiry_artwork = Inquiry_artwork$data;
export type Inquiry_artwork$key = {
  readonly " $data"?: Inquiry_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"Inquiry_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Inquiry_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": "contact_message",
      "args": null,
      "kind": "ScalarField",
      "name": "contactMessage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Partner",
      "kind": "LinkedField",
      "name": "partner",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkPreview_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "a45a56faecf5334e25bb1a35299c2a1d";

export default node;
