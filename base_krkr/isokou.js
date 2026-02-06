
{
	"title": "忙しい人のためのこうまきょう",
	"latest": [
		"v1.00a",
	],
	"binhacks": {
		"disable_bitmap_fonts": {
			"code": "31c0 5f 5e 5b c3",
			"addr": "Rx1431cf"
		},
	},
	"breakpoints": {
		"patchtjs": {
			"addr": "Rx26acb9",
			"cavesize": 6,
			"cave_exec": true,
		},
		"patchks": {
			"addr": "Rx1dd146",
			"cavesize": 6,
			"cave_exec": true,
		},
		"string_free": {
			"addr": "Rx0088bf",
			"cavesize": 6,
			"cave_exec": true,
		},
		"patchimage": {
			"addr": "Rx152801",
			"cavesize": 7,
			"cave_exec": true,
		},
	},
	"fontrules": {
		"* -20 * *": "'Yu Gothic' -20 * CLEARTYPE_NATURAL_QUALITY",
		"* -24 * *": "'Touhou Biolinum' -24 * CLEARTYPE_NATURAL_QUALITY"
	},
}
