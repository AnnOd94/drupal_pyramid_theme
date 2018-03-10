<?php

/**
 * @file
 * Contains \DrupalPyramidTheme\ScriptHandler.
 */

namespace DrupalPyramidTheme;

class ScriptHandler {

  /**
   * Get current theme path.
   */
  private static function themePath() {
    // $themePath = "./web/themes/contrib/pyramid/";
    $themePath = realpath(__DIR__ . '/../..');
    return $themePath;
  }

  /**
   * Install npm and build assets.
   */
  public static function build() {
    $env = (getenv('ENV') === 'production') ? '--production' : '';
    $themePath = static::themePath();
    passthru("echo '==============================='");
    passthru("echo 'Generating Pyramid theme assets'");
    passthru("echo '==============================='");
    passthru("cd {$themePath} && npm install {$env} && npm run build");
  }

  /**
   * Update assets.
   */
  public static function update() {
    $env = (getenv('ENV') === 'production') ? '--production' : '';
    $themePath = static::themePath();
    passthru("echo '==============================='");
    passthru("echo 'Updating Pyramid theme assets'");
    passthru("echo '==============================='");
    passthru("cd {$themePath} && npm update {$env} && npm run build");
  }

}
