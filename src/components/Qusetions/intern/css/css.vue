<template>
    <div class="container-fluid h-100">
        <div class="row justify-content-center h-100 align-content-center">   
            <div class="col-sm-10 col-sm-offset-2 text-center">
                <h2 class="mb-5">
                    {{this.$route.params.grade}} - {{this.$route.params.skill}}
                </h2>
            </div>
            <div class="col-sm-10 col-sm-offset-2">
                <div class="loader">
                    <!-- <div class="col-xs-3 col-xs-offset-5">
                        <div id="loadbar" style="display: none;">
                            <img src="https://cdn.dribbble.com/users/902865/screenshots/4814970/loading-opaque.gif" alt="Loading" class="center-block loanParamsLoader" style="">
                        </div>  
                    </div> -->
                    <div id="question0" class="quiz">
                        <div class="question">
                            <h3><span class="label label-warning" id="qid">1</span>
                                <span id="question"> How can you add a single line comment in a JavaScript?</span>
                            </h3>
                        </div>
                        <ul>
                            <li>
                                <input type="radio" id="f-option" name="selector" value="1">
                                <label for="f-option" class="element-animation">/*-- comment --*/</label>
                                <div class="check"></div>
                            </li>
                            <li>
                                <input type="radio" id="s-option" name="selector" value="2">
                                <label for="s-option" class="element-animation">comment //</label>
                                <div class="check">
                                    <div class="inside"></div>
                                </div>
                            </li>
                            <li>
                                <input type="radio" id="t-option" name="selector" value="3">
                                <label for="t-option" class="element-animation">comment [ ]</label>
                                <div class="check">
                                    <div class="inside"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="question0" class="quiz">
                        <div class="question">
                            <h3><span class="label label-warning" id="qid">1</span>
                                <span id="question"> How can you add a single line comment in a JavaScript?</span>
                            </h3>
                        </div>
                        <ul>
                            <li>
                                <input type="radio" id="f-option" name="selector" value="1">
                                <label for="f-option" class="element-animation">/*-- comment --*/</label>
                                <div class="check"></div>
                            </li>
                            <li>
                                <input type="radio" id="s-option" name="selector" value="2">
                                <label for="s-option" class="element-animation">comment //</label>
                                <div class="check">
                                    <div class="inside"></div>
                                </div>
                            </li>
                            <li>
                                <input type="radio" id="t-option" name="selector" value="3">
                                <label for="t-option" class="element-animation">comment [ ]</label>
                                <div class="check">
                                    <div class="inside"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="text-muted">
                    <span id="answer"></span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
                <div id="result-of-question" class="pulse animated" style="display: none;">
                    <span id="totalCorrect" class="pull-right"></span>
                    <table class="table table-hover table-responsive">
                        <thead>
                            <tr>
                                <th>Question No.</th>
                                <th>Our answer</th>
                                <th>Your answer</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody id="quizResult"></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
    .image-position {
        position: absolute;
        left: 3%;
    }

    .image-position img {
        width: 70%;
    }

    .center-block {
        width: 100%;
    }

    .margin-top {
        margin-top: 270px;
    }

    .wrap {
        width: 100%;
        height: 100%;
        min-height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
    }

    p.form-title {
        font-family: 'Open Sans', sans-serif;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        color: #FFFFFF;
        margin-top: 5%;
        text-transform: uppercase;
        letter-spacing: 4px;
    }

    form {
        width: 250px;
        margin: 0 auto;
    }

    form.login input[type="text"],
    form.login input[type="password"] {
        width: 100%;
        margin: 0;
        padding: 5px 10px;
        background: #fff;
        border: 0;
        border-bottom: 3px solid #75ba48;
        outline: 0;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: 1px;
        margin-bottom: 10px;
        color: #000;
        outline: 0;

    }

    form.login input[type="submit"] {
        width: 100%;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 500;
        margin-top: 16px;
        outline: 0;
        cursor: pointer;
        letter-spacing: 1px;
    }

    form.login input[type="submit"]:hover {
        transition: background-color 0.5s ease;
    }

    .btn-success {
        color: #fff;
        background-color: #75ba48;
        border-color: #75ba48;
        width: 100%;
        /* font-weight: 600 !important; */
        padding: 7px 10px;
        font-size: 15px !important;
        border-radius: 0px;
        word-spacing: 4px;
        letter-spacing: 1px;

    }

    .btn-success:hover {
        color: #fff !important;
        background-color: #2FC0AE !important;
        border-color: #2FC0AE !important;
    }

    form.login label,
    form.login a {
        font-size: 12px;
        font-weight: 400;
        color: #FFFFFF;
    }

    form.login a {
        transition: color 0.5s ease;
    }

    form.login a:hover {
        color: #2ecc71;
    }

    .pr-wrap {
        width: 100%;
        height: 100%;
        min-height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        display: none;
    }

    .show-pass-reset {
        display: block !important;
    }

    .pass-reset {
        margin: 0 auto;
        width: 250px;
        position: relative;
        margin-top: 22%;
        z-index: 999;
        background: #FFFFFF;
        padding: 20px 15px;
    }

    .pass-reset label {
        font-size: 12px;
        font-weight: 400;
        margin-bottom: 15px;
    }

    .pass-reset input[type="email"] {
        width: 100%;
        margin: 5px 0 0 0;
        padding: 5px 10px;
        background: 0;
        border: 0;
        border-bottom: 1px solid #000000;
        outline: 0;
        font-style: italic;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 1px;
        margin-bottom: 5px;
        color: #000000;
        outline: 0;
    }

    .pass-reset input[type="submit"] {
        width: 100%;
        border: 0;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 500;
        margin-top: 10px;
        outline: 0;
        cursor: pointer;
        letter-spacing: 1px;
    }

    /*----------quiz.css---------------*/


    .loanParamsLoader {
        top: 143px;
        margin: auto;
        position: absolute;
        right: 17%;
        width: 135%;
    }

    .question {
        background: #75ba48;
        padding: 20px;
        color: #fff;
        border-bottom-right-radius: 55px;
        border-top-left-radius: 55px;
    }

    #qid {
        background-color: #ffffff;
        color: #aaaaaa;
        border-radius: 50%;
        height: 33px;
        width: 33px;
        display: inline-block;
        text-align: center;
    }

    .container ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }


    ul li {
        color: #AAAAAA;
        display: block;
        position: relative;
        float: left;
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #111111;
    }

    ul li input[type=radio] {
        position: absolute;
        visibility: hidden;
    }

    ul li label {
        display: block;
        position: relative;
        font-weight: 300;
        font-size: 1.35em;
        padding: 25px 25px 25px 80px;
        margin: 10px auto;
        height: 30px;
        z-index: 9;
        cursor: pointer;
        -webkit-transition: all 0.25s linear;
    }

    ul li:hover label {
        color: #FFFFFF;
    }

    ul li .check {
        display: block;
        position: absolute;
        border: 5px solid #AAAAAA;
        border-radius: 100%;
        height: 30px;
        width: 30px;
        top: 30px;
        left: 20px;
        z-index: 5;
        transition: border .25s linear;
        -webkit-transition: border .25s linear;
    }

    ul li:hover .check {
        border: 5px solid #FFFFFF;
    }

    ul li .check::before {
        display: block;
        position: absolute;
        content: '';
        border-radius: 100%;
        height: 14px;
        width: 14px;
        top: 3.2px;
        left: 3.2px;
        margin: auto;
        transition: background 0.25s linear;
        -webkit-transition: background 0.25s linear;
    }

    input[type=radio]:checked~.check {
        border: 5px solid #00FF00;
    }

    input[type=radio]:checked~.check::before {
        background: #00FF00;
        /*attr('data-background');*/
    }

    input[type=radio]:checked~label {
        color: #00FF00;
    }

    #result-of-question th {
        text-align: center;
        background: #75ba48;
        color: #fff;
        padding: 18px;
        font-size: 18px;
        border: none;
    }

    #result-of-question td {
        text-align: center;
        color: #222;
        background-color: #fff;
        padding: 18px;
        font-size: 15px;
        font-weight: 600;
        border: 1px solid #75ba48;
    }

    #totalCorrect {
        color: #fff;
        background: #75ba48;
        padding: 22px 20px;
        border-radius: 1px;
        font-stretch: expanded;
        font-size: 28px;
        font-weight: bold;
        border-top-right-radius: 25px;
        border-top-left-radius: 25px;
    }

    #alert {
        /* Position fixed */
        position: fixed;
        /* Center it! */
        top: 50%;
        left: 50%;
        margin-top: -50px;
        margin-left: -100px;
    }

    /*----------riple bubble-----------------*/
    ul {
        margin: 0 auto;
    }

    /*.ink styles - the elements which will create the ripple effect. The size and position of these elements will be set by the JS code. Initially these elements will be scaled down to 0% and later animated to large fading circles on user click.*/
    .ink {
        display: inline;
        position: absolute;
        background: #75ba48;
        border-radius: 100%;
        transform: scale(0);
    }

    /*animation effect*/
    .ink.animate {
        animation: ripple 0.65s linear;
    }

    @keyframes ripple {

        /*scale the element to 250% to safely cover the entire link and fade it out*/
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }

</style>