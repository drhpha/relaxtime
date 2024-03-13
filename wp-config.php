<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'relaxtime_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'm1ex5e4% =6wORXz=sD*.G5x1x=A?W2[6>+6Md;N|3AsH6FAWS.XBC5s2&OMt6z@' );
define( 'SECURE_AUTH_KEY',  ':8Z?#A&URr%jj`4}uJ!(}w[^:(_V%Nj>#X|eBud?$(~pb~+t[PP=Q=pc7(8|`-#,' );
define( 'LOGGED_IN_KEY',    'M#/$?CwZi|a@oh.v)%kZ=w2pC5c?tdm{@K%a9ZZy$w>Ri8GV;(_`>1P)`,BLRM#:' );
define( 'NONCE_KEY',        'rSG45p~O*RTn/W`xS%H46H4+vsLeCGw)TcRA*=>}kgGI^>.^]hIg=DIaF|&37=mD' );
define( 'AUTH_SALT',        'H9H*GZ,BGD_A)6h=W1zN=aa$4Lu*;r.fG9<wiI6k)lUi4l+oda3hY/ay,}i6VX7[' );
define( 'SECURE_AUTH_SALT', 'm?FzWX)Hi7WmIfNYo;g7zIM/^IvG~1T3MNHCMs8hIP9#0KNuk<EM@x}!BqMwsEZ+' );
define( 'LOGGED_IN_SALT',   'DZ!ni|k@v=ghH#t^I He$ss>&,(#d#2LwuaWe.z%{9rT|nGEtR(rhXR|wU:/+]IE' );
define( 'NONCE_SALT',       'oEh)Nw.(HY)>5]j0v6F?{p+HG#bTPUs/_vV;q/,4bY*t%FjwBqq3SW~KMSBY4pHw' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
