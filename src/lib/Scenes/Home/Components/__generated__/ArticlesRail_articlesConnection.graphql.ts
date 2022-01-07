/**
 * @generated SignedSource<<2f8706d03669ba21e438a99b07cfabd9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArticlesRail_articlesConnection$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly internalID: string;
      readonly slug: string | null;
      readonly " $fragmentSpreads": FragmentRefs<"ArticleCard_article">;
    } | null;
  } | null> | null;
  readonly " $fragmentType": "ArticlesRail_articlesConnection";
};
export type ArticlesRail_articlesConnection = ArticlesRail_articlesConnection$data;
export type ArticlesRail_articlesConnection$key = {
  readonly " $data"?: ArticlesRail_articlesConnection$data;
  readonly " $fragmentSpreads": FragmentRefs<"ArticlesRail_articlesConnection">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ArticlesRail_articlesConnection",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ArticleEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Article",
          "kind": "LinkedField",
          "name": "node",
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
              "name": "slug",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "ArticleCard_article"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ArticleConnection",
  "abstractKey": null
};

(node as any).hash = "d1faa0a4c1bf19ce469a9c78f1c5308f";

export default node;
