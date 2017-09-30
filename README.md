# Drupal Mastaba Theme

This theme is used in our main project at [Drupal Mastaba](https://github.com/MatthieuScarset/drupal-mastaba).

It aims to be added via Composer and be updated via Git Subtree.

## Getting started

Add this theme as a dependency to your main Drupal project:
```
composer require matthieuscarset/drupal_mastaba_theme
```

Add this theme as a subproject with Git Subtree:
```
git remote add -f drupal_mastaba_theme ssh://git@github.com:MatthieuScarset/drupal_mastaba_theme.git
git subtree add --prefix web/modules/custom/drupal_mastaba_theme drupal_mastaba_theme master --squash
git fetch drupal_mastaba_theme master
git subtree pull --prefix web/modules/custom/drupal_mastaba_theme drupal_mastaba_theme master --squash
```

Contribute back to this theme:
```
git add .
git commit -m "Your commit message"
git subtree push --prefix=web/modules/custom/drupal_mastaba_theme drupal_mastaba_theme master
```

## Build and assets

We use custom Composer scripts to generate assets (see `composer.json`).

```
  "scripts": {
    "build": "DrupalMastabaTheme\\composer\\ScriptHandler::build",
    "update": "DrupalMastabaTheme\\composer\\ScriptHandler::update",
    "post-install-cmd": [
      "@build"
    ],
    "post-update-cmd": [
      "@update"
    ]
  }
```
