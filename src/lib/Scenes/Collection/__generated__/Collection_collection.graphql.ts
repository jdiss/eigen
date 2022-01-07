/**
 * @generated SignedSource<<65ac4399a1adb5ba222a77f88c244f17>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Collection_collection$data = {
  readonly id: string;
  readonly slug: string;
  readonly isDepartment: boolean;
  readonly linkedCollections: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"CollectionHubsRails_linkedCollections">;
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"CollectionHeader_collection" | "CollectionArtworks_collection" | "CollectionArtworksFilter_collection" | "FeaturedArtists_collection" | "CollectionHubsRails_collection">;
  readonly " $fragmentType": "Collection_collection";
};
export type Collection_collection = Collection_collection$data;
export type Collection_collection$key = {
  readonly " $data"?: Collection_collection$data;
  readonly " $fragmentSpreads": FragmentRefs<"Collection_collection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Collection_collection",
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
      "name": "isDepartment",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CollectionHeader_collection"
    },
    {
      "args": [
        {
          "kind": "Literal",
          "name": "input",
          "value": {
            "sort": "-decayed_merch"
          }
        }
      ],
      "kind": "FragmentSpread",
      "name": "CollectionArtworks_collection"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CollectionArtworksFilter_collection"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FeaturedArtists_collection"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CollectionHubsRails_collection"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MarketingCollectionGroup",
      "kind": "LinkedField",
      "name": "linkedCollections",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CollectionHubsRails_linkedCollections"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "MarketingCollection",
  "abstractKey": null
};

(node as any).hash = "00e2ae76fae2b1c48cf10a8cbd692ea7";

export default node;
