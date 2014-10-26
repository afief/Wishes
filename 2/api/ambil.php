<?php

include "override_functions.php";
include "plugin.php";
include "wp-db.php";

$wpdb = new wpdb("root", "root", "hbd", "localhost");

$kueri = $wpdb->get_results("SELECT * FROM `wish`");
if ($kueri)
	print_r($kueri);
else
	echo "false";

?>