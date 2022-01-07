/**
 * @generated SignedSource<<30ca116f9702941ab580d6f2d1d1abcc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type ArtworkAggregation = "ARTIST" | "ARTIST_NATIONALITY" | "ATTRIBUTION_CLASS" | "COLOR" | "DIMENSION_RANGE" | "FOLLOWED_ARTISTS" | "GALLERY" | "INSTITUTION" | "LOCATION_CITY" | "MAJOR_PERIOD" | "MATERIALS_TERMS" | "MEDIUM" | "MERCHANDISABLE_ARTISTS" | "PARTNER" | "PARTNER_CITY" | "PERIOD" | "PRICE_RANGE" | "TOTAL" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type FairAllFollowedArtists_fairForFilters$data = {
  readonly filterArtworksConnection: {
    readonly aggregations: ReadonlyArray<{
      readonly slice: ArtworkAggregation | null;
      readonly counts: ReadonlyArray<{
        readonly count: number;
        readonly name: string;
        readonly value: string;
      } | null> | null;
    } | null> | null;
    readonly counts: {
      readonly followedArtists: any | null;
    } | null;
  } | null;
  readonly " $fragmentType": "FairAllFollowedArtists_fairForFilters";
};
export type FairAllFollowedArtists_fairForFilters = FairAllFollowedArtists_fairForFilters$data;
export type FairAllFollowedArtists_fairForFilters$key = {
  readonly " $data"?: FairAllFollowedArtists_fairForFilters$data;
  readonly " $fragmentSpreads": FragmentRefs<"FairAllFollowedArtists_fairForFilters">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FairAllFollowedArtists_fairForFilters",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "aggregations",
          "value": [
            "COLOR",
            "DIMENSION_RANGE",
            "PARTNER",
            "MAJOR_PERIOD",
            "MEDIUM",
            "PRICE_RANGE",
            "FOLLOWED_ARTISTS",
            "ARTIST"
          ]
        },
        {
          "kind": "Literal",
          "name": "first",
          "value": 0
        }
      ],
      "concreteType": "FilterArtworksConnection",
      "kind": "LinkedField",
      "name": "filterArtworksConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ArtworksAggregationResults",
          "kind": "LinkedField",
          "name": "aggregations",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "slice",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "AggregationCount",
              "kind": "LinkedField",
              "name": "counts",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "count",
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
                  "name": "value",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "FilterArtworksCounts",
          "kind": "LinkedField",
          "name": "counts",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "followedArtists",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "filterArtworksConnection(aggregations:[\"COLOR\",\"DIMENSION_RANGE\",\"PARTNER\",\"MAJOR_PERIOD\",\"MEDIUM\",\"PRICE_RANGE\",\"FOLLOWED_ARTISTS\",\"ARTIST\"],first:0)"
    }
  ],
  "type": "Fair",
  "abstractKey": null
};

(node as any).hash = "c6f0cb1403d5394f510747296e887c7d";

export default node;
