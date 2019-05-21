# ting_expansion_search

Fix error in curl multi module line 12. Add $options to foreach:

  if(is_array($sessions)){
    foreach($sessions as $session){
        $options = array(
    CURLOPT_RETURNTRANSFER => true, 
    CURLOPT_FOLLOWLOCATION => true
  );