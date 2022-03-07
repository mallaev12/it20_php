<?php include "header.php"; include "dbcon.php";?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="http://it20/css/zebra_dialog.css">
    <link rel="stylesheet" href="http://it20/css/main.css">
</head>
<body>  
    <?php
        $id_product = $_GET['product'];
        $sql = "SELECT * 
        from product
        WHERE product_id = $id_product";
        $result = mysqli_query($conn, $sql);
        $product = mysqli_fetch_array($result);
        //print_r($product);
        if($product != NULL){
            $sql = "SELECT c.category_id, c.name_category
            FROM category_product cp
            JOIN category c
            ON c.category_id = cp.category_id
            WHERE cp.product_id = ".$product[0]."";
        $result = mysqli_query($conn, $sql);
        $category = mysqli_fetch_all($result);
        //print_r($category);
        $sql = 'SELECT pp.product_id, pp.photo_id, p.alt_img, p.photo FROM photo p JOIN photo_product pp ON p.photo_id = pp.photo_id where pp.product_id = '.$product[0].'';
        $result = mysqli_query($conn, $sql);
        $photo = mysqli_fetch_all($result);
       
        if($product[4]!=NULL){
            $sql = 'SELECT * from promo where promo_id = '.$product[4].'';
            $result = mysqli_query($conn, $sql);
            $promo = mysqli_fetch_array($result);
            }
        }else {
            header("Location:http://it20/404.php");
        }
        //print_r($product);
        
    ?>
<div class="layout">
    <span style = "font-size:20px" onclick="history.back();" value = "Назад"><</span>
        <div class="product">
            <div class="product__img">
                <div class="product__img-item">
                    <div class="product__img-list">
                        <?php for($i = 0; $i < count($photo); $i++){
                                echo '<img src="'.$photo[$i][3].'" alt="'.$photo[$i][2].'" srcset="" class = "product__img-card" width="90px" height="130px">';
                            
                        }?>
                     </div>
                    <div class="product__img-bot">
                        <img src="http://it20/img/12.png" alt="" srcset="" height = "7px">
                    </div>
                </div>
                <div class="product__preview">
                    <img src="<?php echo $photo[0][3]?>" alt="<?php echo $photo[0][2]?>" srcset="" class = "product__preview-item" width =  "340px" height="492px">
                </div>
            </div>
            <div class="product__description">
                <h2 class="product__title"><?php echo $product[2]?></h2>
                <div class="product__categories">
                    <?php for($i = 0; $i < count($category);$i++){
                            echo "<a href = 'http://it20/product.php/?catalog=".$category[$i][0]."'>".$category[$i][1]."</a></li>";
                    }?>
                    
                    
                </div>
                <div class="product__price">
                    <div class="product__price-full">
                        <span class="product__price-old"><?php echo $product[6]?>₽</span>
                        <span class="product__price-new"><?php echo $product[8]?> ₽</span>
                        <?php if($promo[2] != NULL){
                            $sum = $product[8]-($product[8]*($promo[2]/100));
                            echo '<span class="product__price-value">'.$sum.' ₽</span>
                            <span class="product__price-text">— с промокодом</span>';
                        }else {
                            echo '
                            <span class="product__price-text">промокода нет</span>';
                        }
                        ?>
                        
                    </div>
                </div>
                <div class="product__info">
                    <div class="product__info-item">
                        <img src="http://it20/img/gal.png" alt="#"/>
                        В наличии в магазине  <a href="#">Lamoda </a>
                    </div>
                    <div class="product__info-item">
                        <img src="http://it20/img/2.png" alt="#"/>
                        Бесплатная доставка
                    </div>
                </div>

                <div class="product_basket">
                    <span class = "product_basket-minus">-</span>
                    <div class = "product_basket-count">1</div>
                    <span class = "product_basket-plus">+</span>
                </div>

                <div class="product_action">
                    <button class="custom-btn--blue">Купить</button>
                    <button class="custom-btn">в избранное</button>
                </div>
               <div class = "product__add">

               </div>
                <div class="product__text">
                    <p><?php echo $product[3]?>
                    </p>
                </div>
                <div class="product__share">
                    <span class="product__share-title">поделиться:</span>
                    <div class="product__share-list">
                        <a href="#" class = "product__share-item">
                            <img src="http://it20/img/5.png" alt="" srcset="" width="7px" height="10px">
                        </a>

                        <a href="#" class = "product__share-item">
                            <img src="http://it20/img/6.png" alt="" srcset="" width="13px" height="11px">
                        </a>
                        <a href="#" class = "product__share-item">
                            <img src="http://it20/img/7.png" alt="" srcset="" width="5px" height="12px">
                        </a>
                        <a href="#" class = "product__share-item">
                            <img src="http://it20/img/8.png" alt="" srcset="" width="11px" height="10px">
                        </a>
                        <span class = "product__share-more">123</span>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
    <script src="http://it20/js/jquery-3.6.0.min.js"></script>
    <script src="http://it20/js/zebra_dialog.js"></script>
    <script>
        let count = $(".product_basket-count").text();
        $(".product_basket-minus").css("color", "#d9d9d9");
        
        $(".product__img-card").mouseover(function() {
            let src = $(this).attr("src");
            if(src == "img/9.png"){
                src = "img/3.png"
                $(".product__preview-item").attr("src", src);
            } else {
                $(".product__preview-item").attr("src", src);
            }
        })
        $(".product_basket-minus").click(function(){
            if(count == 1){
                $(".product_basket-count").text(count);
            }else {
                count--;
                $(".product_basket-count").text(count);
                if(count == 1){
                    $(".product_basket-minus").css("color", "#d9d9d9");
                }
            }   
        })
        $(".product_basket-plus").click(function(){
            count++;
            $(".product_basket-count").text(count);
            $(".product_basket-minus").css("color", "#000000");
        })
        $(".custom-btn--blue").click(function(){
            if(count == 1){
                $.Zebra_Dialog('В корзину добавлен '+count+' товар');
            } else if (count >= 2 && count < 5 ){
                $.Zebra_Dialog('В корзину добавленно '+count+' товара');
            } else {
                $.Zebra_Dialog('В корзину добавленно '+count+' товаров');
            }
            count = 1;
            $(".product_basket-count").text(count);
        })
    </script>
    
</body>
</html>