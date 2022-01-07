/**
 * @generated SignedSource<<790be523bd8477633433e630299e87b4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LotStatusListItem_saleArtwork$data = {
  readonly isWatching: boolean | null;
  readonly lotState: {
    readonly soldStatus: string | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"ClosedLotStanding_saleArtwork" | "ActiveLotStanding_saleArtwork" | "WatchedLot_saleArtwork">;
  readonly " $fragmentType": "LotStatusListItem_saleArtwork";
};
export type LotStatusListItem_saleArtwork = LotStatusListItem_saleArtwork$data;
export type LotStatusListItem_saleArtwork$key = {
  readonly " $data"?: LotStatusListItem_saleArtwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"LotStatusListItem_saleArtwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LotStatusListItem_saleArtwork",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ClosedLotStanding_saleArtwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ActiveLotStanding_saleArtwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "WatchedLot_saleArtwork"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isWatching",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "CausalityLotState",
      "kind": "LinkedField",
      "name": "lotState",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "soldStatus",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SaleArtwork",
  "abstractKey": null
};

(node as any).hash = "22cc41e754778d14e883967aa6882c57";

export default node;
