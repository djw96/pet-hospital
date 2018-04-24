<template>
  <div>
    <div class="col-md-1"></div>
    <div class="col-md-10">
      <div class="content">
        <div style="width: 100%;height:auto;display: inline-block;border: 1px solid white;position: relative;margin-top:10px;">
          <div style="width: 100%;">
            <div style="width: 80%;margin: 0px auto">
              <div style="width: 100%;height:100px;border: 1px solid #CCC;border-bottom:none;background:#FFF;">
                <div class="middle-top" style="width: 100%;height: 50px;border-bottom: 1px solid #CCC;background:#2D3339; position:relative;">
                  <div class="middle-top-left pull-left" style="height: 100%;padding-left: 20px;;background:#232C31;color:#FFF;">
                    <div class="text-center pull-left progress-left" style="border: 1px solid #A2C69A;background:#FFF;border-radius:10px;line-height:20px;height:20px;margin:15px 0px 15px 0px;font-size: 11px;position:relative;">
                      <div class="progress pull-left" style="background: #609E53;width: 0px;height:18px;position:absolute;left: 0px;"></div>
                      <div class="pro-text" style="left: 0px;color: #609E53;position:absolute;top:0px;width:100%;"> 已完成
                        <span class="progres"></span>
                      </div>
                    </div>
                    <div class="pull-left" style=" width:135px;line-height:20px;height:20px;margin:15px;font-size:15px;">
                      <!--已做答的数量和考题总数-->
                      当前第
                      <span class="questioned"></span>题/共
                      <span class="question_sum"></span>题 </div>
                  </div>
                  <div class="middle-top-right text-center pull-left" style="width:160px; height: 100%;border-left: 1px solid red;position: absolute;right: 0px;">
                    <div class="stop pull-left" style="width: 50px; height: 100%;padding: 10px;">
                      <a href="javascript:void(0);" class="text-center" style="color: #FE6547;">
                        <div class="time-stop glyphicon glyphicon-pause" title="暂停" style="width:30px;height: 30px;line-height:30px; border-radius:15px;border: 1px solid #FE6547;"></div>
                        <div class="time-start glyphicon glyphicon-play" title="开始" style="width:30px;height: 30px;line-height:30px;border-radius:15px;border: 1px solid #FE6547;display:none;"></div>
                      </a>
                    </div>
                    <div class="pull-left" style="width: 100px; height: 100%;padding: 10px 0px 10px 0px;">
                      <div class="time" style="width:100px;height: 30px;line-height:30px; border-radius:15px;font-size:20px;color:#FFF;"> </div>
                    </div>
                  </div>
                </div>
                <div style="width: 100%;height: 50px;font-size:15px;color: #000;line-height: 50px;padding-left: 20px;">
                  <div style="color:#FFF;background: red;width: 22px;height: 22px;border-radius:11px;line-height:22px;font-size:13px; text-align: center;" class="glyphicon glyphicon-map-marker"></div>
                  [单选题] </div>
              </div>
              <div style="width: 100%;height:auto;display: inline-block;border: 1px solid #CCC;border-bottom:1px dashed #CCC;background:#FFF;">
                <div style="width: 100%;height: 90%;padding:20px 20px 0px 20px;">
                  <!--试题区域-->
                  <ul class="list-unstyled question" id="" name="">
                    <li class="question_title"></li>
                  </ul>
                  <!--考题的操作区域-->
                  <div class="operation" style="margin-top: 20px;">
                    <div class="text-left" style="margin-left:20px;font-size: 15px;float: left;line-height: 30px;">
                    </div>
                    <div class="text-right" style="margin-right: 20px;">
                      <div class="form-group" style="color: #FFF;">
                        <button class="btn btn-success" id="submitQuestions">提交试卷</button>
                        <button class="btn btn-info" id="nextQuestion">下一题</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="width: 100%;height:auto;display: inline-block;border: 1px solid #CCC;border-top:none;background:#FFF;">
                <div style="width: 100%;padding:20px;">
                  <div class="panel-default">
                    <div class="panel-heading" id="closeCard" style="color: #DCE4EC;font-size: 15px;display: none;background: none;">
                      <span>收起答题卡</span>
                      <span class="glyphicon glyphicon-chevron-up"></span>
                    </div>
                    <div class="panel-heading" id="openCard" style="font-size: 15px;background: none;">
                      <span>展开答题卡</span>
                      <span class="glyphicon glyphicon-chevron-down"></span>
                    </div>
                    <div id="answerCard" style="display: none;">
                      <div class="panel-body form-horizontal" style="padding: 0px;">
                        <ul class="list-unstyled"></ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var QuestionJosn = [
  {
    questionId: '1',
    questionTitle: '下丘脑与腺垂体之间主要通过下列哪条途径联系？ ',
    questionItems: '神经纤维;神经纤维和门脉系统;垂体门脉系统;垂体束;轴浆运输',
    questionAnswer: 'c'
  },
  {
    questionId: '2',
    questionTitle: '下列激素中，哪一种不是腺垂体分泌的？ ',
    questionItems: '生长素;催产素;黄体生成素;促卵泡激素;催乳素',
    questionAnswer: 'b'
  },
  {
    questionId: '3',
    questionTitle: '关于内分泌系统最佳的描述是 ',
    questionItems:
      '区别于外分泌腺的系统;无导管，分泌物直接进入血液的腺体;分泌物通过体液传递信息的系统;包括内分泌腺和散在的内分泌细胞组成的大系统;全身的内分泌细胞群的总称',
    questionAnswer: 'd'
  },
  {
    questionId: '4',
    questionTitle: '呆小症的发生是由于幼年时 ',
    questionItems:
      '生长素不足;催产素不足;维生素D3不足;甲状腺激素不足;先天性大脑发育不全',
    questionAnswer: 'd'
  },
  {
    questionId: '5',
    questionTitle: '影响降钙素分泌的主要因素是 ',
    questionItems: '血镁浓度;血钙浓度;血磷浓度;血钠浓度;血钾浓度',
    questionAnswer: 'b'
  },
  {
    questionId: '6',
    questionTitle: '关于降钙素的叙述，错误的是 ',
    questionItems:
      '由甲状腺C细胞分泌;属于肽类激素;可降低血钙，升高血磷;主要靶器官是骨;其分泌主要受血钙浓度调节',
    questionAnswer: 'c'
  },
  {
    questionId: '7',
    questionTitle: '激素作用的特异性，下述错误的是 ',
    questionItems:
      '可作用于全身所有组织细胞;有的作用于靶腺;有选择性地作用于某些器官、腺体细胞;有的广泛影响细胞代谢;有的只与胞膜或胞浆受体结合发挥作用',
    questionAnswer: 'a'
  },
  {
    questionId: '8',
    questionTitle: '使皮质醇浓度增加的麻醉药是 ',
    questionItems: '吗啡，巴比妥类;芬太尼;乙醚;恩氟烷',
    questionAnswer: 'd'
  },
  {
    questionId: '9',
    questionTitle: '使皮质醇浓度降低的因素是',
    questionItems: '手术创伤;低血压;术中缺氧;二氧化碳蓄积;低温',
    questionAnswer: 'e'
  },
  {
    questionId: '10',
    questionTitle: '使甲状腺分泌功能降低的因素是 ',
    questionItems: '乙醚;以硫喷妥钠为主的全麻;降温初期;手术;椎管内麻醉',
    questionAnswer: 'b'
  },
  {
    questionId: '11',
    questionTitle: '下丘脑“促垂体区”神经元的功能特点 ',
    questionItems:
      '分泌类固醇激素;不受大脑的控制;将神经信息转变成激素信息;不具典型神经元的作用;无肽能神经元的作用',
    questionAnswer: 'c'
  },
  {
    questionId: '12',
    questionTitle: '下列不属于下丘脑调节肽的是 ',
    questionItems: 'TRH;GnRH;GHRH;ACTH;PRF',
    questionAnswer: 'd'
  },
  {
    questionId: '13',
    questionTitle: '下列哪一种激素为腺垂体所分泌? ',
    questionItems:
      '促甲状腺激素;抗利尿激素;肾上腺皮质激素;生长素释放激素;催乳素释放抑制因子',
    questionAnswer: 'a'
  },
  {
    questionId: '14',
    questionTitle: '下列哪种激素不是由垂体前叶分泌的? ',
    questionItems: '抗利尿激素;生长素;卵泡刺激素;催乳素;促甲状腺激素',
    questionAnswer: 'a'
  },
  {
    questionId: '15',
    questionTitle: '促进机体产热增加的主要激素是 ',
    questionItems: '胰岛素;生长素;甲状腺激素;肾上腺素; 糖皮质激素',
    questionAnswer: 'c'
  },
  {
    questionId: '16',
    questionTitle: '在人类和哺乳动物，对骨和脑的发育尤为重要的激素是 ',
    questionItems: '生长素;糖皮质激素;盐皮质激素;甲状腺激素;甲状旁腺激素',
    questionAnswer: 'd'
  },
  {
    questionId: '17',
    questionTitle: '地方性甲状腺肿的主要发病原因是 ',
    questionItems:
      '由于促甲状腺素分泌过少;甲状腺合成的甲状腺激素过多;食物中缺少钙和蛋白质;食物中缺少酪氨酸;食物中缺少碘',
    questionAnswer: 'e'
  },
  {
    questionId: '18',
    questionTitle: '关于甲状腺激素正确的论述是 ',
    questionItems:
      '属于类固醇激素;合成后贮存于细胞内;T4的活性比T3大;可促进生长和发育过程;幼年缺乏时可导致侏儒症',
    questionAnswer: 'd'
  },
  {
    questionId: '19',
    questionTitle: '人体内储存量最多的激素是 ',
    questionItems:
      '生长素;胰岛素;甲状腺素;促肾上腺皮质激素;肾上腺素和去甲肾上腺素',
    questionAnswer: 'c'
  },
  {
    questionId: '20',
    questionTitle: '对胰岛素的叙述错误的是 ',
    questionItems:
      '由胰岛B细胞分泌;可使血糖浓度下降;迷走神经兴奋可使其分泌减少;血糖浓度升高可促进其分泌;胃肠激素可促进其分泌',
    questionAnswer: 'c'
  }
]
var luyouqi = [
  {
    questionId: '1',
    questionTitle: '下丘脑与腺垂体之间主要通过下列哪条途径联系？ ',
    questionItems: '神经纤维;神经纤维和门脉系统;垂体门脉系统;垂体束;轴浆运输',
    questionAnswer: 'c'
  },
  {
    questionId: '2',
    questionTitle: '下列激素中，哪一种不是腺垂体分泌的？ ',
    questionItems: '生长素;催产素;黄体生成素;促卵泡激素;催乳素',
    questionAnswer: 'b'
  },
  {
    questionId: '3',
    questionTitle: '关于内分泌系统最佳的描述是 ',
    questionItems:
      '区别于外分泌腺的系统;无导管，分泌物直接进入血液的腺体;分泌物通过体液传递信息的系统;包括内分泌腺和散在的内分泌细胞组成的大系统;全身的内分泌细胞群的总称',
    questionAnswer: 'd'
  },
  {
    questionId: '4',
    questionTitle: '呆小症的发生是由于幼年时 ',
    questionItems:
      '生长素不足;催产素不足;维生素D3不足;甲状腺激素不足;先天性大脑发育不全',
    questionAnswer: 'd'
  },
  {
    questionId: '5',
    questionTitle: '影响降钙素分泌的主要因素是 ',
    questionItems: '血镁浓度;血钙浓度;血磷浓度;血钠浓度;血钾浓度',
    questionAnswer: 'b'
  },
  {
    questionId: '6',
    questionTitle: '关于降钙素的叙述，错误的是 ',
    questionItems:
      '由甲状腺C细胞分泌;属于肽类激素;可降低血钙，升高血磷;主要靶器官是骨;其分泌主要受血钙浓度调节',
    questionAnswer: 'c'
  },
  {
    questionId: '7',
    questionTitle: '激素作用的特异性，下述错误的是 ',
    questionItems:
      '可作用于全身所有组织细胞;有的作用于靶腺;有选择性地作用于某些器官、腺体细胞;有的广泛影响细胞代谢;有的只与胞膜或胞浆受体结合发挥作用',
    questionAnswer: 'a'
  },
  {
    questionId: '8',
    questionTitle: '使皮质醇浓度增加的麻醉药是 ',
    questionItems: '吗啡，巴比妥类;芬太尼;乙醚;恩氟烷',
    questionAnswer: 'd'
  },
  {
    questionId: '9',
    questionTitle: '使皮质醇浓度降低的因素是',
    questionItems: '手术创伤;低血压;术中缺氧;二氧化碳蓄积;低温',
    questionAnswer: 'e'
  },
  {
    questionId: '10',
    questionTitle: '使甲状腺分泌功能降低的因素是 ',
    questionItems: '乙醚;以硫喷妥钠为主的全麻;降温初期;手术;椎管内麻醉',
    questionAnswer: 'b'
  },
  {
    questionId: '11',
    questionTitle: '下丘脑“促垂体区”神经元的功能特点 ',
    questionItems:
      '分泌类固醇激素;不受大脑的控制;将神经信息转变成激素信息;不具典型神经元的作用;无肽能神经元的作用',
    questionAnswer: 'c'
  },
  {
    questionId: '12',
    questionTitle: '下列不属于下丘脑调节肽的是 ',
    questionItems: 'TRH;GnRH;GHRH;ACTH;PRF',
    questionAnswer: 'd'
  },
  {
    questionId: '13',
    questionTitle: '下列哪一种激素为腺垂体所分泌? ',
    questionItems:
      '促甲状腺激素;抗利尿激素;肾上腺皮质激素;生长素释放激素;催乳素释放抑制因子',
    questionAnswer: 'a'
  },
  {
    questionId: '14',
    questionTitle: '下列哪种激素不是由垂体前叶分泌的? ',
    questionItems: '抗利尿激素;生长素;卵泡刺激素;催乳素;促甲状腺激素',
    questionAnswer: 'a'
  },
  {
    questionId: '15',
    questionTitle: '促进机体产热增加的主要激素是 ',
    questionItems: '胰岛素;生长素;甲状腺激素;肾上腺素; 糖皮质激素',
    questionAnswer: 'c'
  },
  {
    questionId: '16',
    questionTitle: '在人类和哺乳动物，对骨和脑的发育尤为重要的激素是 ',
    questionItems: '生长素;糖皮质激素;盐皮质激素;甲状腺激素;甲状旁腺激素',
    questionAnswer: 'd'
  },
  {
    questionId: '17',
    questionTitle: '地方性甲状腺肿的主要发病原因是 ',
    questionItems:
      '由于促甲状腺素分泌过少;甲状腺合成的甲状腺激素过多;食物中缺少钙和蛋白质;食物中缺少酪氨酸;食物中缺少碘',
    questionAnswer: 'e'
  },
  {
    questionId: '18',
    questionTitle: '关于甲状腺激素正确的论述是 ',
    questionItems:
      '属于类固醇激素;合成后贮存于细胞内;T4的活性比T3大;可促进生长和发育过程;幼年缺乏时可导致侏儒症',
    questionAnswer: 'd'
  },
  {
    questionId: '19',
    questionTitle: '人体内储存量最多的激素是 ',
    questionItems:
      '生长素;胰岛素;甲状腺素;促肾上腺皮质激素;肾上腺素和去甲肾上腺素',
    questionAnswer: 'c'
  },
  {
    questionId: '20',
    questionTitle: '对胰岛素的叙述错误的是 ',
    questionItems:
      '由胰岛B细胞分泌;可使血糖浓度下降;迷走神经兴奋可使其分泌减少;血糖浓度升高可促进其分泌;胃肠激素可促进其分泌',
    questionAnswer: 'c'
  }
]
var HH = 0 //  时
var mm = 0 //  分
var ss = 0 //  秒
var timeState = true // 时间状态 默认为true 开启时间
var questions = QuestionJosn
var itemList = ['A', 'B', 'C', 'D', 'E', 'F']
var activeQuestion = 0 //当前操作的考题编号
var questioned = 0 //
var checkQues = [] //已做答的题的集合
/*实现计时器*/
var time = setInterval(function() {
  if (timeState) {
    if (HH == 24) HH = 0
    str = ''
    if (++ss == 60) {
      if (++mm == 60) {
        HH++
        mm = 0
      }
      ss = 0
    }
    str += HH < 10 ? '0' + HH : HH
    str += ':'
    str += mm < 10 ? '0' + mm : mm
    str += ':'
    str += ss < 10 ? '0' + ss : ss
    $('.time').text(str)
  } else {
    $('.time').text(str)
  }
}, 1000)

