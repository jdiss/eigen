/**
 * @generated SignedSource<<94bff8beb35e6fa17339da47d69dd3ca>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FeatureFeaturedLink_featuredLink$data = {
  readonly href: string | null;
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly description: string | null;
  readonly image: {
    readonly url: string | null;
  } | null;
  readonly " $fragmentType": "FeatureFeaturedLink_featuredLink";
};
export type FeatureFeaturedLink_featuredLink = FeatureFeaturedLink_featuredLink$data;
export type FeatureFeaturedLink_featuredLink$key = {
  readonly " $data"?: FeatureFeaturedLink_featuredLink$data;
  readonly " $fragmentSpreads": FragmentRefs<"FeatureFeaturedLink_featuredLink">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FeatureFeaturedLink_featuredLink",
  "selections": [
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
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "subtitle",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
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
              "name": "version",
              "value": "wide"
            }
          ],
          "kind": "ScalarField",
          "name": "url",
          "storageKey": "url(version:\"wide\")"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "FeaturedLink",
  "abstractKey": null
};

(node as any).hash = "f097efc1d1827f3b116ab6288cbe7328";

export default node;
