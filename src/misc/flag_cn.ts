// istanbul ignore file
// credit: https://github.com/JO2EY/Rules
// flags from @KOP-XIAO: https://github.com/KOP-XIAO/QuantumultX/blob/master/Scripts/resource-parser.js

export const TAIWAN: ReadonlyArray<string> = [
  'TW',
  'TAIWAN',
  '湾仔',
  '台',
  '臺',
  '新北',
  '彰化',
  'CHT',
  'HINET',
]

export const FLAGS = {
  '🏳️‍🌈': ['流量', '时间', '过期', 'BANDWIDTH', 'EXPIRE'],
  '🇸🇱': ['应急', '测试节点'],
  '🇦🇷': ['ARGENTINA', '阿根廷'],
  '🇦🇹': ['AUSTRIA', '奥地利', '维也纳'],
  '🇦🇺': ['AUSTRALIA', '澳大利亚', '澳洲', '墨尔本', '悉尼', 'SYDNEY'],
  '🇧🇪': ['BELGIUM', '比利时'],
  '🇧🇬': ['BULGARIA', '保加利亚'],
  '🇵🇰': ['PAKISTAN', '巴基斯坦'],
  '🇧🇷': ['BRAZIL', '巴西', '圣保罗'],
  '🇨🇦': [
    'CANADA',
    '加拿大',
    'WATERLOO',
    '蒙特利尔',
    '温哥华',
    '楓葉',
    '枫叶',
    '滑铁卢',
    '多伦多',
  ],
  '🇨🇭': ['SWITZERLAND', '瑞士', '苏黎世'],
  '🇩🇪': ['GERMAN', '德', '法兰克福'],
  '🇩🇰': ['DENMARK', '丹麦'],
  '🇪🇸': ['SPAIN', '西班牙'],
  '🇪🇺': ['欧盟', '欧罗巴'],
  '🇫🇮': ['FINLAND', '芬兰', '赫尔辛基'],
  '🇫🇷': ['FR', 'FRANCE', '法国', '法國', '巴黎'],
  '🇬🇧': ['UK', 'ENGLAND', 'UNITED KINGDOM', '英', '伦敦'],
  '🇺🇦': ['UKRAINE', '乌克兰', '基辅'],
  '🇭🇺': ['HUNGARY', '匈牙利'],
  '🇭🇰': ['HK', '港', 'HONGKONG', 'HONG KONG', 'HGC', 'WTT', 'CMI'],
  '🇮🇳': ['INDIA', '印度', '孟买', 'MUMBAI'],
  '🇮🇩': ['INDONESIA', '印尼', '印度尼西亚', '雅加达'],
  '🇮🇪': ['IRELAND', '爱尔兰', '都柏林'],
  '🇮🇱': ['ISRAEL', '以色列'],
  '🇮🇹': ['ITALY', 'NACHASH', '意大利', '米兰', '義大利'],
  '🇰🇵': ['朝鲜'],
  '🇰🇷': ['KR', 'KOREA', 'KOR', '首尔', '韩', '韓'],
  '🇱🇻': ['LATVIA', 'LATVIJA', '拉脱维亚'],
  '🇲🇽️': ['MEXICO', '墨西哥'],
  '🇲🇴': ['MACAU', 'MACAO', '澳门', 'CTM'],
  '🇲🇾': ['MALAYSIA', '马来西亚', '吉隆坡'],
  '🇳🇱': ['NETHERLANDS', '荷兰', '荷蘭', '尼德蘭', '阿姆斯特丹'],
  '🇵🇭': ['PHILIPPINES', '菲律宾'],
  '🇷🇴': ['ROMANIA', '罗马尼亚'],
  '🇷🇺': [
    'RU',
    'RUSSIA',
    '普京',
    '俄罗斯',
    '俄羅斯',
    '伯力',
    '莫斯科',
    '圣彼得堡',
    '西伯利亚',
    '京俄',
    '杭俄',
  ],
  '🇸🇦': ['SAUDI', '沙特'],
  '🇸🇪': ['SWEDEN', '瑞典'],
  '🇸🇬': [
    'SG',
    'SIN',
    'SINGAPORE',
    '新加坡',
    '狮城',
    '沪新',
    '京新',
    '中新',
    '泉新',
    '穗新',
    '深新',
    '杭新',
    '广新',
  ],
  '🇹🇭': ['THAILAND', '泰', '曼谷'],
  '🇹🇷': ['TURKEY', '土耳其', '伊斯坦布尔'],
  '🇺🇸': [
    'US',
    'USA',
    'AMERICA',
    'UNITED STATES',
    'LAX',
    'SFO',
    '美',
    '波特兰',
    '达拉斯',
    '俄勒冈',
    '凤凰城',
    '费利蒙',
    '硅谷',
    '矽谷',
    '拉斯维加斯',
    '洛杉矶',
    '圣何塞',
    '圣克拉拉',
    '西雅图',
    '芝加哥',
    '哥伦布',
    '纽约',
  ],
  '🇻🇳': ['VIETNAM', '越南', '胡志明'],
  '🇿🇦': ['SOUTH AFRICA', '南非'],
  '🇦🇪': ['UNITED ARAB EMIRATES', '阿联酋', '迪拜'],
  '🇯🇵': ['JP', 'JAPAN', '日', '东京', '大阪', '埼玉', 'NTT', 'KDDI'],
  '🇳🇴': ['NORWAY', '挪威'],
  '🇨🇳': [
    ...TAIWAN,
    'CHINA',
    '回国',
    '中国',
    '回國',
    '中國',
    '江苏',
    '北京',
    '上海',
    '广州',
    '深圳',
    '杭州',
    '徐州',
    '青岛',
    '宁波',
    '镇江',
    'BACK',
  ],
} as const