//展示考卷信息
function showQuestion(id) {
  $('.questioned').text(id + 1)
  questioned = (id + 1) / questions.length
  if (activeQuestion != undefined) {
    $('#ques' + activeQuestion)
      .removeClass('question_id')
      .addClass('active_question_id')
  }
  activeQuestion = id
  $('.question')
    .find('.question_info')
    .remove()
  var question = questions[id]
  $('.question_title').html(
    '<strong>第 ' + (id + 1) + ' 题 、</strong>' + question.questionTitle
  )
  var items = question.questionItems.split(';')
  var item = ''
  for (var i = 0; i < items.length; i++) {
    item =
      "<li class='question_info' onclick='clickTrim(this)' id='item" +
      i +
      "'><input type='radio' name='item' value='" +
      itemList[i] +
      "'>&nbsp;" +
      itemList[i] +
      '.' +
      items[i] +
      '</li>'
    $('.question').append(item)
  }
  $('.question').attr('id', 'question' + id)
  $('#ques' + id)
    .removeClass('active_question_id')
    .addClass('question_id')
  for (var i = 0; i < checkQues.length; i++) {
    if (checkQues[i].id == id) {
      $('#' + checkQues[i].item)
        .find('input')
        .prop('checked', 'checked')
      $('#' + checkQues[i].item).addClass('clickTrim')
      $('#ques' + activeQuestion)
        .removeClass('question_id')
        .addClass('clickQue')
    }
  }
  progress()
}

