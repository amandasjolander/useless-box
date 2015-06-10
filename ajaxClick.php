<?php
require_once('functions.php');

$conn = connect_to_sql();

if($conn->query($sql)){
	print json_encode(array("id" =>$conn->insert_id,"res"=>"OK"));
}
else{
	print 'error'
}

?>
