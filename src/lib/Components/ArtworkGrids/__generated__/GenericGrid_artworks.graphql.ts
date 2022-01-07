/**
 * @generated SignedSource<<7735c3bd0e745d4fabf688c4e3ab8dcd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GenericGrid_artworks$data = ReadonlyArray<{
  readonly id: string;
  readonly image: {
    readonly aspect_ratio: number;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkGridItem_artwork">;
  readonly " $fragmentType": "GenericGrid_artworks";
}>;
export type GenericGrid_artworks = GenericGrid_artworks$data;
export type GenericGrid_artworks$key = ReadonlyArray<{
  readonly " $data"?: GenericGrid_artworks$data;
  readonly " $fragmentSpreads": FragmentRefs<"GenericGrid_artworks">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "GenericGrid_artworks",
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
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": [
        {
          "alias": "aspect_ratio",
          "args": null,
          "kind": "ScalarField",
          "name": "aspectRatio",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkGridItem_artwork"
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "52d9394f994a4e3110dc4747d1ec410a";

export default node;
