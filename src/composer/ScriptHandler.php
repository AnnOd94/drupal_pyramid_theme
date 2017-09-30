<?php

/**
 * @file
 * Contains \DrupalPyramidTheme\composer\ScriptHandler.
 */

namespace DrupalPyramidTheme\composer;

class ScriptHandler {

  public static function build() {

    $root = 'web';
    $theme_path = $root . "/themes/contrib/drupal_pyramid_theme/";

    $env = (getenv('ENV') === 'production')
        ? '--production'
        : '';

    // Install npm and build assets.
    passthru("cd {$theme_path} && npm install {$env} && npm run build:all");

  }

  public static function update() {
    // Update npm and regenerate assets.
    passthru("npm update && npm run build:all");

  }

}
