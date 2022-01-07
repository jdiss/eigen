/**
 * @generated SignedSource<<7aa2757b2be9abb1e17590198e0605fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FileDownload_attachment$data = {
  readonly fileName: string;
  readonly downloadURL: string;
  readonly " $fragmentSpreads": FragmentRefs<"AttachmentPreview_attachment">;
  readonly " $fragmentType": "FileDownload_attachment";
};
export type FileDownload_attachment = FileDownload_attachment$data;
export type FileDownload_attachment$key = {
  readonly " $data"?: FileDownload_attachment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FileDownload_attachment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FileDownload_attachment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fileName",
      "storageKey": null
    },
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

(node as any).hash = "3535ae92c946cf2e14fdc4cd5aabefe9";

export default node;
