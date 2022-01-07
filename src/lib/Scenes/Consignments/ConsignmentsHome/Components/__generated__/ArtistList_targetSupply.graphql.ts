/**
 * @generated SignedSource<<4248b16e812dfc20ef8d358972d59593>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistList_targetSupply$data = {
  readonly microfunnel: ReadonlyArray<{
    readonly artist: {
      readonly internalID: string;
      readonly name: string | null;
      readonly href: string | null;
      readonly slug: string;
      readonly image: {
        readonly cropped: {
          readonly url: string;
          readonly width: number;
          readonly height: number;
        } | null;
      } | null;
    } | null;
  } | null> | null;
  readonly " $fragmentType": "ArtistList_targetSupply";
};
export type ArtistList_targetSupply = ArtistList_targetSupply$data;
export type ArtistList_targetSupply$key = {
  readonly " $data"?: ArtistList_targetSupply$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistList_targetSupply">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtistList_targetSupply",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TargetSupplyMicrofunnelItem",
      "kind": "LinkedField",
      "name": "microfunnel",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Artist",
          "kind": "LinkedField",
          "name": "artist",
          "plural": false,
          "selections": [
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
              "name": "name",
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
              "name": "slug",
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
                  "args": [
                    {
                      "kind": "Literal",
                      "name": "height",
                      "value": 70
                    },
                    {
                      "kind": "Literal",
                      "name": "width",
                      "value": 76
                    }
                  ],
                  "concreteType": "CroppedImageUrl",
                  "kind": "LinkedField",
                  "name": "cropped",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "url",
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
                      "name": "height",
                      "storageKey": null
                    }
                  ],
                  "storageKey": "cropped(height:70,width:76)"
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
  "type": "TargetSupply",
  "abstractKey": null
};

(node as any).hash = "8517886177d3d46c42fae10ec7dcb2ef";

export default node;
