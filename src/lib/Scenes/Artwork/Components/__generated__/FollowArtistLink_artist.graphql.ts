/**
 * @generated SignedSource<<1a734d13185f55ab3d108f093e7fd24f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FollowArtistLink_artist$data = {
  readonly id: string;
  readonly slug: string;
  readonly internalID: string;
  readonly is_followed: boolean | null;
  readonly " $fragmentType": "FollowArtistLink_artist";
};
export type FollowArtistLink_artist = FollowArtistLink_artist$data;
export type FollowArtistLink_artist$key = {
  readonly " $data"?: FollowArtistLink_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"FollowArtistLink_artist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FollowArtistLink_artist",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": "is_followed",
      "args": null,
      "kind": "ScalarField",
      "name": "isFollowed",
      "storageKey": null
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "e51b02160c9ff7c9c0b7563b09d3cf54";

export default node;
