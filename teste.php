<?php
$upload_dir = './';
// Write the log file.
$file  = $upload_dir . '/' . $file . '.log';
$file  = fopen('logfile' , 'a' );
$bytes = fwrite( $file, 'mysql' . "::" . "\n" ); 
fclose( $file ); 

?>
