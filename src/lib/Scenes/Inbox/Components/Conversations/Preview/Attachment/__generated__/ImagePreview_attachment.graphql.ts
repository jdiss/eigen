/**
 * @generated SignedSource<<66881a05abe00fa1239e5d618ecc57ff>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ImagePreview_attachment$data = {
  readonly downloadURL: string;
  readonly " $fragmentSpreads": FragmentRefs<"AttachmentPreview_attachment">;
  readonly " $fragmentType": "ImagePreview_attachment";
};
export type ImagePreview_attachment = ImagePreview_attachment$data;
export type ImagePreview_attachment$key = {
  readonly " $data"?: ImagePreview_attachment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ImagePreview_attachment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ImagePreview_attachment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "downloadURL",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AttachmentPreview_attachment"
    }
  ],
  "type": "Attachment",
  "abstractKey": null
};

(node as any).hash = "5c3df8a54035cb3f1ae5991df3ffacec";

export default node;
