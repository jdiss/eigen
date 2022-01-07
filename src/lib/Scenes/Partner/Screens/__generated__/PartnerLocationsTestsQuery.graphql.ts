/**
 * @generated SignedSource<<2d339d32a26f90169af6bfe5f228af38>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PartnerLocationsTestsQuery$variables = {};
export type PartnerLocationsTestsQueryVariables = PartnerLocationsTestsQuery$variables;
export type PartnerLocationsTestsQuery$data = {
  readonly partner: {
    readonly id: string;
    readonly name: string | null;
    readonly internalID: string;
    readonly locations: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly " $fragmentSpreads": FragmentRefs<"PartnerMap_location">;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};
export type PartnerLocationsTestsQueryResponse = PartnerLocationsTestsQuery$data;
export type PartnerLocationsTestsQuery$rawResponse = {
  readonly partner: {
    readonly id: string;
    readonly name: string | null;
    readonly internalID: string;
    readonly locations: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly internalID: string;
          readonly city: string | null;
          readonly address: string | null;
          readonly address2: string | null;
          readonly postalCode: string | null;
          readonly summary: string | null;
          readonly coordinates: {
            readonly lat: number | null;
            readonly lng: number | null;
          } | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};
export type PartnerLocationsTestsQueryRawResponse = PartnerLocationsTestsQuery$rawResponse;
export type PartnerLocationsTestsQuery = {
  variables: PartnerLocationsTestsQueryVariables;
  response: PartnerLocationsTestsQuery$data;
  rawResponse: PartnerLocationsTestsQuery$rawResponse;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "gagosian"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "internalID",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PartnerLocationsTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Partner",
        "kind": "LinkedField",
        "name": "partner",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": "locations",
            "args": (v4/*: any*/),
            "concreteType": "LocationConnection",
            "kind": "LinkedField",
            "name": "locationsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "LocationEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Location",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "PartnerMap_location"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "locationsConnection(first:10)"
          }
        ],
        "storageKey": "partner(id:\"gagosian\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PartnerLocationsTestsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Partner",
        "kind": "LinkedField",
        "name": "partner",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": "locations",
            "args": (v4/*: any*/),
            "concreteType": "LocationConnection",
            "kind": "LinkedField",
            "name": "locationsConnection",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "LocationEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Location",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "city",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "address",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "address2",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "postalCode",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "summary",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "LatLng",
                        "kind": "LinkedField",
                        "name": "coordinates",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "lat",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "lng",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "locationsConnection(first:10)"
          }
        ],
        "storageKey": "partner(id:\"gagosian\")"
      }
    ]
  },
  "params": {
    "cacheID": "a21e58a903569282693bdbdc9fb74646",
    "id": null,
    "metadata": {},
    "name": "PartnerLocationsTestsQuery",
    "operationKind": "query",
    "text": "query PartnerLocationsTestsQuery {\n  partner(id: \"gagosian\") {\n    id\n    name\n    internalID\n    locations: locationsConnection(first: 10) {\n      edges {\n        node {\n          id\n          ...PartnerMap_location\n        }\n      }\n    }\n  }\n}\n\nfragment PartnerMap_location on Location {\n  id\n  internalID\n  city\n  address\n  address2\n  postalCode\n  summary\n  coordinates {\n    lat\n    lng\n  }\n}\n"
  }
};
})();

(node as any).hash = "61153414e283902b76e4c9f075ddd7a8";

export default node;
