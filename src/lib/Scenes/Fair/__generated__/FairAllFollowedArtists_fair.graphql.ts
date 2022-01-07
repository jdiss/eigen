/**
 * @generated SignedSource<<0b339d9cc891feb3f9c518d92d3172d0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FairAllFollowedArtists_fair$data = {
  readonly internalID: string;
  readonly slug: string;
  readonly " $fragmentSpreads": FragmentRefs<"FairArtworks_fair">;
  readonly " $fragmentType": "FairAllFollowedArtists_fair";
};
export type FairAllFollowedArtists_fair = FairAllFollowedArtists_fair$data;
export type FairAllFollowedArtists_fair$key = {
  readonly " $data"?: FairAllFollowedArtists_fair$data;
  readonly " $fragmentSpreads": FragmentRefs<"FairAllFollowedArtists_fair">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FairAllFollowedArtists_fair",
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
      "args": [
        {
          "kind": "Literal",
          "name": "input",
          "value": {
            "includeArtworksByFollowedArtists": true,
            "sort": "-decayed_merch"
          }
        }
      ],
      "kind": "FragmentSpread",
      "name": "FairArtworks_fair"
    }
  ],
  "type": "Fair",
  "abstractKey": null
};

(node as any).hash = "aa102e4ad512d8ae582addcd102a0add";

export default node;
