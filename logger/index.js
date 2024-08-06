import { gradients, stringGradient, format } from "./formatting.js";

/****************************************************************************************
 * Color Support
 *****************************************************************************************/

function toBoolean(val) {
	return val ? val !== "false" : false;
}

const env = globalThis.process?.env 
	|| import.meta.env 
	|| globalThis.Deno?.env.toObject() 
	|| globalThis.__env__ 
	|| globalThis;

const hasTTY = toBoolean(
  globalThis.process?.stdout && globalThis.process?.stdout.isTTY,
);

const isWindows = /^win/i.test(globalThis.process?.platform || "");

const isCI = toBoolean(env.CI)

const isColorSupported = (typeof document !== "undefined") 
	|| !toBoolean(env.NO_COLOR) 
	&& (toBoolean(env.FORCE_COLOR) || ((hasTTY || isWindows) && env.TERM !== "dumb"));

/****************************************************************************************
 * Writer
 *****************************************************************************************/

/**
 * @typedef { Object } Writer
 * @property { (level: { level: number, name: string }, input: any[]) => void } write
 * @param { any[] } input
 * @param { { level: number, name: string } } level
 * @returns void
 * */

/**
 * @class FancyConsoleWriter
 * @implements Writer
 */
class FancyConsoleWriter {
	constructor(name, color) {
		this.name = name;
		this.formattedName = stringGradient(`[ ${name} ]`, color);
		this.levels = {
			[Logger.LogLevels.DEBUG.name]: stringGradient("DEBUG", gradients.gray, { size: 12 }),
			[Logger.LogLevels.INFO.name]: stringGradient("INFO", gradients.blue),
			[Logger.LogLevels.SUCCESS.name]: stringGradient("SUCCESS", gradients.lime),
			[Logger.LogLevels.WARN.name]: stringGradient("WARN", gradients.orange),
			[Logger.LogLevels.ERROR.name]: stringGradient("ERROR", gradients.red, { bold: true }),
			[Logger.LogLevels.CRITICAL.name]: format("  CRITICAL  ", {
				background: [255, 0, 0],
				size: 20,
			}),
		};
	}
	write(msg, level) {
		console.log(
			this.formattedName.content + (level.name ? " " + this.levels[level.name].content : ""),
			...this.formattedName.styles,
			...(level.name ? this.levels[level.name].styles : []),
			...msg
		);
	}
}

/**
 * @class SimpleConsoleWriter
 * @implements Writer
 */
class SimpleConsoleWriter {
	constructor(name) {
		this.name = name;
	}
	write(msg, level) {
		console.log(
			`[${this.name}]`,
			level.name,
			...msg
		);
	}
}

/****************************************************************************************
 * Logger
 *****************************************************************************************/

class Logger {

	/**
	 * @typedef {Object} LogLevel
	 * @property {string} name
	 * @property {number} value
	 */
	static LogLevels = {
		DEBUG: {
			name: "DEBUG",
			value: 100,
		},
		INFO: {
			name: "INFO",
			value: 200,
		},
		SUCCESS: {
			name: "SUCCESS",
			value: 200,
		},
		WARN: {
			name: "WARN",
			value: 300,
		},
		ERROR: {
			name: "ERROR",
			value: 400,
		},
		CRITICAL: {
			name: "CRITICAL",
			value: 500,
		},
		PRODUCTION: {
			name: "PRODUCTION",
			value: 999
		},
		SILENT: {
			name: "SILENT",
			value: Infinity,
		}
	};

	/**
	 * The writer used to log messages.
	 * @type { Writer }
	 */
	writer;

	/**
	 * The log level of the logger. Only messages with a level greater than or equal to this will be logged.
	 * You can use the SILENT level to disable all logging.
	 * @type { LogLevel }
	 * */
	level;
	
	/**
	 * @param { LogLevel } level
	 * @param { Writer } writer
	 * */
	constructor(level, writer) {
		this.level = level;
		this.writer = writer;
	}

	/**
	 * @param { LogLevel | number } level
	 * @param { any[] } input
	 */
	log(
		level,
		input,
	) {
		const val = typeof level === "number" ? level : level.value;
		if(val === Infinity || val < this.level.value) return;
		this.writer?.write(input, { level: val, name: typeof level === "object" ? level.name : undefined });
	}
	/**
	 * Log a message for debugging purposes.
	 * @param  {...any} msg 
	 * @returns void
	 */
	debug = (...msg) => this.log(Logger.LogLevels.DEBUG, msg);
	/**
	 * Log a message that provides non critical information for the user.
	 * @param  {...any} msg 
	 * @returns void
	 */
	info = (...msg) => this.log(Logger.LogLevels.INFO, msg);
	/**
	 * Log a message that indicates a successful operation to the user.
	 * @param  {...any} msg 
	 * @returns void
	 */
	success = (...msg) => this.log(Logger.LogLevels.SUCCESS, msg);
	/**
	 * Log a message that indicates a warning to the user.
	 * @param  {...any} msg 
	 * @returns void
	 */
	warn = (...msg) => this.log(Logger.LogLevels.WARN, msg);
	/**
	 * Log a message that indicates an error to the user.
	 * @param  {...any} msg 
	 * @returns void
	 */
	error = (...msg) => this.log(Logger.LogLevels.ERROR, msg);
	/**
	 * Log a message that indicates a critical error to the user.
	 * @param  {...any} msg 
	 * @returns void
	 */
	critical = (...msg) => this.log(Logger.LogLevels.CRITICAL, msg);	
}

/****************************************************************************************
 * createLogger
 *****************************************************************************************/

/**
 * Create a new Logger, automatically choosing the best writer based on the environment.
 * @param { object } [config]
 * @param { LogLevel} [config.level]
 * @param { [[r: number, g: number, b: number], [r: number, g: number, b: number]]} [config.color]
 * @param { Writer } [config.writer]
 * @returns 
 */
function createLogger(name, config = {}) {
	if(!name) throw new Error("Logger must have a name");
	const level = config.level ?? Logger.LogLevels.INFO;
	const color = config.color ?? gradients.orange;
	const writer = config.writer ?? (isColorSupported ? new FancyConsoleWriter(config.name, color) : new SimpleConsoleWriter(config.name));
	return new Logger(level, writer);
}

export {
	isColorSupported,
	isCI,
	gradients,
	FancyConsoleWriter,
	SimpleConsoleWriter,
	Logger,
	createLogger,
};