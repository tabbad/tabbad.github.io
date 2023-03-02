<?php
$id=$_GET["id"];
$answer=$_GET["answer"];
$array = [1=>"Mickael-Jackson",2=>"Sid-Viscious",3=>"Elvis-Presley",4=>"David-Bowie",5=>"Amy-Winehouse",6=>"Kiss",7=>"Ozzy-Osbourne"];

if (($answer==$array[$id]) ){
	$arr = array ("reponse"=>"gagne");
	echo json_encode($arr);
}

else {
	$arr = array ("reponse"=>"perdu");
	echo json_encode($arr);
}

?>