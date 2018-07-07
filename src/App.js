import React, { Component } from 'react';

import ChatBot from 'react-simple-chatbot';
import List from './List';
import Fees from './Fees';

const Steps = [
  {
    id: '-2',
    message: 'السلام عليكم',
    trigger: '-1',
    delay:1000,
  },
  {
    id: '-1',
    message: 'مرحباً بك ، أنا الموظف الذكي',
    trigger: '0',
    delay:1000,
  },
  {
    id: '0',
    message: 'أستطيع أن أساعدك في احتساب رسوم إدارة التخطيط والمساحة في دائرة البلدية والتخطيط في عجمان',
    trigger: 'servicesCatalogue',
    delay:2000,
  },
  {
    id: 'servicesCatalogue',
    message: 'الرجاء الضغط على الخدمة التي تريد أن تستفسر عن رسومها',
    trigger:'servicesList',
    delay:2000,
  },
  {
    id: 'servicesList',
    component:<List 
      options={[
        { value: 1, label: 'التطوير العمراني / مخطط موقع', trigger: 'servicesCat1' },
        { value: 2, label: 'التطوير العمراني / دراسات تخطيطية', trigger: 'servicesCat2' },
        { value: 3, label: 'الخدمات المساحية / تراخيص البناء', trigger: 'servicesCat3' },
        { value: 4, label: 'الخدمات المساحية / اخرى', trigger: 'servicesCat4' },
      ]}
    />,
    asMessage:true,
    replace:true
  },
  {
    id:'servicesCat1', 
    component:<List 
      options={[
        { value: 1, label: 'تغيير نوع استعمال الأراضي', trigger: 'service_1_1' },
        { value: 2, label: 'فرز وتقسيم الأراضي', trigger: 'service_1_2' },
        { value: 3, label: 'إضافة طابق', trigger: 'service_1_3' },
        { value: 4, label: 'إلغاء الارتداد', trigger: 'service_1_4' },
        { value: 5, label: 'إصدار مخطط موقع / سكني خاص', trigger: 'service_1_5' },
        { value: 6, label: 'إصدار مخطط موقع / خدمات عامة', trigger: 'service_1_6' },
        { value: 7, label: 'إصدار مخطط موقع / اخرى', trigger: 'service_1_7' },
        { value: 8, label: 'شهادة لمن يهمه الأمر', trigger: 'service_1_8' },
        { value: 9, label: 'أمر تبديل مخطط موقع أرض', trigger: 'service_1_9' },
        { value: 10, label: 'مخطط الوحدة العقارية لأول مرة', trigger: 'service_1_10' },
        { value: 11, label: 'عودة', trigger: 'servicesList' },
      ]}
    />,
    replace:true,
    asMessage:true,
    delay:500,
  },
  {
    id: 'servicesCat2',
    component:<List 
      options={[
        { value: 1, label: 'إعتماد مخططات لمشاريع عقارية إستثمارية', trigger: 'service_2_1' },
        { value: 2, label: 'دراسة طلب تعديل الإشتراطات المعتمدة لأرض', trigger: 'service_2_2' },
        { value: 3, label: 'البيان التخطيطي لقطعة أرض', trigger: 'service_2_3' },
        { value: 4, label: 'إضافة زوائد تنظيمية', trigger: 'service_2_4' },
        { value: 5, label: 'تحسين وإعادة تخطيط', trigger: 'service_2_5' },
        { value: 6, label: 'عودة', trigger: 'servicesList' },
      ]}
    />,
    asMessage:true,
    replace:true,
    delay:500,
  },
  {
    id: 'servicesCat3',
    component:<List 
      options={[
        { value: 1, label: 'تحديد موقع أرض', trigger: 'service_3_1' },
        { value: 2, label: 'إحداثيات حدود قطعة أرض', trigger: 'service_3_2' },
        { value: 3, label: 'تحديد منسوب أرض', trigger: 'service_3_3' },
        { value: 4, label: 'تدقيق حدود أرض', trigger: 'service_3_4' },
        { value: 5, label: 'تدقيق منسوب جسور أرضية', trigger: 'service_3_5' },
        { value: 5, label: 'تدقيق منسوب بوابة خارجية', trigger: 'service_3_6' },
        { value: 6, label: 'عودة', trigger: 'servicesList' },
      ]}
    />,
    asMessage:true,
    replace:true,
    delay:500,
  },
  {
    id: 'servicesCat4',
    component:<List 
      options={[
      { value: 1, label: 'تثبيت نقطة مرجعية B.M', trigger: 'service_4_1' },
        { value: 2, label: 'تثبيت نقطة مرجعية لمسار مرافق وخدمات تحديد مسار خدمة', trigger: 'service_4_2' },
        { value: 3, label: 'مسح طبوغرافي', trigger: 'service_4_3' },
        { value: 4, label: 'صيانة نقطة مرجعية بسبب حادث', trigger: 'service_4_4' },
        { value: 5, label: 'استبدال نقطة مرجعية بسبب حادث', trigger: 'service_4_5' },
        { value: 6, label: 'تصوير جوي', trigger: 'service_4_6' },
        { value: 7, label: 'اشتراك في خدمة المحطات المرجعية', trigger: 'service_4_7' },
        { value: 8, label: 'عودة', trigger: 'servicesList' },
      ]}
    />,
    asMessage:true,
    replace:true,
    delay:500,
  },
  {
    id: 'service_1_1',
    message:'تغيير نوع استعمال الأراضي : قيمة الرسوم هي 1 ٪ من قيمة الأرض وقت تقديم الطلب .. يتم تحديد قيمة الأرض من خلال تثمين دائرة الأراضي والتنظيم العقاري ..',
    trigger:'service_1_1_',
  },
  {
    id:'service_1_1_',
    message:'أدخل قيمة الأرض المتوقعة',
    trigger:'service_1_1_input'
  },
  {
    id:'service_1_1_input',
    user:true,
    trigger:'service_1_1_result',
    validator: (value) => {
      if (isNaN(value)) {
        return 'الرجاء إدخال رقم باللغة الإنكليزية';
      }
      return true;
    }
  },
  {
    id:'service_1_1_result',
    component:<Fees case={1} />,
    asMessage: true,
    trigger:'anyThingElse'
  },
  {
    id: 'service_1_2',
    message:'فرز وتقسيم أراضي : قيمة الرسوم هي المساحة بالمتر المربع ضرب 1 درهم',
    trigger:'service_1_2_',
  },
  {
    id:'service_1_2_',
    message:'أدخل مساحة الأرض بالمتر المربع',
    trigger:'service_1_2_input'
  },
  {
    id:'service_1_2_input',
    user:true,
    trigger:'service_1_2_result',
    validator: (value) => {
      if (isNaN(value)) {
        return 'الرجاء إدخال رقم باللغة الإنكليزية';
      }
      return true;
    }
  },
  {
    id:'service_1_2_result',
    component:<Fees case={2} />,
    asMessage: true,
    trigger:'anyThingElse'
  },
  {
    id: 'service_1_3',
    message:'إضافة طابق : الرسوم هي 5% من سعر الأرض وقت تقديم الطلب ضرب المساحة الطابقية المستفادة تقسيم إدمالي المساحة الطابقية المصرح بها للأرض قبل الإضافة',
    trigger:'service_1_3_',
  },
  {
    id:'service_1_3_',
    message:'أدخل سعر الأرض',
    trigger:'service_1_3_input_1'
  },
  {
    id:'service_1_3_input_1',
    user:true,
    trigger:'service_1_3__',
    validator: (value) => {
      if (isNaN(value)) {
        return 'الرجاء إدخال رقم باللغة الإنكليزية';
      }
      return true;
    }
  },
  {
    id:'service_1_3__',
    message:'أدخل المساحة الطابقية المستفادة',
    trigger:'service_1_3_input_2'
  },
  {
    id:'service_1_3_input_2',
    user:true,
    trigger:'service_1_3___',
    validator: (value) => {
      if (isNaN(value)) {
        return 'الرجاء إدخال رقم باللغة الإنكليزية';
      }
      return true;
    }
  },
  {
    id:'service_1_3___',
    message:'أدخل المساحة الطابقية المصرح بها للأرض قبل الإضافة',
    trigger:'service_1_3_input_3'
  },
  {
    id:'service_1_3_input_3',
    user:true,
    trigger:'service_1_3_result',
    validator: (value) => {
      if (isNaN(value)) {
        return 'الرجاء إدخال رقم باللغة الإنكليزية';
      }
      return true;
    }
  },
  {
    id:'service_1_3_result',
    component:<Fees case={3} />,
    asMessage: true,
    trigger:'anyThingElse'
  },
  {
    id: 'service_1_4',
    message:'إلغاء الإرتداد : الرسوم هي 5% من سعر الأرض وقت تقديم الطلب ضرب المساحة الطابقية المستفادة تقسيم إدمالي المساحة الطابقية المصرح بها للأرض قبل إلغاء الإرتداد',
    trigger:'service_1_4_',
  },
  {
    id:'service_1_4_',
    message:'أدخل سعر الأرض',
    trigger:'service_1_4_input_1'
  },
  {
    id:'service_1_4_input_1',
    user:true,
    trigger:'service_1_4__',
    validator: (value) => {
      if (isNaN(value)) {
        return 'الرجاء إدخال رقم باللغة الإنكليزية';
      }
      return true;
    }
  },
  {
    id:'service_1_4__',
    message:'أدخل المساحة الطابقية المستفادة',
    trigger:'service_1_4_input_2'
  },
  {
    id:'service_1_4_input_2',
    user:true,
    trigger:'service_1_4___',
    validator: (value) => {
      if (isNaN(value)) {
        return 'الرجاء إدخال رقم باللغة الإنكليزية';
      }
      return true;
    }
  },
  {
    id:'service_1_4___',
    message:'أدخل المساحة الطابقية المصرح بها للأرض قبل إلغاء الإرتداد',
    trigger:'service_1_4_input_3'
  },
  {
    id:'service_1_4_input_3',
    user:true,
    trigger:'service_1_4_result',
    validator: (value) => {
      if (isNaN(value)) {
        return 'الرجاء إدخال رقم باللغة الإنكليزية';
      }
      return true;
    }
  },
  {
    id:'service_1_4_result',
    component:<Fees case={4} />,
    asMessage: true,
    trigger:'anyThingElse'
  },
  {
    id: 'service_1_5',
    message:'إصدار مخطط موقع / سكني خاص : رسوم ثابتة 500 درهم',
    trigger:'anyThingElse',
  },
  {
    id: 'service_1_6',
    message:'إصدار مخطط موقع / خدمات عامة : مجانا',
    trigger:'anyThingElse',
  },
  {
    id: 'service_1_7',
    message:'إصدار مخطط موقع / أخرى : رسوم ثابتة 1000 درهم',
    trigger:'anyThingElse',
  },
  {
    id: 'service_1_8',
    message:'شهادة لمن يهمه الأمر : رسوم ثابتة 100 درهم',
    trigger:'anyThingElse',
  },
  {
    id: 'service_1_9',
    message:'أمر تبديل مخطط موقع لأرض : رسوم ثابتة 1000 درهم',
    trigger:'anyThingElse',
  },
  {
    id: 'service_1_10',
    message:'مخطط الوحدة العقارية لأول مرة : رسوم ثابتة 500 درهم',
    trigger:'anyThingElse',
  },
  {
    id: 'service_2_1',
    message:'إعتماد مخططات لمشاريع عقارية إستثمارية : رسوم ثابتة 2000 درهم',
    trigger:'anyThingElse',
  },
  {
    id: 'service_2_2',
    message:'دراسة طلب تعديل الإشتراطات المعتمدة لأرض : رسوم ثابتة 200 درهم',
    trigger:'anyThingElse',
  },
  {
    id: 'service_2_3',
    message:'البيان التخطيطي لقطعة أرض : رسوم ثابتة 100 درهم',
    trigger:'anyThingElse',
  },
  {
    id: 'service_2_4',
    message:'إضافة زوائد تنظيمية : الرسوم هي قيمة الأرض المضافة المثمنة',
    trigger:'anyThingElse',
  },
  {
    id: 'service_2_5',
    message:'تحسين وإعادة تخطيط : الرسوم هي المساحة ضرب سعر الأرض التقديري ضرب 3% للشوارع الداخلية أو 2% للشوارع الخارجية',
    trigger:'service_2_5_',
  },
  {
    id:'service_2_5_',
    message:'أدخل المساحة',
    trigger:'service_2_5_input_1'
  },
  {
    id:'service_2_5_input_1',
    user:true,
    trigger:'service_2_5__',
    validator: (value) => {
      if (isNaN(value)) {
        return 'الرجاء إدخال رقم باللغة الإنكليزية';
      }
      return true;
    }
  },
  {
    id:'service_2_5__',
    message:'أدخل سعر الأرض التقديري',
    trigger:'service_2_5_input_2'
  },
  {
    id:'service_2_5_input_2',
    user:true,
    trigger:'service_2_5___',
    validator: (value) => {
      if (isNaN(value)) {
        return 'الرجاء إدخال رقم باللغة الإنكليزية';
      }
      return true;
    }
  },
  {
    id:'service_2_5___',
    message:'نوع الشارع',
    trigger:'service_2_5____'
  },
  {
    id:'service_2_5____',
    component:<List 
    options={[
    { value: 1, label: 'داخلي', trigger: 'service_2_5_result_1' },
    { value: 1, label: 'خارجي', trigger: 'service_2_5_result_2' },
    ]}
  />,
  asMessage:true,
  replace:true,
  },
  {
    id:'service_2_5_result_1',
    component:<Fees case={5} />,
    asMessage: true,
    trigger:'anyThingElse'
  },
  {
    id:'service_2_5_result_2',
    component:<Fees case={6} />,
    asMessage: true,
    trigger:'anyThingElse'
  },
  {
    id: 'service_3_1',
    message:'تحديد موقع أرض : رسوم ثابتة 500 درهم',
    trigger:'anyThingElse',
  },
  {
    id: 'service_3_2',
    message:'إحداثيات حدود قطعة أرض : الرسوم هي  300 درهم للنقطة الواحدة',
    trigger:'service_3_2_',
  },
  {
    id:'service_3_2_',
    message:'أدخل عدد النقاط المطلوبة',
    trigger:'service_3_2_input'
  },
  {
    id:'service_3_2_input',
    user:true,
    trigger:'service_3_2_result',
    validator: (value) => {
      if (isNaN(value)) {
        return 'الرجاء إدخال رقم باللغة الإنكليزية';
      }
      return true;
    }
  },
  {
    id:'service_3_2_result',
    component:<Fees case={7} />,
    asMessage: true,
    trigger:'anyThingElse'
  },
  {
    id: 'service_3_3',
    message:'تحديد منسوب أرض : الرسوم هي 1000 درهم للقطعة الواحدة',
    trigger:'service_3_3ـ',
  },
  {
    id:'service_3_3ـ',
    message:'أدخل عدد قطع الأراضي',
    trigger:'service_3_3_input'
  },
  {
    id:'service_3_3_input',
    user:true,
    trigger:'service_3_3_result',
    validator: (value) => {
      if (isNaN(value)) {
        return 'الرجاء إدخال رقم باللغة الإنكليزية';
      }
      return true;
    }
  },
  {
    id:'service_3_3_result',
    component:<Fees case={8} />,
    asMessage: true,
    trigger:'anyThingElse'
  },
  {
    id: 'service_3_4',
    message:'تدقيق حدود أرض : مجانا',
    trigger:'anyThingElse',
  },
  {
    id: 'service_3_5',
    message:'تدقيق منسوب جسور أرضية : مجانا',
    trigger:'anyThingElse',
  },
  {
    id: 'service_3_6',
    message:'تدقيق منسوب بوابة خارجية : مجانا',
    trigger:'anyThingElse',
  },  
  {
    id: 'service_4_1',
    message:'تثبيت نقطة مرجعية B.M : رسوم ثابتة 1000 درهم',
    trigger:'anyThingElse',
  },
  {
    id: 'service_4_2',
    message:'تثبيت نقطة مرجعية لمسار مرافق وخدمات تحديد مسار خدمة : رسوم ثابتة 500 درهم',
    trigger:'anyThingElse',
  },  
  {
    id: 'service_4_3',
    message:'مسح طبوغرافي : الرسوم هي 500 درهم لكل قطعة أرض',
    trigger:'service_4_3_',
  },   
  {
    id:'service_4_3_',
    message:'أدخل عدد قطع الأراضي',
    trigger:'service_4_3_input'
  },
  {
    id:'service_4_3_input',
    user:true,
    trigger:'service_4_3_result',
    validator: (value) => {
      if (isNaN(value)) {
        return 'الرجاء إدخال رقم باللغة الإنكليزية';
      }
      return true;
    }
  },
  {
    id:'service_4_3_result',
    component:<Fees case={9} />,
    asMessage: true,
    trigger:'anyThingElse'
  },
  {
    id: 'service_4_4',
    message:'صيانة نقطة مرجعية بسبب حادث : الرسوم هي 7000 درهم لكل نقطة',
    trigger:'service_4_4_',
  },   
  {
    id:'service_4_4_',
    message:'أدخل عدد النقاط',
    trigger:'service_4_4_input'
  },
  {
    id:'service_4_4_input',
    user:true,
    trigger:'service_4_4_result',
    validator: (value) => {
      if (isNaN(value)) {
        return 'الرجاء إدخال رقم باللغة الإنكليزية';
      }
      return true;
    }
  },
  {
    id:'service_4_4_result',
    component:<Fees case={10} />,
    asMessage: true,
    trigger:'anyThingElse'
  }, 
  {
    id: 'service_4_5',
    message:'استبدال نقطة مرجعية بسبب حادث : الرسوم هي 10000 درهم لكل نقطة',
    trigger:'service_4_5_',
  },   
  {
    id:'service_4_5_',
    message:'أدخل عدد النقاط',
    trigger:'service_4_5_input'
  },
  {
    id:'service_4_5_input',
    user:true,
    trigger:'service_4_5_result',
    validator: (value) => {
      if (isNaN(value)) {
        return 'الرجاء إدخال رقم باللغة الإنكليزية';
      }
      return true;
    }
  },
  {
    id:'service_4_5_result',
    component:<Fees case={11} />,
    asMessage: true,
    trigger:'anyThingElse'
  }, 
  {
    id: 'service_4_6',
    message:'تصوير جوي : الرسوم هي واحد درهم لكل متر مربع',
    trigger:'service_4_6_',
  },   
  {
    id:'service_4_6_',
    message:'أدخل عدد الأمتار المربعة',
    trigger:'service_4_6_input'
  },
  {
    id:'service_4_6_input',
    user:true,
    trigger:'service_4_6_result',
    validator: (value) => {
      if (isNaN(value)) {
        return 'الرجاء إدخال رقم باللغة الإنكليزية';
      }
      return true;
    }
  },
  {
    id:'service_4_6_result',
    component:<Fees case={12} />,
    asMessage: true,
    trigger:'anyThingElse'
  },    
  {
    id: 'service_4_7',
    message:'اشتراك في خدمة المحطات المرجعية : رسوم ثابتة 5000 درهم',
    trigger:'anyThingElse',
  },   
  {
    id:'anyThingElse',
    message:'هل تود الاستفسار عن رسوم أخرى ؟',
    trigger:'anyThingElse',
    delay:1000
  }, 
  {
    id:'anyThingElse',
    message:'هل تود الاستفسار عن رسوم أخرى ؟',
    trigger:'anyThingElseSelection'
  },
  {
    id:'anyThingElseSelection',
    component:<List 
    options={[
      { value: 1, label: 'نعم', trigger: 'servicesCatalogue' },
      { value: 2, label: 'لا', trigger: 'close' },
    ]}
    />,
    asMessage:true,
    replace:true
  },
  {
    id:'close',
    message:'شكراً لك ! مع السلامة 🙂',
    end:true
  }
];

class App extends Component {
  render() {
    return (
        <ChatBot 
        steps={Steps}
        style={{
          height:'100vh'
        }}
        contentStyle={{
          height:'calc(100vh - 100px)',
          overflowY:'scroll'
        }}
        placeholder={'...'}
        width={'100%'}
        headerComponent={
          <div style={{
            fontFamily: 'tahoma',  
            textAlign:'center',
            background:'#6e48aa',
            color:'#fff',
            padding:'10px'
          }}>الموظف الذكي في إدارة التخطيط والمساحة</div>
        }
        bubbleStyle={{
          fontFamily: 'tahoma',
        }}/>
    );
  }
}

export default App;
