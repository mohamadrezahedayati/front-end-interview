<template>
    <div class="container-fluid h-100">
        <div class="row justify-content-center h-100 align-content-center">   
            <div class="col-sm-10 col-sm-offset-2 text-center">
                <h2 class="mb-4">
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
                    <div v-for="(question,index) in Questions" :key="question.index" class="quiz" v-show="qIsActive(index)">
                        <div class="question">
                            <h3><span class="label label-warning" id="qid">{{index + 1}}</span>
                                <span id="question" v-html="question.qTitle" class="ml-1"></span>
                            </h3>
                        </div>
                        <ul class="list-unstyled">
                            <li v-for="(option) in question.qOptions" :key="option.index" @click="checkAnswer(option,$event.target)">
                                <label for="f-option" class="element-animation">{{option.optionText}}</label>
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
            <div class="col-sm-10 col-sm-offset-2 text-center">
                <div class="containerBtn d-flex align-items-center justify-content-between mt-3">
                    <div>
                        <!-- <button class="btn prev-btn text-white" @click="previousQusetion">previous</button> -->
                    </div>
                    <div class="showResult">
                        <div class="d-flex">
                            <div>
                                <span>correct : </span>
                                <span>{{this.AnswerGivenCorrectly}}</span>
                            </div>
                            <div class="ml-3">
                                <span>incorrect : </span>
                                <span>{{this.AnswerGivenInCorrectly}}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <!-- <button class="btn next-btn text-white" @click="nextQusetion">next</button> -->
                    </div>
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
    data() {
        return {
            qWichActive:0,
            qTotal:10,
            AnswerGivenCorrectly:0,
            AnswerGivenInCorrectly:0,
            Questions:[
                {
                    qNumber:0,
                    qTitle:"Which property is used to change the FONT COLOR of element's text?",
                    qOptions:[
                        {
                            optionText:"font-color",
                            answer:false
                        },
                        {
                            optionText:"text-color",
                            answer:false
                        },
                        {
                            optionText:"color",
                            answer:true
                        },
                        {
                            optionText:"background-color",
                            answer:false    
                        },
                    ]
                },
                {
                    qNumber:1,
                    qTitle:"Is it allowed to use negative values for margin property ?",
                    qOptions:[
                        {
                            optionText:"yes",
                            answer:true
                        },
                        {
                            optionText:"no",
                            answer:false
                        },
                    ]
                },
                {
                    qNumber:2,
                    qTitle:"<div>what is the value of left margin for the html element?</div> <img src='/img/css-intern.jpg' style='width: 230px;'> ",
                    qOptions:[
                        {
                            optionText:"12px",
                            answer:true
                        },
                        {
                            optionText:"24px",
                            answer:false
                        },
                        {
                            optionText:"36px",
                            answer:false
                        },
                        {
                            optionText:"48px",
                            answer:false
                        },
                    ]
                },
                {
                    qNumber:3,
                    qTitle:"what is the value of 1vh if the viewport is 1000px wide and 800px high ? ",
                    qOptions:[
                        {
                            optionText:"8px",
                            answer:true
                        },
                        {
                            optionText:"100px",
                            answer:false
                        },
                        {
                            optionText:"80px",
                            answer:false
                        },
                        {
                            optionText:"10px",
                            answer:false
                        },
                    ]
                },
                {
                    qNumber:4,
                    qTitle:"how to insert a comment in a css file ?",
                    qOptions:[
                        {
                            optionText:"// comment //",
                            answer:false
                        },
                        {
                            optionText:">> comment <<",
                            answer:false
                        },
                        {
                            optionText:"/* comment */",
                            answer:true
                        },
                        {
                            optionText:"// comment ",
                            answer:false
                        },
                    ]
                },
            ]
        }
    },
    methods: {
        qIsActive(questionNumber){
            if(questionNumber == this.qWichActive)
                return true
            else
                return false
        },  
        nextQusetion(){
            this.qWichActive = this.qWichActive + 1;
        },
        previousQusetion(){
            this.qWichActive = this.qWichActive - 1;
        },
        checkAnswer(option,element){
            if(option.answer){
                element.classList.add('correct')
                this.AnswerGivenCorrectly = this.AnswerGivenCorrectly + 1
            }else{
                element.classList.add('incorrect')
                this.AnswerGivenInCorrectly = this.AnswerGivenInCorrectly+1
            }
            setTimeout(() => {
                this.nextQusetion();
            }, 1200);
        },
    },
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
        height: 70px;
        border-bottom: 1px solid #111111;
    }

    ul li label {
        display: block;
        position: relative;
        font-weight: 300;
        font-size: 1.15em;
        padding: 20px 50px;
        height: auto;
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
        height: 38px;
        width: 38px;
        top: 50%;
        left: 20px;
        transform: translate(-50%, -50%);
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
        top: -5.8px;
        left: 3.2px;
        margin: auto;
        transition: background 0.25s linear;
        -webkit-transition: background 0.25s linear;
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

    ul {
        margin: 0 auto;
    }

    .ink {
        display: inline;
        position: absolute;
        background: #75ba48;
        border-radius: 100%;
        transform: scale(0);
    }

    .ink.animate {
        animation: ripple 0.65s linear;
    }

    @keyframes ripple {

        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }

    .next-btn,.prev-btn{
        background-color: #75ba48 !important;
    }
    
    .incorrect{
        color: #c73232 !important;
    }
    
    .correct{
        color: #2ebd2e !important;
    }

    .correct + .check{
        border-color:#2ebd2e !important;
    }

    .correct + .check::before{
        content: "✓";
        color: #2ebd2e !important;
        font-size: 25px;
    }

    .incorrect + .check{
        border-color: #c73232 !important;
    }

    .incorrect + .check::before{
        content: "✗";
        color: #c73232 !important;
        font-size: 25px;
    }

    .question #question {
        font-size: 19px;
    }
</style>