/*答题卡*/
function answerCard() {
  $('.question_sum').text(questions.length)
  for (var i = 0; i < questions.length; i++) {
    var questionId =
      "<li id='ques" +
      i +
      "'onclick='saveQuestionState(" +
      i +
      ")' class='questionId'>" +
      (i + 1) +
      '</li>'
    $('#answerCard ul').append(questionId)
  }
}

/*选中考题*/
var Question
function clickTrim(source) {
  var id = source.id
  $('#' + id)
    .find('input')
    .prop('checked', 'checked')
  $('#' + id).addClass('clickTrim')
  $('#ques' + activeQuestion)
    .removeClass('question_id')
    .addClass('clickQue')
  var ques = 0
  for (var i = 0; i < checkQues.length; i++) {
    if (checkQues[i].id == activeQuestion && checkQues[i].item != id) {
      ques = checkQues[i].id
      checkQues[i].item = id //获取当前考题的选项ID
      checkQues[i].answer = $('#' + id)
        .find('input[name=item]:checked')
        .val() //获取当前考题的选项值
    }
  }
  if (
    checkQues.length == 0 ||
    (Question != activeQuestion && activeQuestion != ques)
  ) {
    var check = {}
    check.id = activeQuestion //获取当前考题的编号
    check.item = id //获取当前考题的选项ID
    check.answer = $('#' + id)
      .find('input[name=item]:checked')
      .val() //获取当前考题的选项值
    checkQues.push(check)
  }
  $('.question_info').each(function() {
    var otherId = $(this).attr('id')
    if (otherId != id) {
      $('#' + otherId)
        .find('input')
        .prop('checked', false)
      $('#' + otherId).removeClass('clickTrim')
    }
  })
  Question = activeQuestion
}

