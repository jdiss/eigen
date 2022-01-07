/**
 * @generated SignedSource<<4da90f3dddfa733d362d2b6f5a5c78ab>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Home_showsByFollowedArtists$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ShowsRail_showsConnection">;
  readonly " $fragmentType": "Home_showsByFollowedArtists";
};
export type Home_showsByFollowedArtists = Home_showsByFollowedArtists$data;
export type Home_showsByFollowedArtists$key = {
  readonly " $data"?: Home_showsByFollowedArtists$data;
  readonly " $fragmentSpreads": FragmentRefs<"Home_showsByFollowedArtists">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Home_showsByFollowedArtists",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShowsRail_showsConnection"
    }
  ],
  "type": "ShowConnection",
  "abstractKey": null
};

(node as any).hash = "e901d84ccabc3cf865cdb6195e73bb12";

export default node;
