/**
 * @generated SignedSource<<e9abb03d28309976676fbad60804a877>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CollectionHubsRails_collection$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CollectionArtistSeriesRail_collection" | "FeaturedCollectionsRail_collection">;
  readonly " $fragmentType": "CollectionHubsRails_collection";
};
export type CollectionHubsRails_collection = CollectionHubsRails_collection$data;
export type CollectionHubsRails_collection$key = {
  readonly " $data"?: CollectionHubsRails_collection$data;
  readonly " $fragmentSpreads": FragmentRefs<"CollectionHubsRails_collection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionHubsRails_collection",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CollectionArtistSeriesRail_collection"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FeaturedCollectionsRail_collection"
    }
  ],
  "type": "MarketingCollection",
  "abstractKey": null
};

(node as any).hash = "eda147707434616bc52b369a4c92cd24";

export default node;
