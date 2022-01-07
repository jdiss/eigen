/**
 * @generated SignedSource<<75e611bfbbb4bf97865411df6e141f48>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ShowsRailTestsQuery$variables = {};
export type ShowsRailTestsQueryVariables = ShowsRailTestsQuery$variables;
export type ShowsRailTestsQuery$data = {
  readonly showsConnection: {
    readonly " $fragmentSpreads": FragmentRefs<"ShowsRail_showsConnection">;
  } | null;
};
export type ShowsRailTestsQueryResponse = ShowsRailTestsQuery$data;
export type ShowsRailTestsQuery$rawResponse = {
  readonly showsConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly internalID: string;
        readonly slug: string;
        readonly name: string | null;
        readonly formattedStartAt: string | null;
        readonly formattedEndAt: string | null;
        readonly href: string | null;
        readonly metaImage: {
          readonly url: string | null;
        } | null;
        readonly partner: {
          readonly __typename: "Partner";
          readonly __isNode: "Partner";
          readonly id: string;
          readonly name: string | null;
        } | {
          readonly __typename: "ExternalPartner";
          readonly __isNode: "ExternalPartner";
          readonly id: string;
          readonly name: string | null;
        } | {
          readonly __typename: string;
          readonly __isNode: string;
          readonly id: string;
        } | null;
        readonly id: string;
      } | null;
    } | null> | null;
  } | null;
};
export type ShowsRailTestsQueryRawResponse = ShowsRailTestsQuery$rawResponse;
export type ShowsRailTestsQuery = {
  variables: ShowsRailTestsQueryVariables;
  response: ShowsRailTestsQuery$data;
  rawResponse: ShowsRailTestsQuery$rawResponse;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "format",
    "value": "MMM D"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ShowsRailTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ShowConnection",
        "kind": "LinkedField",
        "name": "showsConnection",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ShowsRail_showsConnection"
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
    "name": "ShowsRailTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ShowConnection",
        "kind": "LinkedField",
        "name": "showsConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ShowEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Show",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
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
                    "name": "slug",
                    "storageKey": null
                  },
                  (v0/*: any*/),
                  {
                    "alias": "formattedStartAt",
                    "args": (v1/*: any*/),
                    "kind": "ScalarField",
                    "name": "startAt",
                    "storageKey": "startAt(format:\"MMM D\")"
                  },
                  {
                    "alias": "formattedEndAt",
                    "args": (v1/*: any*/),
                    "kind": "ScalarField",
                    "name": "endAt",
                    "storageKey": "endAt(format:\"MMM D\")"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "href",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Image",
                    "kind": "LinkedField",
                    "name": "metaImage",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "version",
                            "value": "small"
                          }
                        ],
                        "kind": "ScalarField",
                        "name": "url",
                        "storageKey": "url(version:\"small\")"
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "partner",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v0/*: any*/)
                        ],
                        "type": "Partner",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v0/*: any*/),
                          (v2/*: any*/)
                        ],
                        "type": "ExternalPartner",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v2/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "95c18f9fa5eadb70956d6d595a97ed49",
    "id": null,
    "metadata": {},
    "name": "ShowsRailTestsQuery",
    "operationKind": "query",
    "text": "query ShowsRailTestsQuery {\n  showsConnection {\n    ...ShowsRail_showsConnection\n  }\n}\n\nfragment ShowCard_show on Show {\n  name\n  formattedStartAt: startAt(format: \"MMM D\")\n  formattedEndAt: endAt(format: \"MMM D\")\n  href\n  metaImage {\n    url(version: \"small\")\n  }\n  partner {\n    __typename\n    ... on Partner {\n      name\n    }\n    ... on ExternalPartner {\n      name\n      id\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment ShowsRail_showsConnection on ShowConnection {\n  edges {\n    node {\n      internalID\n      slug\n      ...ShowCard_show\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "dee41dab12fbd119505d9060bdadfa47";

export default node;
