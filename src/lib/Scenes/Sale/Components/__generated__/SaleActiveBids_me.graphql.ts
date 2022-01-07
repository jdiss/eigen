/**
 * @generated SignedSource<<0bf10b5a13afcd83fccd5bdcbd3c21db>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SaleActiveBids_me$data = {
  readonly lotStandings: ReadonlyArray<{
    readonly saleArtwork: {
      readonly slug: string;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"SaleActiveBidItem_lotStanding">;
  } | null> | null;
  readonly " $fragmentType": "SaleActiveBids_me";
};
export type SaleActiveBids_me = SaleActiveBids_me$data;
export type SaleActiveBids_me$key = {
  readonly " $data"?: SaleActiveBids_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"SaleActiveBids_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "saleID"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "SaleActiveBids_me",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "saleID",
          "variableName": "saleID"
        }
      ],
      "concreteType": "LotStanding",
      "kind": "LinkedField",
      "name": "lotStandings",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SaleActiveBidItem_lotStanding"
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "SaleArtwork",
          "kind": "LinkedField",
          "name": "saleArtwork",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slug",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "b9221180bf36bae1e8dfc709651af79e";

export default node;
