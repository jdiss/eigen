/**
 * @generated SignedSource<<885daf7159b9b05a80c799e84cb4eb70>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewingRoomViewWorksButtonTestsQuery$variables = {};
export type ViewingRoomViewWorksButtonTestsQueryVariables = ViewingRoomViewWorksButtonTestsQuery$variables;
export type ViewingRoomViewWorksButtonTestsQuery$data = {
  readonly viewingRoom: {
    readonly " $fragmentSpreads": FragmentRefs<"ViewingRoomViewWorksButton_viewingRoom">;
  } | null;
};
export type ViewingRoomViewWorksButtonTestsQueryResponse = ViewingRoomViewWorksButtonTestsQuery$data;
export type ViewingRoomViewWorksButtonTestsQuery = {
  variables: ViewingRoomViewWorksButtonTestsQueryVariables;
  response: ViewingRoomViewWorksButtonTestsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "unused"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ViewingRoomViewWorksButtonTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ViewingRoom",
        "kind": "LinkedField",
        "name": "viewingRoom",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ViewingRoomViewWorksButton_viewingRoom"
          }
        ],
        "storageKey": "viewingRoom(id:\"unused\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ViewingRoomViewWorksButtonTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "ViewingRoom",
        "kind": "LinkedField",
        "name": "viewingRoom",
        "plural": false,
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
        "storageKey": "viewingRoom(id:\"unused\")"
      }
    ]
  },
  "params": {
    "cacheID": "3960f85b2ede3eeda1d48fe7915aa558",
    "id": null,
    "metadata": {},
    "name": "ViewingRoomViewWorksButtonTestsQuery",
    "operationKind": "query",
    "text": "query ViewingRoomViewWorksButtonTestsQuery {\n  viewingRoom(id: \"unused\") {\n    ...ViewingRoomViewWorksButton_viewingRoom\n  }\n}\n\nfragment ViewingRoomViewWorksButton_viewingRoom on ViewingRoom {\n  slug\n  internalID\n  artworksForCount: artworksConnection(first: 1) {\n    totalCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "e152f6981fa5beacc0e6b5874c62c16d";

export default node;
