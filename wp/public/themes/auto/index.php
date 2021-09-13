<?php

$path = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

if (!strchr($path, "/wordpress/wp-admin/"))
{
	wp_redirect(env('FRONTEND_ENDPOINT'));
	exit(1);
}

