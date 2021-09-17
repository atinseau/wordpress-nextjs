<?php

require_once 'Includes/Api.php';

/**********************************************/

$api = new Api();

// ENDPOINT

$api->register("/settings", function (WP_REST_Request $request) {

	$params = $request->get_params();
	if (isset($params['name']))
		return get_option($params['name']);
	return Api::error("No name param");
}, "POST");

$api->register('/get-front-page', function (WP_REST_Request $request) {
	
	$fronted = get_option('page_on_front', false);
	$page = get_post($fronted) ?? false;

	if ($page)
		return true;
	return false;

}, "GET");


$api->register("/hello-world", function (WP_REST_Request $request) {
	return json_encode($_ENV);
});

$api->run();


/**********************************************/


add_filter( 'page_link', function ($url) {
	return str_replace("8080", "3000", $url);
}, 10, 2 );


/**********************************************/


/**
 * PAGE TYPE CONF
 */

add_post_type_support( 'page', 'excerpt');


/**
 * WPGRAPHQL CONFIF
 * 
 */

add_action( 'graphql_register_types', function() {

	// REGISTER RAW FIELD FOR GET RAW GUTENBERG BLOCK
	register_graphql_field( 'ContentNode', 'raw', [
		'type' => 'String',
		'description' => __( 'raw content', 'intern' ),
		'resolve' => function( \WPGraphQL\Model\Post $post, $args, $context, $info ) {
		   return  get_post($post->ID)->post_content;
		}
	]);

});


