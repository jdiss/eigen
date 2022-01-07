/**
 * @generated SignedSource<<6eef6b1582e9853e293664bae1679259>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FeaturedCollectionsRail_collection$data = {
  readonly slug: string;
  readonly id: string;
  readonly " $fragmentType": "FeaturedCollectionsRail_collection";
};
export type FeaturedCollectionsRail_collection = FeaturedCollectionsRail_collection$data;
export type FeaturedCollectionsRail_collection$key = {
  readonly " $data"?: FeaturedCollectionsRail_collection$data;
  readonly " $fragmentSpreads": FragmentRefs<"FeaturedCollectionsRail_collection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeaturedCollectionsRail_collection",
  "selections": [
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
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "MarketingCollection",
  "abstractKey": null
};

(node as any).hash = "b3b81460378ae369b7fc090f6e961471";

export default node;
