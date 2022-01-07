/**
 * @generated SignedSource<<2f6d1c21727d2262246efcb9e2e52f4a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtistSeriesHeader_artistSeries$data = {
  readonly image: {
    readonly url: string | null;
  } | null;
  readonly " $fragmentType": "ArtistSeriesHeader_artistSeries";
};
export type ArtistSeriesHeader_artistSeries = ArtistSeriesHeader_artistSeries$data;
export type ArtistSeriesHeader_artistSeries$key = {
  readonly " $data"?: ArtistSeriesHeader_artistSeries$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtistSeriesHeader_artistSeries">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArtistSeriesHeader_artistSeries",
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
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ArtistSeries",
  "abstractKey": null
};

(node as any).hash = "ae504c6f5001719cf6611e595d431138";

export default node;
