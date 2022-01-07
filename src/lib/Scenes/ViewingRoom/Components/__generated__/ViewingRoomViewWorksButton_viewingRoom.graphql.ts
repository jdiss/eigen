/**
 * @generated SignedSource<<dbe12a3dbd61b04dd4729dfd0e695168>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewingRoomViewWorksButton_viewingRoom$data = {
  readonly slug: string;
  readonly internalID: string;
  readonly artworksForCount: {
    readonly totalCount: number | null;
  } | null;
  readonly " $fragmentType": "ViewingRoomViewWorksButton_viewingRoom";
};
export type ViewingRoomViewWorksButton_viewingRoom = ViewingRoomViewWorksButton_viewingRoom$data;
export type ViewingRoomViewWorksButton_viewingRoom$key = {
  readonly " $data"?: ViewingRoomViewWorksButton_viewingRoom$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewingRoomViewWorksButton_viewingRoom">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ViewingRoomViewWorksButton_viewingRoom",
  "selections": [
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
      "name": "internalID",
      "storageKey": null
    },
    {
      "alias": "artworksForCount",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 1
        }
      ],
      "concreteType": "ArtworkConnection",
      "kind": "LinkedField",
      "name": "artworksConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": "artworksConnection(first:1)"
    }
  ],
  "type": "ViewingRoom",
  "abstractKey": null
};

(node as any).hash = "184db16c33d614d3d7d46953422775f7";

export default node;
