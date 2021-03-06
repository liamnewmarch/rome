/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
	Reporter,
	ReporterConditionalStream,
	ReporterOptions,
} from "@internal/cli-reporter";
import {DEFAULT_TERMINAL_FEATURES} from "@internal/cli-environment";
import {AnyMarkup, markup} from "@internal/markup";

export default class Logger extends Reporter {
	constructor(
		loggerType: string,
		opts: ReporterOptions,
		{write, check}: {
			check: () => boolean;
			write: (chunk: string) => void;
		},
	) {
		super(opts);
		this.loggerType = loggerType;

		this.conditionalStream = this.attachConditionalStream(
			{
				format: "markup",
				features: {
					...DEFAULT_TERMINAL_FEATURES,
					columns: undefined,
				},
				write,
			},
			check,
		);
	}

	private conditionalStream: ReporterConditionalStream;
	private loggerType: string;

	public updateStream() {
		this.conditionalStream.update();
	}

	protected getMessagePrefix(): AnyMarkup {
		const inner = `${this.loggerType} ${process.pid}`;
		const timestamp = new Date().toISOString();
		return markup`<dim>[${timestamp}] [${inner}]</dim> `;
	}
}
