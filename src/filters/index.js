getHotName/**
 * Created by leibo on 17/11/13.
 */
//获取日期 格式年-月-日
export const getNewDate = (value) => {
  let reg = /\d+/g
  if (value) {
    var num = value.match(reg)[0];
    var date = new Date(Number(num));
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }

};
//支付状态
export const payStatus = (value) => {
  switch (Number(value)) {
    case 0:
      return '未支付';
    case 1:
      return '已支付';
  }
};
//是否热门
export const getHotName = (value) => {
  switch (Number(value)) {
    case 0:
      return '普通';
    case 1:
      return '热门';
  }
};
//获取状态
export const getStatus = (value) => {
  switch (Number(value)) {
    case 0:
      return '空闲';
    case 1:
      return '锁定';
    default:
      return '使用'
  }
};
//获取启用状态
export const getDelete = (value) => {
  if (Number(value) == 0) {
    return '启用'
  } else {
    return '不启用'
  }
};
//获取入住状态
export const getUseStatus = (value) => {
  switch (Number(value)) {
    case 0:
      return '未入住';
    case 1:
      return '已入住';
    case 2:
      return '已退房';
    default:
      return '未知';
  }
};
export const useStatus = (value) => {
  switch (Number(value)) {
    case 0:
      return '未使用';
    case 1:
      return '已使用';
    case 2:
      return '已离店';
    default:
      return '未知';
  }
};
export const getGrade = (value) => {
  switch (Number(value)) {
    case 0:
      return '差评';
    case 1:
      return '中评';
    case 2:
      return '好评'
    default:
      return '未评级';
  }
};
export const getParkType = (val) => {
  switch (Number(val)) {
    case 0:
      return '用餐';
    case 1:
      return '景点';
    case 2:
      return '酒店';
    case 3:
      return '交通';
    default:
      return '未知';
  }
};
export const getEatType = (val)=>{
  switch (Number(val)) {
    case 0:
      return '早餐';
    case 1:
      return '午餐';
    case 2:
      return '晚餐';
    default:
      return '未知';
  }
};
export const  getOutStatus = (val)=>{
  switch (Number(val)) {
    case 0:
      return '出票中';
    case 1:
      return '出票成功';
    case 2:
      return '出票失败';
    default:
      return '未知';
  }
};
export const getCheck = (val)=>{
  switch (Number(val)) {
    case 0:
      return '审核中';
    case 1:
      return '通过';
    case 2:
      return '未通过';
    default:
      return '未知';
  }
};
export const getLongOut = val=>{
  switch (Number(val)) {
    case 0:
      return '短线';
    case 1:
      return '长线';
    default:
      return '未知';
  }
}

export const getSex = val =>{
  switch (Number(val)) {
    case 0:
      return '男';
    case 1:
      return '女';
    default:
      return '未知';
  }
};

//三证合一
export const getIncludeCert = val=>{
  switch (Number(val)) {
    case 0:
      return '否';
    case 1:
      return '是';
    default:
      return '未知';
  }
}

//审核状态
export const getPass = val=>{
  if(val==null){
    return '未知'
  }
  switch (Number(val)) {
    case 0:
      return '审核中';
    case 1:
      return '审核成功';
    case 2:
      return '审核失败';
    default:
      return '未知';
  }
};
function getNum(num) {
  return num<10?'0'+num:''+num
}
//时间
export const getUseTime = val=>{
  let date = new Date()
  if(!val){
    return date.getFullYear()+'-'+getNum((date.getMonth()+1))+'-'+getNum(date.getDate())+' '+getNum(date.getHours())+':'+getNum(date.getMinutes())+':'+getNum(date.getSeconds())
  }else{
    if(!val.includes('.')){
      return val.replace(/T/,' ')
    }else{
      return val.substring(0,val.indexOf('.')).replace(/T/,' ')
    }
  }
};

//办理状态
export const getDoStatus = val=>{
  switch (Number(val)) {
    case 0:
      return '待审核';
    case 1:
      return '已通过';
    case 2:
      return '未通过';
    default:
      return '未知';
  }
}
//床型
export const getBedType = val=>{
  switch (Number(val)) {
    case 1:
      return '单床';
    case 2:
      return '双床';
    case 3:
      return '三床';
    default:
      return '未知';
  }
};
//早餐类型
export const getBreakfastType = val=>{
  switch (Number(val)) {
    case 0:
      return '无早';
    case 1:
      return '单早';
    case 2:
      return '双早';
    case 3:
      return '三早';
    case 4:
      return '四早';
    default:
      return '未知';
  }
}
//WAFI
export const getWafiType = val=>{
  switch (Number(val)) {
    case 0:
      return '免费WAFI';
    case 1:
      return '免费有线';
    case 2:
      return '收费有线';
    default:
      return '未知';
  }
};
//取消类型
export const getCancelType = val=>{
  switch (Number(val)) {
    case 0:
      return '可取消';
    case 1:
      return '不可取消';
    default:
      return '未知';
  }
};
//房间锁定状态
export const getLockStatus = val=>{
  switch (Number(val)) {
    case 0:
      return '未锁定';
    case 1:
      return '锁定';
    case 2:
      return '已售出';
    default:
      return '未知';
  }
};
//广告申请是否通过
export const getAdApplyPass = val=>{
  switch (Number(val)) {
    case 0:
      return '审核中';
    case 1:
      return '通过';
    case 2:
      return '不通过';
    default:
      return '未知';
  }
};
export const getCarUseStatus = val=>{
  switch (Number(val)) {
    case 0:
      return '未使用';
    case 1:
      return '使用中';
    default:
      return '未知';
  }
};

//证件类型
export const getIDType = val=>{
  switch (Number(val)) {
    case 1:
      return '二代身份证';
    case 2:
      return '护照';
    case 3:
      return '回乡证';
    case 4:
      return '台胞证';
    default:
      return '未知';
  }
}

//微电影系列连载状态
export const getSeriesState = val=>{
  switch (Number(val)) {
    case 0:
      return '连载中';
    case 1:
      return '已完结';
    default:
      return '未知';
  }
};

//微电影系列连载状态
export const getMoneyState = val=>{
  switch (Number(val)) {
    case 0:
      return '未确认';
    case 1:
      return '已确认';
    default:
      return '已取消';
  }
};


//微电影审核表视频类型
export const getFilmType = val=>{
  switch (Number(val)) {
    case 1:
      return '广告';
    case 2:
      return '微电影';
    case 3:
      return '教育';
    case 4:
      return '栏目';
    case 5:
      return '首页大图';
    default:
      return '未知';
  }
};
//支付状态
export const getPayState = val=>{
  switch (Number(val)) {
    case 0:
      return '未支付';
    case 1:
      return '已支付';
    case 2:
      return '已退票';
    default:
      return '未知';
  }
};
