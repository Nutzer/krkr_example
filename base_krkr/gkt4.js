
{
	"title": "逆転東方4",
	"latest": [
		"v1.00a",
	],
	"binhacks": {
		"disable_bitmap_fonts": {
			"addr": "Rx1157a3"
		},
		"fix_create_window_nullptr": {
			"addr": "Rxbe144"
		},
	},
	"breakpoints": {
		"patch_script#tjs": {
			"addr": "Rx26b709",
		},
		"patch_script#ks": {
			"addr": "Rx1c7a0e",
		},
		"string_free": {
			"addr": "Rx0088bf",
		},
		"patch_image": {
			"addr": "Rx124fc1",
		},
	},
	"fontrules": {
		"* * * *": "'Arial' * * CLEARTYPE_NATURAL_QUALITY"
	},
}
