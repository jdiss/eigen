/**
 * @generated SignedSource<<1134b891c18cc895a6aa1883b8d0b09b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Registration_me$data = {
  readonly hasCreditCards: boolean | null;
  readonly identityVerified: boolean | null;
  readonly " $fragmentType": "Registration_me";
};
export type Registration_me = Registration_me$data;
export type Registration_me$key = {
  readonly " $data"?: Registration_me$data;
  readonly " $fragmentSpreads": FragmentRefs<"Registration_me">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Registration_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasCreditCards",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "identityVerified",
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};

(node as any).hash = "e663b74c89150cc66e416da3aedaffd4";

export default node;
