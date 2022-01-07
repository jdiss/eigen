/**
 * @generated SignedSource<<00ec263e113bf506d29b1c30e5baf8ff>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OnboardingPersonalizationListQuery$variables = {};
export type OnboardingPersonalizationListQueryVariables = OnboardingPersonalizationListQuery$variables;
export type OnboardingPersonalizationListQuery$data = {
  readonly highlights: {
    readonly " $fragmentSpreads": FragmentRefs<"OnboardingPersonalization_highlights">;
  } | null;
};
export type OnboardingPersonalizationListQueryResponse = OnboardingPersonalizationListQuery$data;
export type OnboardingPersonalizationListQuery = {
  variables: OnboardingPersonalizationListQueryVariables;
  response: OnboardingPersonalizationListQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "OnboardingPersonalizationListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Highlights",
        "kind": "LinkedField",
        "name": "highlights",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "OnboardingPersonalization_highlights"
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
    "name": "OnboardingPersonalizationListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Highlights",
        "kind": "LinkedField",
        "name": "highlights",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "excludeFollowedArtists",
                "value": true
              }
            ],
            "concreteType": "Artist",
            "kind": "LinkedField",
            "name": "popularArtists",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "internalID",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
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
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "initials",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "href",
                "storageKey": null
              },
              {
                "alias": "is_followed",
                "args": null,
                "kind": "ScalarField",
                "name": "isFollowed",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "nationality",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "birthday",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "deathday",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "image",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "url",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "popularArtists(excludeFollowedArtists:true)"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "28a4a013d09646916f446618aee15cd7",
    "id": null,
    "metadata": {},
    "name": "OnboardingPersonalizationListQuery",
    "operationKind": "query",
    "text": "query OnboardingPersonalizationListQuery {\n  highlights {\n    ...OnboardingPersonalization_highlights\n  }\n}\n\nfragment ArtistListItem_artist on Artist {\n  id\n  internalID\n  slug\n  name\n  initials\n  href\n  is_followed: isFollowed\n  nationality\n  birthday\n  deathday\n  image {\n    url\n  }\n}\n\nfragment OnboardingPersonalization_highlights on Highlights {\n  popularArtists(excludeFollowedArtists: true) {\n    internalID\n    ...ArtistListItem_artist\n    id\n  }\n}\n"
  }
};

(node as any).hash = "250f305d8a19c3c02b63b677504e785f";

export default node;
