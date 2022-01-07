/**
 * @generated SignedSource<<cfac88824689bab06df947045d0a2f97>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CollectionArtistSeriesRail_collection$data = {
  readonly slug: string;
  readonly id: string;
  readonly " $fragmentType": "CollectionArtistSeriesRail_collection";
};
export type CollectionArtistSeriesRail_collection = CollectionArtistSeriesRail_collection$data;
export type CollectionArtistSeriesRail_collection$key = {
  readonly " $data"?: CollectionArtistSeriesRail_collection$data;
  readonly " $fragmentSpreads": FragmentRefs<"CollectionArtistSeriesRail_collection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionArtistSeriesRail_collection",
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

(node as any).hash = "4fc25d762cedf770e4ec928ee522ea86";

export default node;
