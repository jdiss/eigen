/**
 * @generated SignedSource<<99a02a7edcb7321384d4be31e4c5d06c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionArtworkImages_artwork$data = {
  readonly images: ReadonlyArray<{
    readonly height: number | null;
    readonly isDefault: boolean | null;
    readonly imageURL: string | null;
    readonly width: number | null;
    readonly internalID: string | null;
  } | null> | null;
  readonly " $fragmentType": "MyCollectionArtworkImages_artwork";
};
export type MyCollectionArtworkImages_artwork = MyCollectionArtworkImages_artwork$data;
export type MyCollectionArtworkImages_artwork$key = {
  readonly " $data"?: MyCollectionArtworkImages_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyCollectionArtworkImages_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyCollectionArtworkImages_artwork",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "images",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "height",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isDefault",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "imageURL",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "width",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "internalID",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "29be7b5ffe21643f7cb0625805d3d8be";

export default node;
