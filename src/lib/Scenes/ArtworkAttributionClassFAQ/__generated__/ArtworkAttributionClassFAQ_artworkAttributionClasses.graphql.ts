/**
 * @generated SignedSource<<686b3e85d76d720b493a7757ceb91d4e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkAttributionClassFAQ_artworkAttributionClasses$data = ReadonlyArray<{
  readonly name: string | null;
  readonly longDescription: string | null;
  readonly " $fragmentType": "ArtworkAttributionClassFAQ_artworkAttributionClasses";
}>;
export type ArtworkAttributionClassFAQ_artworkAttributionClasses = ArtworkAttributionClassFAQ_artworkAttributionClasses$data;
export type ArtworkAttributionClassFAQ_artworkAttributionClasses$key = ReadonlyArray<{
  readonly " $data"?: ArtworkAttributionClassFAQ_artworkAttributionClasses$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArtworkAttributionClassFAQ_artworkAttributionClasses">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "ArtworkAttributionClassFAQ_artworkAttributionClasses",
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
      "args": null,
      "kind": "ScalarField",
      "name": "longDescription",
      "storageKey": null
    }
  ],
  "type": "AttributionClass",
  "abstractKey": null
};

(node as any).hash = "be66fc89c75b13152cafac33cdeadb64";

export default node;
