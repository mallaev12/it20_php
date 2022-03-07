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
    <link rel="stylesheet" href="http://it20/css/catalog.css">
</head>
<body>
    <main>
    <div class = "card" style = "margin-left:110px">
    <span style = "font-size:20px" onclick="history.back();" value = "Назад"><</span>
        <?php

            $id_catalog = $_GET['catalog'];
            $sql = "SELECT cp.category_id, p.product_id, p.photo_id, p.name_product, p.category_id
            FROM category_product cp
            JOIN product p
            ON  cp.product_id = p.product_id
            WHERE cp.category_id = $id_catalog";
            $result= mysqli_query($conn,$sql);
            $catalog = mysqli_fetch_all($result);
            $count = 12;
            $page_count = floor(count($catalog)/$count);
            if($catalog != NULL) {
                $sql = "SELECT name_category, discription_category from category WHERE category_id = $id_catalog";
                $result= mysqli_query($conn,$sql);
                $catagory_name = mysqli_fetch_array($result); 
                echo '<h2>'.$catagory_name[0].'</h2>';
                echo '<h4>'.$catagory_name[1].'</h2>';
                for($i = 0; $i < count($catalog);$i++){
                    
                    for ($j = 2;$j < 5; $j++){
                        if($j == 2){
                            
                            $sql = "SELECT ph.alt_img, ph.photo
                            FROM product p
                            JOIN photo ph 
                            ON ph.photo_id = p.photo_id
                            WHERE p.photo_id = ".$catalog[$i][$j]."";
                            $result1= mysqli_query($conn,$sql);
                            
                            $photo = mysqli_fetch_all($result1);
                            
                        } 
                        if ($j == 3) {
                            $sql ="Select name_category
                            from category
                            where category_id = ".$catalog[$i][$j+1]."";
                            $result= mysqli_query($conn,$sql);
                            $catalog_name = mysqli_fetch_array($result);
                            echo '<div class = "card_block">
                            <a href="http://it20/product_item.php/?product='.$catalog[$i][1].'">
                                <img src="'.$photo[0][1].'" alt="'.$photo[0][0].'" srcset="" width="200px" height="200px">
                                <p class="card_name">'.$catalog[$i][$j].'</p>
                                <p class="card_disc" style = "padding-left: 15px">Категория: '.$catalog_name[0].'</p>
                            </a>
                        </div>';
                        }
                    }
                }
                
            }else {
                header("Location:http://it20/404.php");
            }
            
        ?>
    </div>    
    
    </main>
        <div class = "nav">
            <?php 
                for($p = 0; $p <= $page_count; $p++){
                    $i = $p+1;
                    echo '<a href = "?catalog='.$id_catalog.'&page='.$p.'">'.$i.'</a>';  
                }
            ?>
        </div>
        
</body>
</html>