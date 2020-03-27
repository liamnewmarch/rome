/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {TSTypeAssertion, tsTypeAssertion, AnyNode} from '@romejs/js-ast';
import {Generator} from '@romejs/js-generator';

export default function TSTypeAssertion(generator: Generator, node: AnyNode) {
  node = tsTypeAssertion.assert(node);
  if (generator.options.typeAnnotations) {
    generator.token('<');
    generator.print(node.typeAnnotation, node);
    generator.token('>');
    generator.space();
  }
  generator.print(node.expression, node);
}
