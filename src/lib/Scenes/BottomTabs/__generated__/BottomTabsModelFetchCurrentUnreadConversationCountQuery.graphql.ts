/**
 * @generated SignedSource<<3ce9f22747f53c6624460debc0df9330>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type BottomTabsModelFetchCurrentUnreadConversationCountQuery$variables = {};
export type BottomTabsModelFetchCurrentUnreadConversationCountQueryVariables = BottomTabsModelFetchCurrentUnreadConversationCountQuery$variables;
export type BottomTabsModelFetchCurrentUnreadConversationCountQuery$data = {
  readonly me: {
    readonly unreadConversationCount: number;
  } | null;
};
export type BottomTabsModelFetchCurrentUnreadConversationCountQueryResponse = BottomTabsModelFetchCurrentUnreadConversationCountQuery$data;
export type BottomTabsModelFetchCurrentUnreadConversationCountQuery = {
  variables: BottomTabsModelFetchCurrentUnreadConversationCountQueryVariables;
  response: BottomTabsModelFetchCurrentUnreadConversationCountQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "unreadConversationCount",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BottomTabsModelFetchCurrentUnreadConversationCountQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BottomTabsModelFetchCurrentUnreadConversationCountQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "bbb82e579a2a395cd7b5dfeb16373463",
    "id": null,
    "metadata": {},
    "name": "BottomTabsModelFetchCurrentUnreadConversationCountQuery",
    "operationKind": "query",
    "text": "query BottomTabsModelFetchCurrentUnreadConversationCountQuery {\n  me @principalField {\n    unreadConversationCount\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "60d4d4f405f56d586f4ad3027429bad3";

export default node;
