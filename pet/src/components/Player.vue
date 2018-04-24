<template>
    <div class="player">
        <div class="qiantai" v-if="active==='first'">
            <div class="panel panel-default">
                <!-- Default panel contents -->
                <div class="panel-heading">
                    <h4>主要职责</h4>
                </div>
                <div class="panel-body" id="roleRes">
                    <ul>
                        <li>接听电话，接收传真，按要求转接电话或记录信息，确保及时准确。</li>
                        <li>对来访客人做好接待、登记、引导工作，及时通知被访人员。对无关人员、上门推销和无理取闹者应拒之门外。</li>
                        <li>监督员工每日考勤情况。</li>
                        <li>负责公司快递、信件、包裹的收发工作。</li>
                    </ul>
                </div>
                <div class="room">
                    <el-table stripe :data="qiantaiData">
                        <el-table-column label="工作" prop="function"></el-table-column>
                        <el-table-column label="操作" prop="operation"></el-table-column>
                        <el-table-column type="expand">
                            <template slot-scope="props">
                                <div v-for="step in props.row.steps">
                                    <li>{{step}}</li>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
        <div class="zhuli" v-if="active==='second'">
            <div class="panel panel-default">
                <!-- Default panel contents -->
                <div class="panel-heading">
                    <h4>主要职责</h4>
                </div>
                <div class="panel-body">
                    <ul>
                        <li>遵守医院的各项规章制度，积极配合门诊医生的诊疗工作。</li>
                        <li>着装统一，衣帽整洁，维护好医护形象。</li>
                        <li>上班前应做好一切接诊准备，不准在任何场所吃早餐、打闹、嘻笑等。</li>
                        <li>医助与医助之间，医助与医生之间相互团结，互相尊重。医助必须严格服从医助组长的工作安排，认真执行工作标准。不得在背后议论其他医生或医助的不是。</li>
                    </ul>
                </div>
                <div class="room">
                    <el-table stripe :data="zhuliData">
                        <el-table-column label="工作" prop="function"></el-table-column>
                        <el-table-column label="操作" prop="operation"></el-table-column>
                        <el-table-column type="expand">
                            <template slot-scope="props">
                                <div v-for="step in props.row.steps">
                                    <li>{{step}}</li>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
        <div class="yishi" v-if="active==='third'">
            <div class="panel panel-default">
                <!-- Default panel contents -->
                <div class="panel-heading">
                    <h4>主要职责</h4>
                </div>
                <div class="panel-body">
                    <ul>
                        <li>在科室主任及上级医师领导下开展日常临床工作。</li>
                        <li>积极参加医院及科室组织的各项活动，遵守活动规则和要求。服从工作分配，按要求完成各级领导交办的工作任务。</li>
                        <li>严格遵守医院制定的各项规章制度，认真学习医院和各级主管部门颁发的文件和政策法规。</li>
                        <li>积极参加继续教育活动，努力提高业务水平医学</li>
                    </ul>
                </div>
                <div class="room">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      qiantaiData: [
        {
          function: '接待',
          operation:'说白了就是打针',
          steps: ['hello', 'world']
        },
        {
          function: '档案室',
          operation:'说白了就是打针',
          steps: ['包括病例档案的合理保存与数据统计等']
        }
      ],
      zhuliData: [
        {
          function: '静脉注射',
          operation:'说白了就是打针',
          steps: [
            '将备齐用物携至床边，核对，向病人解释，以取得合作.',
            '趁病人不注意扎进去'
          ]
        }
      ]
    }
  },
  props: {
    active: {
      type: String
    }
  }
}
</script>
