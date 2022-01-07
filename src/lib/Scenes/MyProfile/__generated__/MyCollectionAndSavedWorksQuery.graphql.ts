/**
 * @generated SignedSource<<01a201eadf8347f4966a0129ae110c02>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MyCollectionAndSavedWorksQuery$variables = {};
export type MyCollectionAndSavedWorksQueryVariables = MyCollectionAndSavedWorksQuery$variables;
export type MyCollectionAndSavedWorksQuery$data = {
  readonly me: {
    readonly " $fragmentSpreads": FragmentRefs<"MyCollectionAndSavedWorks_me">;
  } | null;
};
export type MyCollectionAndSavedWorksQueryResponse = MyCollectionAndSavedWorksQuery$data;
export type MyCollectionAndSavedWorksQuery = {
  variables: MyCollectionAndSavedWorksQueryVariables;
  response: MyCollectionAndSavedWorksQuery$data;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyCollectionAndSavedWorksQuery",
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
            "name": "MyCollectionAndSavedWorks_me"
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
    "name": "MyCollectionAndSavedWorksQuery",
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
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "bio",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "icon",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "version",
                    "value": "thumbnail"
                  }
                ],
                "kind": "ScalarField",
                "name": "url",
                "storageKey": "url(version:\"thumbnail\")"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
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
    "cacheID": "0b7a60c41163ceed3735a692cbc77fef",
    "id": null,
    "metadata": {},
    "name": "MyCollectionAndSavedWorksQuery",
    "operationKind": "query",
    "text": "query MyCollectionAndSavedWorksQuery {\n  me @optionalField {\n    ...MyCollectionAndSavedWorks_me\n    id\n  }\n}\n\nfragment MyCollectionAndSavedWorks_me on Me {\n  name\n  bio\n  icon {\n    url(version: \"thumbnail\")\n  }\n  createdAt\n  ...MyProfileEditFormModal_me\n}\n\nfragment MyProfileEditFormModal_me on Me {\n  name\n  bio\n  icon {\n    url(version: \"thumbnail\")\n  }\n}\n"
  }
};

(node as any).hash = "e2528a0edab35bb34cd3e89a63547d21";

export default node;
