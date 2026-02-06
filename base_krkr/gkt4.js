
{
	"title": "逆転東方4",
	"latest": [
		"v1.00a",
	],
	"binhacks.disable": {
		"disable_bitmap_fonts": {
			"code": "31c0 5f 5e 5b c3",
			"addr": "Rx1157a3"
		},
	},
	"breakpoints": {
		"patchtjs": {
			"addr": "Rx26b709",
			"cavesize": 6,
			"cave_exec": true,
		},
		"patchks": {
			"addr": "Rx1c7a0e",
			"cavesize": 6,
			"cave_exec": true,
		},
		"string_free": {
			"addr": "Rx0088bf",
			"cavesize": 6,
			"cave_exec": true,
		},
		"patchimage": {
			"addr": "Rx124fc1",
			"cavesize": 7,
			"cave_exec": true,
		},
	},
	"fontrules": {
		"* * * *": "'Arial' * * CLEARTYPE_NATURAL_QUALITY"
	},
}
