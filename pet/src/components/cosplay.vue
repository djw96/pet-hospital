<template>
    <div class="container" style="margin-left: 10%">
      <div class="page-header">
        <h1>角色扮演<small id="roleName" style="margin-left:20px">前台</small></h1>
      </div>

      <div class="row">
        <div class="col-md-4">

          <div class="left-instruction" id="instruction">

            <div class="panel panel-default">
              <!-- Default panel contents -->
              <div class="panel-heading"><h4>主要职责</h4></div>
              <div class="panel-body" id="roleRes">
                <ul>
                  <li>在科室主任及上级医师领导下开展日常临床工作。</li>
                  <li>积极参加医院及科室组织的各项活动，遵守活动规则和要求。服从工作分配，按要求完成各级领导交办的工作任务。</li>
                  <li>严格遵守医院制定的各项规章制度，认真学习医院和各级主管部门颁发的文件和政策法规。</li>
                  <li>积极参加继续教育活动，努力提高业务水平医学|教育网整理。</li>
                  <li>正确处理工作中出现的问题和矛盾，按照个人利益服从集体利益，逐级上报的原则反映情况。</li>
                  <li>热爱本职工作，遵守职业道德，严格执行医院的各种诊疗常规和技术操作常规及病历书写规范。积极进行医患沟通，主动避免医疗纠纷，杜绝差错事故。</li>
                </ul>
              </div>
            </div>
        </div>
        <div class="col-md-8 tab-content">
          <div class="row" style="margin-bottom:20px;margin-left:10px;float:left;width:100%;">

            <!-- Tab panes -->
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="doctor"></div>
              <div role="tabpanel" class="tab-pane" id="helper"></div>
              <div role="tabpanel" class="tab-pane" id="waiter"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
    margin: 0;
    padding: 0;
  }
  .container {
    font-family:'Microsoft YaHei','微软雅黑';
    margin: 0;
    padding: 0;
  }

  .button span{
    font-size:10px;
    display:block;
  }

  .button span.glyphicon{
    font-size:3em;
  }
  .left-instruction h4{
    text-align: center;
    margin-top: 1em;
  }

</style>
