/**
 * @generated SignedSource<<4893a380c102deb3989f7c2eb0d52dd2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EmailConfirmationBannerTestsQuery$variables = {};
export type EmailConfirmationBannerTestsQueryVariables = EmailConfirmationBannerTestsQuery$variables;
export type EmailConfirmationBannerTestsQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"EmailConfirmationBanner_me">;
  } | null;
};
export type EmailConfirmationBannerTestsQueryResponse = EmailConfirmationBannerTestsQuery$data;
export type EmailConfirmationBannerTestsQuery$rawResponse = {
  readonly me: {
    readonly canRequestEmailConfirmation: boolean;
    readonly id: string;
  } | null;
};
export type EmailConfirmationBannerTestsQueryRawResponse = EmailConfirmationBannerTestsQuery$rawResponse;
export type EmailConfirmationBannerTestsQuery = {
  variables: EmailConfirmationBannerTestsQueryVariables;
  response: EmailConfirmationBannerTestsQuery$data;
  rawResponse: EmailConfirmationBannerTestsQuery$rawResponse;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "EmailConfirmationBannerTestsQuery",
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
            "name": "EmailConfirmationBanner_me"
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
    "name": "EmailConfirmationBannerTestsQuery",
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
            "name": "canRequestEmailConfirmation",
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
    "cacheID": "b67ac5eb6cc6d0b2cacab1c7a3f0281b",
    "id": null,
    "metadata": {},
    "name": "EmailConfirmationBannerTestsQuery",
    "operationKind": "query",
    "text": "query EmailConfirmationBannerTestsQuery {\n  me {\n    ...EmailConfirmationBanner_me\n    id\n  }\n}\n\nfragment EmailConfirmationBanner_me on Me {\n  canRequestEmailConfirmation\n}\n"
  }
};

(node as any).hash = "9c9ab31576ef9d1a0d9f45c08ae46c3b";

export default node;
