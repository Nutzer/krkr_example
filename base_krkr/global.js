{
	"binhacks": {
		"disable_bitmap_fonts": {
			"code": "31c0 5f 5e 5b c3",
		},
		"fix_create_window_nullptr": {
			"code": "8d434c 9090 50",
		},
	},
	"breakpoints": {
		"patch_script#tjs": {
			"filename": "[ebp-0x14]",
			"content": "[ebp-0xc]",
			"cavesize": 6,
			"cave_exec": true,
		},
		"patch_script#ks": {
			"filename": "[[esp+0x14]]",
			"content": "[ebp-0x4]",
			"cavesize": 6,
			"cave_exec": true,
		},
		"string_free": {
			"cavesize": 6,
			"cave_exec": true,
		},
		"patch_image": {
			"cavesize": 7,
			"cave_exec": true,
		},
	},
}
