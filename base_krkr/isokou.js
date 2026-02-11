
{
	"title": "忙しい人のためのこうまきょう",
	"latest": [
		"v1.00a",
	],
	"binhacks": {
		"disable_bitmap_fonts": {
			"addr": "Rx1431cf"
		},
		"fix_create_window_nullptr": {
			"addr": "Rxc6158"
		},
	},
	"breakpoints": {
		"patch_script#tjs": {
			"addr": "Rx26acb9",
		},
		"patch_script#ks": {
			"addr": "Rx1dd146",
		},
		"string_free": {
			"addr": "Rx0088bf",
		},
		"patch_image": {
			"addr": "Rx152801",
		},
	},
	"fontrules": {
		"* -20 * *": "'Yu Gothic' -20 * CLEARTYPE_NATURAL_QUALITY",
		"* -24 * *": "'Touhou Biolinum' -24 * CLEARTYPE_NATURAL_QUALITY"
	},
}
