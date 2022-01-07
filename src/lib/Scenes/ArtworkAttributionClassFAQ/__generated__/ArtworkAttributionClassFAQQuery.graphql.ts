/**
 * @generated SignedSource<<92bf28ad2a3261a8acaf19b6a3419617>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ArtworkAttributionClassFAQQuery$variables = {};
export type ArtworkAttributionClassFAQQueryVariables = ArtworkAttributionClassFAQQuery$variables;
export type ArtworkAttributionClassFAQQuery$data = {
  readonly artworkAttributionClasses: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"ArtworkAttributionClassFAQ_artworkAttributionClasses">;
  } | null> | null;
};
export type ArtworkAttributionClassFAQQueryResponse = ArtworkAttributionClassFAQQuery$data;
export type ArtworkAttributionClassFAQQuery = {
  variables: ArtworkAttributionClassFAQQueryVariables;
  response: ArtworkAttributionClassFAQQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ArtworkAttributionClassFAQQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AttributionClass",
        "kind": "LinkedField",
        "name": "artworkAttributionClasses",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ArtworkAttributionClassFAQ_artworkAttributionClasses"
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
    "name": "ArtworkAttributionClassFAQQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AttributionClass",
        "kind": "LinkedField",
        "name": "artworkAttributionClasses",
        "plural": true,
        "selections": [
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
            "name": "longDescription",
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
    "cacheID": "09e438feec326b14526de8bd9302e70b",
    "id": null,
    "metadata": {},
    "name": "ArtworkAttributionClassFAQQuery",
    "operationKind": "query",
    "text": "query ArtworkAttributionClassFAQQuery {\n  artworkAttributionClasses {\n    ...ArtworkAttributionClassFAQ_artworkAttributionClasses\n    id\n  }\n}\n\nfragment ArtworkAttributionClassFAQ_artworkAttributionClasses on AttributionClass {\n  name\n  longDescription\n}\n"
  }
};

(node as any).hash = "87f390482264f567dde7a47f2b01a405";

export default node;
