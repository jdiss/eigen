/**
 * @generated SignedSource<<854ecb4e314dab740e95627e9fe624c0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkHeader_artwork$data = {
  readonly images: ReadonlyArray<{
    readonly url: string | null;
    readonly imageVersions: ReadonlyArray<string | null> | null;
    readonly " $fragmentSpreads": FragmentRefs<"ImageCarousel_images">;
  } | null> | null;
  readonly title: string | null;
  readonly href: string | null;
  readonly internalID: string;
  readonly slug: string;
  readonly artists: ReadonlyArray<{
    readonly name: string | null;
  } | null> | null;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkActions_artwork" | "ArtworkTombstone_artwork">;
  readonly " $fragmentType": "ArtworkHeader_artwork";
};
export type ArtworkHeader_artwork = ArtworkHeader_artwork$data;
export type ArtworkHeader_artwork$key = {
  readonly " $data"?: ArtworkHeader_artwork$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkHeader_artwork">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtworkHeader_artwork",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkActions_artwork"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArtworkTombstone_artwork"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "images",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ImageCarousel_images"
        },
        {
          "alias": "url",
          "args": null,
          "kind": "ScalarField",
          "name": "imageURL",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "imageVersions",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "href",
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Artist",
      "kind": "LinkedField",
      "name": "artists",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artwork",
  "abstractKey": null
};

(node as any).hash = "13684b2f69c685bc5a951d0454e4910f";

export default node;
