/**
 * @generated SignedSource<<1aa1e5fd72142d20c1afea5ecc064999>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SavedSearchAlertsList_me$data = {
  readonly " $fragmentSpreads": FragmentRefs<"SavedSearchesList_me">;
  readonly " $fragmentType": "SavedSearchAlertsList_me";
};
export type SavedSearchAlertsList_me = SavedSearchAlertsList_me$data;
export type SavedSearchAlertsList_me$key = {
  readonly " $data"?: SavedSearchAlertsList_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"SavedSearchAlertsList_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SavedSearchAlertsList_me",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SavedSearchesList_me"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "09f629a4e6d4b3046d35da21453d9205";

export default node;
