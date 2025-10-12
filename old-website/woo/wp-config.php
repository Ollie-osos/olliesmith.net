<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'ollies6_woo');

/** MySQL database username */
define('DB_USER', 'ollies6_wp889');

/** MySQL database password */
define('DB_PASSWORD', 'pUY2y[94[S');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '%pTv?9KmRr(;?(H&y7N`h2JGT/`[fvr**T)(X=C%)aut3I?4kktn5|]f:@=MY?wV');
define('SECURE_AUTH_KEY',  '~Gxt84S/+`vcJ~,>YfV$T]pxeSZ#n:MGy}3@m+`UC@/p6xTLGCH_ 4|+6;:q}7^p');
define('LOGGED_IN_KEY',    'h^]b8t?]*@l{G;*C2V+&g0[iE}Fntyd2GpVYlrEb5oBmB;eK~?Yb;ivJo<Az27^G');
define('NONCE_KEY',        'hk7FmxlIdbySx_j{s#1_MjRJm8nZv3m?yV,{ehoCfn+(5IP2sg=ffYwQ;<y23%sL');
define('AUTH_SALT',        'sG>{`v%*J:u%*jk2yqJ>m_%9I[?3<EpBpeEw6(4ia-$S1EY2%L[rG*b E22w]r;|');
define('SECURE_AUTH_SALT', 'A2o?U1Gle{ROyhWI0X?Mr`el^#s@TQL,cYK*A7rD2<#bTY)6h,^FvNZ(!IIv5~u%');
define('LOGGED_IN_SALT',   'D.lk8r@Gz<lW;k#7xa*62k)!_5K}IM(!2uadR61YU.;ym*6];c6C.YB$Vt^u7^%T');
define('NONCE_SALT',       '(Ej[ipdlc7_sL`TpoBy:|6jIb#f=79rDjW ($_@h2~AN.f@8Kv|Zp!RD]kTJ!#5O');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'woo_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
