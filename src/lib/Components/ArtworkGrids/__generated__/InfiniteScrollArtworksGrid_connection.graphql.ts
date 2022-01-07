/**
 * @generated SignedSource<<3b82250dcbf3f590e071d20f5f894c2a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InfiniteScrollArtworksGrid_connection$data = {
  readonly pageInfo: {
    readonly hasNextPage: boolean;
    readonly startCursor: string | null;
    readonly endCursor: string | null;
  };
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly slug: string;
      readonly id: string;
      readonly image: {
        readonly aspectRatio: number;
      } | null;
      readonly " $fragmentSpreads": FragmentRefs<"ArtworkGridItem_artwork" | "MyCollectionArtworkListItem_artwork">;
    } | null;
  } | null> | null;
  readonly " $fragmentType": "InfiniteScrollArtworksGrid_connection";
};
export type InfiniteScrollArtworksGrid_connection = InfiniteScrollArtworksGrid_connection$data;
export type InfiniteScrollArtworksGrid_connection$key = {
  readonly " $data"?: InfiniteScrollArtworksGrid_connection$data;
  readonly " $fragmentSpreads": FragmentRefs<"InfiniteScrollArtworksGrid_connection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": true,
      "kind": "LocalArgument",
      "name": "skipMyCollection"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "InfiniteScrollArtworksGrid_connection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "PageInfo",
      "kind": "LinkedField",
      "name": "pageInfo",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "hasNextPage",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "startCursor",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "endCursor",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
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
                  "alias": null,
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
            },
            {
              "condition": "skipMyCollection",
              "kind": "Condition",
              "passingValue": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "MyCollectionArtworkListItem_artwork"
                }
              ]
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ArtworkConnectionInterface",
  "abstractKey": "__isArtworkConnectionInterface"
};

(node as any).hash = "b8733d2f0e00a1da69911ad143a3c6da";

export default node;
