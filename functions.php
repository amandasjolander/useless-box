<?php

	function connect_to_sql(){
		$connection = mysqli_connect('localhost','root','');
		mysqli_select_db($connection, 'click');
		return $connection;
	}
?>