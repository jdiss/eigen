/**
 * @generated SignedSource<<53da3f3a24e4f564f0d430662a4c912f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyProfilePushNotificationsRefetchQuery$variables = {};
export type MyProfilePushNotificationsRefetchQueryVariables = MyProfilePushNotificationsRefetchQuery$variables;
export type MyProfilePushNotificationsRefetchQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyProfilePushNotifications_me">;
  } | null;
};
export type MyProfilePushNotificationsRefetchQueryResponse = MyProfilePushNotificationsRefetchQuery$data;
export type MyProfilePushNotificationsRefetchQuery = {
  variables: MyProfilePushNotificationsRefetchQueryVariables;
  response: MyProfilePushNotificationsRefetchQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyProfilePushNotificationsRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MyProfilePushNotifications_me"
          }
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
    "name": "MyProfilePushNotificationsRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "receiveLotOpeningSoonNotification",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "receiveNewSalesNotification",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "receiveNewWorksNotification",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "receiveOutbidNotification",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "receivePromotionNotification",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "receivePurchaseNotification",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "receiveSaleOpeningClosingNotification",
            "storageKey": null
          },
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
    "cacheID": "cc269c035d7c4e07b2d0b7ef7ef6faef",
    "id": null,
    "metadata": {},
    "name": "MyProfilePushNotificationsRefetchQuery",
    "operationKind": "query",
    "text": "query MyProfilePushNotificationsRefetchQuery {\n  me {\n    ...MyProfilePushNotifications_me\n    id\n  }\n}\n\nfragment MyProfilePushNotifications_me on Me {\n  receiveLotOpeningSoonNotification\n  receiveNewSalesNotification\n  receiveNewWorksNotification\n  receiveOutbidNotification\n  receivePromotionNotification\n  receivePurchaseNotification\n  receiveSaleOpeningClosingNotification\n}\n"
  }
};

(node as any).hash = "e0fa2c50a8493ca1b991b926194d6abc";

export default node;
