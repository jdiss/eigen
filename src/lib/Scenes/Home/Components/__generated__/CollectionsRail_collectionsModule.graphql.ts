/**
 * @generated SignedSource<<91d541ebd6ecde356e51211990ad5ae9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CollectionsRail_collectionsModule$data = {
  readonly results: ReadonlyArray<{
    readonly title: string;
    readonly slug: string;
    readonly artworksConnection: {
      readonly counts: {
        readonly total: any | null;
      } | null;
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly image: {
            readonly url: string | null;
          } | null;
        } | null;
      } | null> | null;
    } | null;
  } | null>;
  readonly " $fragmentType": "CollectionsRail_collectionsModule";
};
export type CollectionsRail_collectionsModule = CollectionsRail_collectionsModule$data;
export type CollectionsRail_collectionsModule$key = {
  readonly " $data"?: CollectionsRail_collectionsModule$data;
  readonly " $fragmentSpreads": FragmentRefs<"CollectionsRail_collectionsModule">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CollectionsRail_collectionsModule",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MarketingCollection",
      "kind": "LinkedField",
      "name": "results",
      "plural": true,
      "selections": [
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
          "name": "slug",
          "storageKey": null
        },
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "first",
              "value": 3
            }
          ],
          "concreteType": "FilterArtworksConnection",
          "kind": "LinkedField",
          "name": "artworksConnection",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "FilterArtworksCounts",
              "kind": "LinkedField",
              "name": "counts",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "total",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "FilterArtworksEdge",
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
                      "concreteType": "Image",
                      "kind": "LinkedField",
                      "name": "image",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": [
                            {
                              "kind": "Literal",
                              "name": "version",
                              "value": "large"
                            }
                          ],
                          "kind": "ScalarField",
                          "name": "url",
                          "storageKey": "url(version:\"large\")"
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": "artworksConnection(first:3)"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HomePageMarketingCollectionsModule",
  "abstractKey": null
};

(node as any).hash = "60d7dd9fa020050593bcb6e6f7cdc52a";

export default node;
