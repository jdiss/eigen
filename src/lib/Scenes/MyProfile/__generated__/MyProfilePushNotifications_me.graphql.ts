/**
 * @generated SignedSource<<f95bf3bf95e1446f0843f774c097c10a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyProfilePushNotifications_me$data = {
  readonly receiveLotOpeningSoonNotification: boolean | null;
  readonly receiveNewSalesNotification: boolean | null;
  readonly receiveNewWorksNotification: boolean | null;
  readonly receiveOutbidNotification: boolean | null;
  readonly receivePromotionNotification: boolean | null;
  readonly receivePurchaseNotification: boolean | null;
  readonly receiveSaleOpeningClosingNotification: boolean | null;
  readonly " $fragmentType": "MyProfilePushNotifications_me";
};
export type MyProfilePushNotifications_me = MyProfilePushNotifications_me$data;
export type MyProfilePushNotifications_me$key = {
  readonly " $data"?: MyProfilePushNotifications_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"MyProfilePushNotifications_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MyProfilePushNotifications_me",
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
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "9a86ae477d68cf097cedcb77c5869a93";

export default node;
