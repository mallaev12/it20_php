<?php
    include "header.php";
    include "dbcon.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Document</title>
</head>
<body>
    <main style = "margin-left:110px">
        <h3>Выберите категорю товара</h3>
        <div class="catalog" >
            
            <?php 
                $sql = "SELECT c.category_id, c.name_category, count(*) as product_id 
                FROM category_product cp 
                JOIN category c 
                ON c.category_id = cp.category_id 
                GROUP BY c.name_category, c.category_id
                ORDER BY c.name_category DESC";
                $result= mysqli_query($conn,$sql);
                $category_value = mysqli_fetch_all($result);
                for($i = 0; $i < count($category_value); $i++){
                    for($j = 1; $j < 3; $j++){
                        if($j == 2){
                            echo "в наличий (",$category_value[$i][$j], ")</a></p>";
                        }else{
                            echo '<p id= "catalog__item" class = "catalog__item"><a href = "product.php/?catalog='.$category_value[$i][0].'">',$category_value[$i][$j], " ";
                        }
                    }
                    echo '<br>';
                }
            ?>
            </div>
    </main>
   
</body>
</html>