<?php


class Api
{

	public array $routes = [];
	public string $namespace;
	
	public function __construct($namespace = "nextjs/v1")
	{
		$this->namespace = $namespace;
	}

	public function register ($name, callable $callback, $methods = "GET")
	{
		array_push($this->routes, array (
			'namespace' => $this->namespace,
			'name' =>  $name,
			'methods' => $methods,
			'callback' => $callback
		));
	}


	public function run () {
		add_action( 'rest_api_init', function () {
			foreach ($this->routes as $route) {
				register_rest_route($route['namespace'], $route['name'], array (
					'methods' => $route['methods'],
					'callback' => $route['callback'],
					'permission_callback' => function () {
						return true;
					}
				));
			}
		});
	}

	public static function error($message) {
		return new WP_Error($message, null, array ('status' => 404));
	}
}