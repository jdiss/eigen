/**
 * @generated SignedSource<<971f253f78eb7395404f0111ae4c735d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Articles_articles$data = ReadonlyArray<{
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"ArticleCard_article">;
  readonly " $fragmentType": "Articles_articles";
}>;
export type Articles_articles = Articles_articles$data;
export type Articles_articles$key = ReadonlyArray<{
  readonly " $data"?: Articles_articles$data;
  readonly " $fragmentSpreads": FragmentRefs<"Articles_articles">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "Articles_articles",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ArticleCard_article"
    }
  ],
  "type": "Article",
  "abstractKey": null
};

(node as any).hash = "bea2241c7d72bc68731af217c056ded4";

export default node;
