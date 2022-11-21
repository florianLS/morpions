$(document).ready(function () {

    let count = 0;
    let $imgPathCross = "./public/img/x.png";
    let $imgPathCircle = "./public/img/circle.png";
    $("#game td").on("click", function () {
        let $case = $(this).data("case");
        $.post("./admin/Admin.php", { case: $case })
            .done(function (data) {
                var result = Object.values(JSON.parse(data));
                if (result[0] === 0) {
                    setNewMoprions($case);
                }
            });
    })

    function setNewMoprions($case) {
        let currentCase = document.getElementById("case-" + $case);
        let img = document.createElement("img");
        if (count % 2 == 0) {
            img.src = $imgPathCross;
        }
        else {
            img.src = $imgPathCircle;
        }
        currentCase.append(img);
        count++;

        verifyEndGame();
    }

    function verifyEndGame() {
        $.post("./admin/Admin.php", { verify: "verify" })
            .done(function (data) {
                var result = Object.values(JSON.parse(data));
                var linesCross = "";
                var linesCircle = "";
                result.forEach(function (currentCase) {
                    switch (currentCase.id) {
                        case 1:
                            if (currentCase.state === 1) {
                                linesCross = "1";
                            }
                            else if (currentCase.state === 2) {
                                linesCircle = "1";
                            }
                            break;
                        case 2:
                            if (currentCase.state === 1) {
                                linesCross += "2";
                            }
                            else if (currentCase.state === 2) {
                                linesCircle += "2";
                            }
                            break;
                        case 3:
                            if (currentCase.state === 1) {
                                linesCross += "3";
                            }
                            else if (currentCase.state === 2) {
                                linesCircle += "3";
                            }
                            break;
                        case 4:
                            if (currentCase.state === 1) {
                                linesCross += "4";
                            }
                            else if (currentCase.state === 2) {
                                linesCircle += "4";
                            }
                            break;
                        case 5:
                            if (currentCase.state === 1) {
                                linesCross += "5";
                            }
                            else if (currentCase.state === 2) {
                                linesCircle += "5";
                            }
                            break;
                        case 6:
                            if (currentCase.state === 1) {
                                linesCross += "6";
                            }
                            else if (currentCase.state === 2) {
                                linesCircle += "6";
                            }
                            break;
                        case 7:
                            if (currentCase.state === 1) {
                                linesCross += "7";
                            }
                            else if (currentCase.state === 2) {
                                linesCircle += "7";
                            }
                            break;
                        case 8:
                            if (currentCase.state === 1) {
                                linesCross += "8";
                            }
                            else if (currentCase.state === 2) {
                                linesCircle += "8";
                            }
                            break;
                        case 9:
                            if (currentCase.state === 1) {
                                linesCross += "9";
                            }
                            else if (currentCase.state === 2) {
                                linesCircle += "9";
                            }
                            break;
                    }
                });
                if (
                    linesCross.includes("1") && linesCross.includes("2") && linesCross.includes("3") ||
                    linesCross.includes("4") && linesCross.includes("5") && linesCross.includes("6") ||
                    linesCross.includes("7") && linesCross.includes("8") && linesCross.includes("9") ||
                    linesCross.includes("1") && linesCross.includes("5") && linesCross.includes("9") ||
                    linesCross.includes("3") && linesCross.includes("5") && linesCross.includes("7") ||
                    linesCross.includes("1") && linesCross.includes("4") && linesCross.includes("7") ||
                    linesCross.includes("2") && linesCross.includes("5") && linesCross.includes("8") ||
                    linesCross.includes("3") && linesCross.includes("6") && linesCross.includes("9")
                ) {
                    let $winPlayer = "1";
                    endGame($winPlayer);
                }
                else if (
                    linesCircle.includes("1") && linesCircle.includes("2") && linesCircle.includes("3") ||
                    linesCircle.includes("4") && linesCircle.includes("5") && linesCircle.includes("6") ||
                    linesCircle.includes("7") && linesCircle.includes("8") && linesCircle.includes("9") ||
                    linesCircle.includes("1") && linesCircle.includes("5") && linesCircle.includes("9") ||
                    linesCircle.includes("3") && linesCircle.includes("5") && linesCircle.includes("7") ||
                    linesCircle.includes("1") && linesCircle.includes("4") && linesCircle.includes("7") ||
                    linesCircle.includes("2") && linesCircle.includes("5") && linesCircle.includes("8") ||
                    linesCircle.includes("3") && linesCircle.includes("6") && linesCircle.includes("9")
                ) {
                    let $winPlayer = "2";
                    endGame($winPlayer);
                }

            });
    }

    function endGame($player) {
        $.post("./admin/Admin.php", { end: "end" })
            .done(function (data) {
                let message = "Bravo au joueur " + $player + " ! Vous avez gagné la partie !";
                let success = document.getElementById("success");
                let p = document.createElement("p");
                p.append(message);
                success.append(p);
                success.style.display = "flex";
            });
    }

});