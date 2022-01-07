/**
 * @generated SignedSource<<13ca7c99175c4530a43be6ffd4ae0de0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowArtworksPreview_show$data = {
  readonly id: string;
  readonly counts: {
    readonly artworks: number | null;
  } | null;
  readonly artworks: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"GenericGrid_artworks">;
      } | null;
    } | null> | null;
  } | null;
  readonly " $fragmentType": "ShowArtworksPreview_show";
};
export type ShowArtworksPreview_show = ShowArtworksPreview_show$data;
export type ShowArtworksPreview_show$key = {
  readonly " $data"?: ShowArtworksPreview_show$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowArtworksPreview_show">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShowArtworksPreview_show",
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
      "concreteType": "ShowCounts",
      "kind": "LinkedField",
      "name": "counts",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "artworks",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "artworks",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 6
        }
      ],
      "concreteType": "ArtworkConnection",
      "kind": "LinkedField",
      "name": "artworksConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ArtworkEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Artwork",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "GenericGrid_artworks"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "artworksConnection(first:6)"
    }
  ],
  "type": "Show",
  "abstractKey": null
};

(node as any).hash = "9dbd4c1cb63baa83a061b7488c107346";

export default node;
