/**
 * @generated SignedSource<<e1199917df293540f4988a6d3eab813f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistConsignButton_artist$data = {
  readonly targetSupply: {
    readonly isInMicrofunnel: boolean | null;
    readonly isTargetSupply: boolean | null;
  } | null;
  readonly internalID: string;
  readonly slug: string;
  readonly name: string | null;
  readonly image: {
    readonly cropped: {
      readonly url: string;
    } | null;
  } | null;
  readonly " $fragmentType": "ArtistConsignButton_artist";
};
export type ArtistConsignButton_artist = ArtistConsignButton_artist$data;
export type ArtistConsignButton_artist$key = {
  readonly " $data"?: ArtistConsignButton_artist$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistConsignButton_artist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtistConsignButton_artist",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ArtistTargetSupply",
      "kind": "LinkedField",
      "name": "targetSupply",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isInMicrofunnel",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isTargetSupply",
          "storageKey": null
        }
      ],
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
      "kind": "ScalarField",
      "name": "name",
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
              "value": 66
            },
            {
              "kind": "Literal",
              "name": "width",
              "value": 66
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
            }
          ],
          "storageKey": "cropped(height:66,width:66)"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Artist",
  "abstractKey": null
};

(node as any).hash = "23da8ebb4f46afb4d72e5014c4f9f2b5";

export default node;
