<?php
/*
Plugin Name: Next Web Ninja Form Styles
Plugin URI: https://nextwebtoday.com
Description: Changes the styles for Ninja Forms and adds custom templates for each field type
Version: 1.0
Author: Mike Harrison
Author URI: http://github.com/mycarrysun
License: GPLv2
*/

if(!is_plugin_active('ninja-forms/ninja-forms.php')){
	return;
}

define('NW_NF_STYLES_URL', plugin_dir_url(__FILE__));

add_filter( 'ninja_forms_field_template_file_paths', 'nw_nf_styles_path' );
function nw_nf_styles_path( $paths ){
	$paths[] = __DIR__ . '/templates/' ;
	return $paths;
}

add_action('wp_enqueue_scripts', 'nw_nf_enqueue_styles');
function nw_nf_enqueue_styles(){
	wp_enqueue_style(
		'nw-nf-styles',
		NW_NF_STYLES_URL . 'css/styles.css',
		['nf-display']
	);

	wp_enqueue_script(
		'nw-nf-material-labels',
		NW_NF_STYLES_URL . 'js/nf_material_labels.js',
		['jquery'],
		false,
		true
	);

	wp_enqueue_script(
		'nw-nf-show-hide',
		NW_NF_STYLES_URL . 'js/nf_show_hide.js',
		['jquery'],
		false,
		true
	);

	wp_enqueue_script(
		'nw-nf-flex-layout',
		NW_NF_STYLES_URL . 'js/nf_flex_layout.js',
		['jquery'],
		false,
		true
	);
}