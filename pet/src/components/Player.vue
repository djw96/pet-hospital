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
                    <el-table stripe :data="yishiData">
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
    </div>
</template>
<script>
export default {
  data() {
    return {
      qiantaiData: [
        {
          function: '接待',
          operation: '接待患者与访客',
          steps: [
            '询问来访目的',
            '若为携带患病宠物就诊，则对患病宠物进行初诊，按协助挂号',
            '若为一般来访则进行登记，安排访问'
          ]
        }
      ],
      zhuliData: [
        {
          function: '静脉注射',
          operation: '把血液、药液、营养液等液体物质直接注射到静脉中',
          steps: [
            '将备齐用物携至床边，核对.',
            '用注射器吸取药液，排尽空气，套上安瓿.',
            '选择合适静脉，以手指探明静脉方向及深浅，在穿刺部位的肢体下垫治疗巾或纸巾，在穿刺部位的上方（近心端）约6cm处扎紧止血带，用2%碘酊消毒皮肤，待干后以70%酒精脱碘.',
            '穿刺时，以左手拇指绷紧静脉下端皮肤，使其固定，右手持注射器，针头斜面向上，针头和皮肤呈35度角，由静脉上方或侧方刺入皮下，再沿静脉方向潜行刺入.',
            '见回血，证实针头已入静脉，可再顺静脉进针少许，松开止血带，嘱病人松拳，固定针头，缓慢注入药液.',
            '注射毕，以消毒棉签按压穿刺点，迅速拔出针头,清理用物.'
          ]
        },
        {
          function: '皮下注射',
          operation: '将药液注入皮下组织',
          steps: [
            '选择注射部位,用2%碘酊和70%酒精进行皮肤消毒，待干.',
            '将药液吸入注射器，排尽空气，左手绷紧皮肤，右手持注射器，食指固定针栓，针头斜面向上和皮肤呈30度到40度角，过瘦者可捏起注射部位，迅速刺入针头的三分之二，放开左手固定针栓，抽吸无回血，即可推注药液.',
            '注射完毕，用消毒棉签轻按针刺处，快速拔针，清理用物.'
          ]
        },
        {
          function: '肌肉注射',
          operation: '将药液注入肌肉',
          steps: [
            '碘伏溶液或5%的聚维酮碘溶液、棉签、1-5毫升注射器(根据龟的大小选用)、0.45号针头。 如果使用碘酒，需要使用酒精脱碘的，碘酒消毒皮肤的使用已经在淘汰中.',
            '用注射器吸入抗生素原液或配制液，推净空气待用.推净空气后注射器里的药液量最好就是所需要的药量.',
            '针头不可停留在皮下和肌肉间，否则注射结束后局部鼓包.',
            '手臂肌注时，用双膝内侧轻轻夹住宠物的背、中部，力度以不能挣脱为宜.'
          ]
        }
      ],
      yishiData: [
        {
          function: '无菌手术',
          operation: '手术',
          steps: [
            '手术人员洗手后，手臂部不准再接触未经消毒的物品。穿无菌手术衣和戴无菌手套后，手术人员肩以上、腰以下、背部及手术台平面以下的无菌单，均应视为是有菌地带.',
            '不准在手术人员的肩以上、腰以下和背后传递手术器械、敷料和用品；坠落手术台边或无菌巾单以外的器械物品等，不准拾回.',
            '术中如发现手套破损或接触到非无菌区，应及时更换；衣袖如碰触有菌物品，应加套无菌袖套或更换手术衣',
            '术中如无菌巾单等覆盖物已湿透或碰触有菌物品时，应加盖无菌巾单',
            '皮肤切口边缘应以大纱布垫或无菌巾遮盖；切开空腔脏器前，先用盐水纱布垫保护好周围组织，以防止或减少内容物溢出污染',
            '手术进行过程中，禁止谈笑；避免向手术区咳嗽或打喷嚏；应随时警惕有异物落人手术区内',
            '参观手术的人员不可贴近手术人员或站在高于手术台的平面，不得随意在室内来回走动；对患有上呼吸道感染或急性化脓性感染者，禁止进入手术室；进人手术室前应先更换手术室的参观衣、鞋，并戴好口罩、帽子，人员尽量少，并予限制'
          ]
        },
        {
            function:'犬股骨骨折接骨板内固定术',
            operation:'骨折处理',
            steps:[
                '器械准备：持骨钳、骨钻、骨凿、切割机、普通接骨板两块（60 mm×6 mm四孔钢板一块、45 mm×6 mm三孔钢板一块）、螺丝钉7颗.',
                '股骨外侧皮肤剃毛、消毒',
                '沿股骨外轮廓的弯曲和平行股二头肌的前缘切开皮肤及皮下组织，于股二头肌前缘分离阔筋膜，向前牵引股外侧肌和阔筋膜，向后牵引股二头肌，显露股骨干，注意避开动静脉.',
                '沿股骨干前后缘分离股直肌和外展肌，使其充分游离，检查患部，清除骨折区的血凝块、挫伤组织和骨碎片，翘起股骨两断端，对准并压迫到正常解剖位置',
                '先在股骨远端钻孔，固定接骨板，然后按同样方法固定股骨近端.',
                '接骨完毕，生理盐水清洗创口，撒布抗生素，间断缝合股二头肌前缘与股外侧直肌后缘，常规缝合股肌膜、皮下组织和皮肤'
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
