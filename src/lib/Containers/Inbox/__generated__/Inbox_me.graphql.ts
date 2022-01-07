/**
 * @generated SignedSource<<51d9d1066cb2c4fce2d8a7170a41065b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Inbox_me$data = {
  readonly " $fragmentSpreads": FragmentRefs<"Conversations_me" | "MyBids_me">;
  readonly " $fragmentType": "Inbox_me";
};
export type Inbox_me = Inbox_me$data;
export type Inbox_me$key = {
  readonly " $data"?: Inbox_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"Inbox_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Inbox_me",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Conversations_me"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MyBids_me"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "b952dbf9da84367f7fc3e4c8f65bb09e";

export default node;
