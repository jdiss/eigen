/**
 * @generated SignedSource<<384869462780691260956815d183b12b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyProfilePushNotificationsQuery$variables = {};
export type MyProfilePushNotificationsQueryVariables = MyProfilePushNotificationsQuery$variables;
export type MyProfilePushNotificationsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyProfilePushNotifications_me">;
  } | null;
};
export type MyProfilePushNotificationsQueryResponse = MyProfilePushNotificationsQuery$data;
export type MyProfilePushNotificationsQuery = {
  variables: MyProfilePushNotificationsQueryVariables;
  response: MyProfilePushNotificationsQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyProfilePushNotificationsQuery",
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
    "name": "MyProfilePushNotificationsQuery",
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
    "cacheID": "1829179a8a73f48f9575be267da96788",
    "id": null,
    "metadata": {},
    "name": "MyProfilePushNotificationsQuery",
    "operationKind": "query",
    "text": "query MyProfilePushNotificationsQuery {\n  me {\n    ...MyProfilePushNotifications_me\n    id\n  }\n}\n\nfragment MyProfilePushNotifications_me on Me {\n  receiveLotOpeningSoonNotification\n  receiveNewSalesNotification\n  receiveNewWorksNotification\n  receiveOutbidNotification\n  receivePromotionNotification\n  receivePurchaseNotification\n  receiveSaleOpeningClosingNotification\n}\n"
  }
};

(node as any).hash = "bcdcedb47646f44024b41af1fd280dca";

export default node;
