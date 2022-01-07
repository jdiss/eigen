/**
 * @generated SignedSource<<9317b09f1ba0cca9e7266dad1534208c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FairEmptyState_fair$data = {
  readonly isActive: boolean | null;
  readonly endAt: string | null;
  readonly " $fragmentType": "FairEmptyState_fair";
};
export type FairEmptyState_fair = FairEmptyState_fair$data;
export type FairEmptyState_fair$key = {
  readonly " $data"?: FairEmptyState_fair$data;
  readonly " $fragmentSpreads": FragmentRefs<"FairEmptyState_fair">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FairEmptyState_fair",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isActive",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endAt",
      "storageKey": null
    }
  ],
  "type": "Fair",
  "abstractKey": null
};

(node as any).hash = "0a03e1fa92ef01b0d307471ac69588f3";

export default node;
