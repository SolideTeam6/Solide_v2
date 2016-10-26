<?php
  include('connection.php');

  $project_name_modal= $_POST['project_name_modal'];
  $type_modal= $_POST['type_modal'];
  $budget_modal= $_POST['budget_modal'];
  $message_modal1= $_POST['message_modal1'];
  $target_modal= $_POST['target_modal'];
  $company_modal= $_POST['company_modal'];
  $contact_modal= $_POST['contact_modal'];
  $phone_modal= $_POST['phone_modal'];


   $sql = 'SELECT CASE WHEN MAX(id_prop) is NULL THEN 1 ELSE MAX(id_prop)+1 END id_prop FROM solidpsr_webpage.propuesta';
   $executeQuery = mysqli_query($conn,  $sql);

   if(! $executeQuery ) {
      die('Could not get data: ' . mysql_error());
   }

   while($row = mysqli_fetch_array($executeQuery)) {
      $id_prop = $row['id_prop'];
   }

   $sqlInsert = "INSERT INTO solidpsr_webpage.propuesta (id_prop, name, description, budget, target, contact, phone,  type, company, creation_date)
                                                  VALUES ('$id_prop', '$project_name_modal', '$message_modal1', '$budget_modal', '$target_modal', '$contact_modal', '$phone_modal',
                                                          '$type_modal', '$company_modal', now())";

         if (mysqli_query($conn, $sqlInsert)) {
             echo "new row inserted";
         } else {
             echo "Error". mysqli_error($conn);
         }

        mysqli_close($conn);
 ?>
