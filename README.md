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

1. Remove the `IE8` compat tag.
Remove `<meta http-equiv="X-UA-Compatible" content="IE=8">` in `PT_HNAV_TEMPLATE`.

1. Insert the JavaScript
Add the JavaScript on the bottom of `PT_PORTAL_AS_JS`.

1. Add the CSS
Create a CSS Object in the branding page and add it to `PSSTYLEDEF` as a sub-stylesheet.
