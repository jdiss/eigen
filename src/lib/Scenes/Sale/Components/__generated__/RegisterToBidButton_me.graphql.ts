/**
 * @generated SignedSource<<c05c51ef076a7f6f23b764351cffdfa0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RegisterToBidButton_me$data = {
  readonly biddedLots: ReadonlyArray<{
    readonly saleArtwork: {
      readonly id: string;
    } | null;
  } | null> | null;
  readonly " $fragmentType": "RegisterToBidButton_me";
};
export type RegisterToBidButton_me = RegisterToBidButton_me$data;
export type RegisterToBidButton_me$key = {
  readonly " $data"?: RegisterToBidButton_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"RegisterToBidButton_me">;
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
  "name": "RegisterToBidButton_me",
  "selections": [
    {
      "alias": "biddedLots",
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
              "name": "id",
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

(node as any).hash = "5336a2cc004e693398fb3fd54384e9fd";

export default node;
