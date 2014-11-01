# BETA - CalCentral Bar

[Download](https://chrome.google.com/webstore/detail/beta-calcentral-bar/gjgojkiebegidbijnplnjagnoilmilmc)

Add a CalCentral bar to the top of the SIS portal.

## Build

To build the extension use:

```
chmod +x build.sh
./build.sh
```

## Install locally into PeopleSoft

1. Change the `doctype`.
You should change the doctype to `<!doctype html>` in `PT_HNAV_TEMPLATE`.

1. Insert the JavaScript
Add the JavaScript on the bottom of `PT_PORTAL_AS_JS`.

1. Add the CSS
Create a CSS Object in the branding page and add it to `PSSTYLEDEF` as a sub-stylesheet.

*Note* PeopleSoft currently has an `IE8` compat tag `<meta http-equiv="X-UA-Compatible" content="IE=8">` in `PT_HNAV_TEMPLATE`. This causes IE9 & 10 to render the page like it was IE8 so won't render the page. If we remove this tag, the page seems to break in > IE9.
More info on http://msdn.microsoft.com/en-us/library/ff955275(v=vs.85).aspx
