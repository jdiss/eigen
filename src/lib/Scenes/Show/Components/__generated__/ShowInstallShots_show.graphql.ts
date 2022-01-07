/**
 * @generated SignedSource<<7ae4a1a18092e0c05f6f13fdc937d59f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowInstallShots_show$data = {
  readonly name: string | null;
  readonly images: ReadonlyArray<{
    readonly internalID: string | null;
    readonly caption: string | null;
    readonly src: string | null;
    readonly dimensions: {
      readonly width: number | null;
      readonly height: number | null;
    } | null;
  } | null> | null;
  readonly " $fragmentType": "ShowInstallShots_show";
};
export type ShowInstallShots_show = ShowInstallShots_show$data;
export type ShowInstallShots_show$key = {
  readonly " $data"?: ShowInstallShots_show$data;
  readonly " $fragmentSpreads": FragmentRefs<"ShowInstallShots_show">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShowInstallShots_show",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "default",
          "value": false
        }
      ],
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "images",
      "plural": true,
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
          "name": "caption",
          "storageKey": null
        },
        {
          "alias": "src",
          "args": [
            {
              "kind": "Literal",
              "name": "version",
              "value": [
                "larger",
                "large"
              ]
            }
          ],
          "kind": "ScalarField",
          "name": "url",
          "storageKey": "url(version:[\"larger\",\"large\"])"
        },
        {
          "alias": "dimensions",
          "args": [
            {
              "kind": "Literal",
              "name": "height",
              "value": 300
            }
          ],
          "concreteType": "ResizedImageUrl",
          "kind": "LinkedField",
          "name": "resized",
          "plural": false,
          "selections": [
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
          "storageKey": "resized(height:300)"
        }
      ],
      "storageKey": "images(default:false)"
    }
  ],
  "type": "Show",
  "abstractKey": null
};

(node as any).hash = "bcfeda7aea68e9d2dbdc18c2d8f8aaa8";

export default node;
