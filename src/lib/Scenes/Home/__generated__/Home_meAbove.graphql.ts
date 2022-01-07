/**
 * @generated SignedSource<<fad6c0c18083a0899eb1f906320cf3c0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Home_meAbove$data = {
  readonly " $fragmentSpreads": FragmentRefs<"EmailConfirmationBanner_me" | "LotsByFollowedArtistsRail_me" | "NewWorksForYouRail_me" | "RecommendedArtistsRail_me">;
  readonly " $fragmentType": "Home_meAbove";
};
export type Home_meAbove = Home_meAbove$data;
export type Home_meAbove$key = {
  readonly " $data"?: Home_meAbove$data;
  readonly " $fragmentSpreads": FragmentRefs<"Home_meAbove">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Home_meAbove",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EmailConfirmationBanner_me"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "LotsByFollowedArtistsRail_me"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "NewWorksForYouRail_me"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RecommendedArtistsRail_me"
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "2d6c8b21c4beb1e520c7e9b9508a3524";

export default node;
