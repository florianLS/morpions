<?php

session_start();

?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jeu du Morpion</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald">
    <link rel="stylesheet" href="./main.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="./main.js" defer></script>
</head>

<body>
    <div class="container">
        <h1>Jeu du Morpion</h1>
        <form action="#" method="POST">
            <table id="game">
                <tbody>
                    <tr>
                        <td data-case="1" id="case-1"><input type="hidden" class="case"></td>
                        <td data-case="2" id="case-2"><input type="hidden" class="case"></td>
                        <td data-case="3" id="case-3"><input type="hidden" class="case"></td>
                    </tr>
                    <tr>
                        <td data-case="4" id="case-4"><input type="hidden" class="case"></td>
                        <td data-case="5" id="case-5"><input type="hidden" class="case"></td>
                        <td data-case="6" id="case-6"><input type="hidden" class="case"></td>
                    </tr>
                    <tr>
                        <td data-case="7" id="case-7"><input type="hidden" class="case"></td>
                        <td data-case="8" id="case-8"><input type="hidden" class="case"></td>
                        <td data-case="9" id="case-9"><input type="hidden" class="case"></td>
                    </tr>
                </tbody>
            </table>
        </form>
        <form action="./admin/Admin.php" method="POST">
            <input type="submit" value="CLEAR" name="clear" id="clear">
        </form>
        <div id="success">
            <p><a href="javascript:window.location.reload(true)" id="restart">Recommencer</a></p>
        </div>
    </div>
</body>

</html>