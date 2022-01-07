/**
 * @generated SignedSource<<55071c088d5c8d0cd2175df2a13df66a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ConsignmentsHome_targetSupply$data = {
  readonly " $fragmentSpreads": FragmentRefs<"RecentlySold_targetSupply" | "ArtistList_targetSupply">;
  readonly " $fragmentType": "ConsignmentsHome_targetSupply";
};
export type ConsignmentsHome_targetSupply = ConsignmentsHome_targetSupply$data;
export type ConsignmentsHome_targetSupply$key = {
  readonly " $data"?: ConsignmentsHome_targetSupply$data;
  readonly " $fragmentSpreads": FragmentRefs<"ConsignmentsHome_targetSupply">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ConsignmentsHome_targetSupply",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RecentlySold_targetSupply"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtistList_targetSupply"
    }
  ],
  "type": "TargetSupply",
  "abstractKey": null
};

(node as any).hash = "34a9087874c46cbd3b5598240383d80f";

export default node;
