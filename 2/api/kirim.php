<?php

include "override_functions.php";
include "plugin.php";
include "wp-db.php";

$wpdb = new wpdb("root", "root", "hbd", "localhost");

if (isset($_POST['wish'])) {
	$wpdb->insert('wish', array('wish' => $_POST['wish'], 'ip' => $_SERVER['REMOTE_ADDR']), array('%s', '%s'));
	if ($wpdb->insert_id) {
		echo "success";
		exit;
	}
}
echo "error";


?>