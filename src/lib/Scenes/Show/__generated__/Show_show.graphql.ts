/**
 * @generated SignedSource<<be0fc572960e6f2b2b748d0adad346e4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Show_show$data = {
  readonly internalID: string;
  readonly slug: string;
  readonly viewingRoomIDs: ReadonlyArray<string>;
  readonly images: ReadonlyArray<{
    readonly __typename: string;
  } | null> | null;
  readonly counts: {
    readonly eligibleArtworks: any | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"ShowHeader_show" | "ShowInstallShots_show" | "ShowInfo_show" | "ShowViewingRoom_show" | "ShowContextCard_show" | "ShowArtworks_show" | "ShowArtworksEmptyState_show">;
  readonly " $fragmentType": "Show_show";
};
export type Show_show = Show_show$data;
export type Show_show$key = {
  readonly " $data"?: Show_show$data;
  readonly " $fragmentSpreads": FragmentRefs<"Show_show">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Show_show",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowHeader_show"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowInstallShots_show"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowInfo_show"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowViewingRoom_show"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowContextCard_show"
    },
    {
      "args": [
        {
          "kind": "Literal",
          "name": "input",
          "value": {
            "sort": "partner_show_position"
          }
        }
      ],
      "kind": "FragmentSpread",
      "name": "ShowArtworks_show"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowArtworksEmptyState_show"
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewingRoomIDs",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "default",
          "value": false
        }
      ],
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "images",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "__typename",
          "storageKey": null
        }
      ],
      "storageKey": "images(default:false)"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ShowCounts",
      "kind": "LinkedField",
      "name": "counts",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "eligibleArtworks",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Show",
  "abstractKey": null
};

(node as any).hash = "c57f0298f151c94b8ebf6f52a87c043d";

export default node;
