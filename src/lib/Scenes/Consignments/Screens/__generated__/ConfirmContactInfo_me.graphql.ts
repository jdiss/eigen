/**
 * @generated SignedSource<<d1ab6ef335fbb6b7d8a12f8e546a9614>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ConfirmContactInfo_me$data = {
  readonly phone: string | null;
  readonly " $fragmentType": "ConfirmContactInfo_me";
};
export type ConfirmContactInfo_me = ConfirmContactInfo_me$data;
export type ConfirmContactInfo_me$key = {
  readonly " $data"?: ConfirmContactInfo_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"ConfirmContactInfo_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ConfirmContactInfo_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "phone",
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "d6c5b96e9aa17401b9390b2c4d13fbdc";

export default node;
