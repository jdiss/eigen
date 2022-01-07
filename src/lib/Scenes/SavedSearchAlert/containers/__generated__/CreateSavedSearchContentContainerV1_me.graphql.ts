/**
 * @generated SignedSource<<26b13ace3455ecdc00df7bf3d5aac415>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateSavedSearchContentContainerV1_me$data = {
  readonly emailFrequency: string | null;
  readonly " $fragmentType": "CreateSavedSearchContentContainerV1_me";
};
export type CreateSavedSearchContentContainerV1_me = CreateSavedSearchContentContainerV1_me$data;
export type CreateSavedSearchContentContainerV1_me$key = {
  readonly " $data"?: CreateSavedSearchContentContainerV1_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"CreateSavedSearchContentContainerV1_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CreateSavedSearchContentContainerV1_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "emailFrequency",
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "0ba53a368516d4237990248e6d34c0be";

export default node;
