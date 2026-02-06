# Example patches for thcrap_krkr

These patches contain examples that show how thcrap_krkr-patches work. 

It contains the following things, structured in two patches that should be applied in order:
- base_krkr 
    - *breakpoint locations / binhacks*  in `game.js`
    - *Support patch for font kerning* in `game/system/MessageLayer.tjs.jdiff`
    - *TLNote macro definition* in `gkt4/system/first.ks.jdiff`, `isokou/system/logo.ks.jdiff`
    - *Positions of reoccuring strings* (e.g. character names) in `game/strings.js`, `gkt4/01_A1_非想逆転則.ks.jdiff`, `isokou/1 プロローグ.ks.jdiff`
- lang_en
    - Examples for patching *Text, Character Names and Images*

---

### Patch format
The tjs and ks patches are structured as follows:
```
{
  "[file_sha256]": {
    "@[script_utf8_start_byte],[script_utf8_end_byte]": "replacement1",
    "@[script_utf8_start_byte],[script_utf8_end_byte]": "replacement2",
    ...
  }
  ...
}
```

Additionally, reoccuring strings (like character names) can be defined in `strings.js` and then referenced in any patch using `[@string_name]`