/*设置进度条*/
function progress() {
  var prog = ($('.active_question_id').length + 1) / questions.length
  var pro =
    $('.progress')
      .parent()
      .width() * prog
  $('.progres').text((prog * 100).toString().substr(0, 5) + '%')
  $('.progress').animate(
    {
      width: pro,
      opacity: 0.5
    },
    1000
  )
}

/*保存考题状态 已做答的状态*/
function saveQuestionState(clickId) {
  showQuestion(clickId)
}

$(function() {
  $('.middle-top-left').width(
    $('.middle-top').width() - $('.middle-top-right').width()
  )
  $('.progress-left').width($('.middle-top-left').width() - 200)
  progress()
  answerCard()
  showQuestion(0)
  /*alert(QuestionJosn.length);*/
  /*实现进度条信息加载的动画*/
  var str = ''
  /*开启或者停止时间*/
  $('.time-stop').click(function() {
    timeState = false
    $(this).hide()
    $('.time-start').show()
  })
  $('.time-start').click(function() {
    timeState = true
    $(this).hide()
    $('.time-stop').show()
  })

  /*收藏按钮的切换*/
  $('#unHeart').click(function() {
    $(this).hide()
    $('#heart').show()
  })
  $('#heart').click(function() {
    $(this).hide()
    $('#unHeart').show()
  })

  /*答题卡的切换*/
  $('#openCard').click(function() {
    $('#closeCard').show()
    $('#answerCard').slideDown()
    $(this).hide()
  })
  $('#closeCard').click(function() {
    $('#openCard').show()
    $('#answerCard').slideUp()
    $(this).hide()
  })

  //提交试卷
  $('#submitQuestions').click(function() {
    /*alert(JSON.stringify(checkQues));*/
    alert(
      '已做答:' +
        $('.clickQue').length +
        '道题,还有' +
        (questions.length - $('.clickQue').length) +
        '道题未完成'
    )
  })
  //进入下一题
  $('#nextQuestion').click(function() {
    if (activeQuestion + 1 != questions.length) showQuestion(activeQuestion + 1)
    showQuestion(activeQuestion)
  })
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin: 0;
  padding: 0;
}
.content {
  width: 100%;
}
.top {
  width: 100%;
  border: 1px solid white;
}
.middle {
  width: 100%;
  height: 500px;
  border: 1px solid white;
}
.foot {
  width: 100%;
  height: 300px;
  border: 1px solid white;
}
.middle-top {
  width: 100%;
  height: 260px;
  border: 1px solid white;
}

.li-1 {
  position: absolute;
  height: 430px;
  width: 200px;
  background: #131801;
  z-index: 99;
  opacity: 0.5;
}
.li-2 {
  width: 170px;
  color: #e0e5c5;
  line-height: 50px;
  border-right: 1px solid #646952;
}
.li-nav {
  color: #f4f4f4;
  height: 95px;
  background: transparent;
  border-top: 1px solid #586a50;
}
.li-nav table {
  margin: 10px 0px 0px 20px;
}
.li-nav table th {
  color: #f4f4f4;
  opacity: 1;
}
.li-nav table td a {
  color: #b0c491;
  opacity: 1;
}
.li-nav table td a:hover {
  color: #f4f4f4;
}
.li-nav table td,
th {
  line-height: 30px;
}
.li-nav span {
  color: #5a6652;
  line-height: 95px;
  margin-right: 15px;
}
.li-nav:hover {
  background: #3c4a31;
}

.ul-view {
  list-style: none;
  padding: 20px 0px 0px 15px;
}
.ul-view li {
  color: #f3f5f2;
  opacity: 1;
  line-height: 25px;
}
.ul-view li a {
  color: #b1c496;
  padding: 5px 12px 5px 0px;
}

#tbody button {
  width: 100px;
  height: 100px;
  border: 0px;
}
.middle-top-right a div:hover {
  background: #2d3339;
  color: red;
}
.question {
  line-height: 50px;
}
.question_title {
  height: 50px;
  margin: 0px;
}
.question_info {
  padding-left: 20px;
  border: 1px solid #ccc;
  line-height: 45px;
  height: 45px;
  cursor: pointer;
  margin: 10px 0px 10px 0px;
}
.question_info input {
  line-height: 45px;
}
.clickTrim {
  color: #00bc9b;
  background: #f3f3f3;
  border: 1px solid #909090;
}
.question_info:hover {
  color: #00bc9b;
  background: #f3f3f3;
  border: 1px solid #909090;
}
.operation span {
  cursor: pointer;
}
.operation span:hover {
  cursor: pointer;
}
.questionId {
  color: #dce7f2;
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  margin: 5px;
  float: left;
  cursor: pointer;
  border: 1px solid white;
}
.questionId:hover,
.question_id {
  color: #fff;
  background: #59b59c;
}
.active_question_id {
  color: #59b59c;
  background: none;
  border: 1px solid #ccc;
}
#closeCard,
#openCard {
  width: 130px;
  border: none;
}
#closeCard span,
#openCard span {
  cursor: pointer;
}
#openCard:hover {
  color: #25bb9b;
}
.clickQue {
  color: #00bc9b;
  background: #f3f3f3;
  border: 1px solid #909090;
}
.progress {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
}
</style>
