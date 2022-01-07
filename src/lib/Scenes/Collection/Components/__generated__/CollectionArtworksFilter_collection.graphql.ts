/**
 * @generated SignedSource<<83beede1e80bfb34918b2983e0326aec>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CollectionArtworksFilter_collection$data = {
  readonly slug: string;
  readonly id: string;
  readonly " $fragmentType": "CollectionArtworksFilter_collection";
};
export type CollectionArtworksFilter_collection = CollectionArtworksFilter_collection$data;
export type CollectionArtworksFilter_collection$key = {
  readonly " $data"?: CollectionArtworksFilter_collection$data;
  readonly " $fragmentSpreads": FragmentRefs<"CollectionArtworksFilter_collection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionArtworksFilter_collection",
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

(node as any).hash = "9dbcbd185a29debccf43d85bef112739";

export default node;
