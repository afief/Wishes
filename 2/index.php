<?php ?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1">
  <title>HBD Putri-Dara :3</title>
  <link rel="stylesheet" href="style.css">
  <script src="consoler.js" type="text/javascript" charset="utf-8" async defer></script>
  <script src="script2.js" type="text/javascript" charset="utf-8" async defer></script>
  <script src="script.js" type="text/javascript" charset="utf-8" async defer></script>
</head>
<body>

  <div class="cake">

    <div class="atas">
      <div class="lapisan"></div>
      <div class="lapisan"></div>
      <div class="lapisan"></div>
      <div class="lapisan"></div>
      <div class="lapisan"></div>
    </div>
    <div class="putih"></div>
    <div class="roti"></div>

    <h1>Happy Birthday!</h1>
    <div class="poto"></div>
    <div class="name">Putri-Dara</div>
  </div>

  <div class="canvaswrapper">
    <canvas id="drawing_canvas">
    </canvas>
  </div>

  <div class="wish" id="wishwrapper">

    <?php

    include "api/override_functions.php";
    include "api/plugin.php";
    include "api/wp-db.php";

    $wpdb = new wpdb("root", "root", "hbd", "localhost");

    $kueri = $wpdb->get_var("SELECT `wish` FROM `wish` LIMIT 0, 1");
    if ($kueri) {
      echo '<div id="handwritten"><h2>A Wish</h2>' . nl2br($kueri) . '</div>';
    } else {
      echo '<textarea id="wish"></textarea>';
      echo '<button id="make">Make A Wish</button>';
    }
    ?>
  </div>

  <script>
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '308104096001937',
        xfbml      : true,
        version    : 'v2.1'
      });
    };

    (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
  </script>
</body>
</html>