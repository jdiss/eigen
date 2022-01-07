/**
 * @generated SignedSource<<3125fd8963c2d6e4d7364346f9a58d99>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Trove_trove$data = {
  readonly heroUnits: ReadonlyArray<{
    readonly title: string | null;
    readonly subtitle: string | null;
    readonly creditLine: string | null;
    readonly href: string | null;
    readonly backgroundImageURL: string | null;
  } | null> | null;
  readonly " $fragmentType": "Trove_trove";
};
export type Trove_trove = Trove_trove$data;
export type Trove_trove$key = {
  readonly " $data"?: Trove_trove$data;
  readonly " $fragmentSpreads": FragmentRefs<"Trove_trove">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "heroImageVersion"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Trove_trove",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "platform",
          "value": "MOBILE"
        }
      ],
      "concreteType": "HomePageHeroUnit",
      "kind": "LinkedField",
      "name": "heroUnits",
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
          "name": "subtitle",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "creditLine",
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
          "args": [
            {
              "kind": "Variable",
              "name": "version",
              "variableName": "heroImageVersion"
            }
          ],
          "kind": "ScalarField",
          "name": "backgroundImageURL",
          "storageKey": null
        }
      ],
      "storageKey": "heroUnits(platform:\"MOBILE\")"
    }
  ],
  "type": "HomePage",
  "abstractKey": null
};

(node as any).hash = "f4d29f9c7f0884383378c66642d6193c";

export default node;
