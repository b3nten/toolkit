interface Writer {
	write(message: any[], level: { level: number, name: string }): void;
}

export const isColorSupported: boolean;
export const isCI: boolean;

export const gradients = Record<
	"purple" | "sunset" | "grey" | "orange" | "lime" | "blue" | "red",
	[[number, number, number], [number, number, number]]
>

export const FancyConsoleWriter: Writer;
export const SimpleConsoleWriter: Writer;

export class Logger {
	static LogLevels = {
		DEBUG: {
			value: 100,
			name: "Debug"
		},
		INFO: {
			value: 200,
			name: "Info"
		},
		SUCCESS: {
			value: 200,
			name: "Success"
		},
		WARNING: {
			value: 300,
			name: "Warning"
		},
		ERROR: {
			value: 400,
			name: "Error"
		},
		CRITICAL: {
			value: 500,
			name: "Critical"
		},
		PRODUCTION: {
			value: 999,
			name: "Production"
		},
		SILENT: {
			value: Infinity,
			name: "Silent"
		}
	}

	constructor(level: number, writer: Writer);

	log(level: number, ...message: any[]): void;
	debug(...message: any[]): void;
	info(...message: any[]): void;
	success(...message: any[]): void;
	warning(...message: any[]): void;
	error(...message: any[]): void;
	critical(...message: any[]): void;
}

type Config = {
	level?: { level: number, name: string };
	color?: [[number, number, number], [number, number, number]];
	writer?: Writer;
}

export function createLogger(name: string, config: Config = {}): Logger;