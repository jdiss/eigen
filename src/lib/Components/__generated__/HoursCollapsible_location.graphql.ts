/**
 * @generated SignedSource<<501260cbe08eb680d460a8e82eb70da2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HoursCollapsible_location$data = {
  readonly openingHours: {
    readonly schedules?: ReadonlyArray<{
      readonly days: string | null;
      readonly hours: string | null;
    } | null> | null;
    readonly text?: string | null;
  } | null;
  readonly " $fragmentType": "HoursCollapsible_location";
};
export type HoursCollapsible_location = HoursCollapsible_location$data;
export type HoursCollapsible_location$key = {
  readonly " $data"?: HoursCollapsible_location$data;
  readonly " $fragmentSpreads": FragmentRefs<"HoursCollapsible_location">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HoursCollapsible_location",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "openingHours",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "FormattedDaySchedules",
              "kind": "LinkedField",
              "name": "schedules",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "days",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "hours",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "type": "OpeningHoursArray",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "text",
              "storageKey": null
            }
          ],
          "type": "OpeningHoursText",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Location",
  "abstractKey": null
};

(node as any).hash = "126caacd37268a80e97e08d236f3cb40";

export default node;
