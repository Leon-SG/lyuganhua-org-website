import type { TimelineEvent } from "./types";

export const timeline: TimelineEvent[] = [
  {
    id: "birth-early",
    year: 1950,
    title: { en: "Birth and family background", "zh-hant": "\u51FA\u751F\u8207\u5BB6\u5EAD\u80CC\u666F", "zh-hans": "\u51FA\u751F\u4E0E\u5BB6\u5EAD\u80CC\u666F" },
    description: { en: "Born into a family with a tradition of service and learning. Early environment shaped a lifelong commitment to helping others. (Placeholder)", "zh-hant": "\u751F\u65BC\u670D\u52D9\u8207\u5B78\u8853\u50B3\u7D71\u4E4B\u5BB6\u3002\u65E9\u5E74\u74B0\u5883\u585E\u9020\u4E86\u7562\u751F\u52A9\u4EBA\u7684\u4FE1\u5FF5\u3002\uFF08\u5360\u4F4D\uFF09", "zh-hans": "\u751F\u4E8E\u670D\u52A1\u4E0E\u5B66\u672F\u4F20\u7EDF\u4E4B\u5BB6\u3002\u65E9\u5E74\u73AF\u5883\u5851\u9020\u4E86\u6BD5\u751F\u52A9\u4EBA\u7684\u4FE1\u5FF5\u3002\uFF08\u5360\u4F4D\uFF09" }
  },
  {
    id: "early-life",
    year: 1955,
    title: { en: "Early life and formative years", "zh-hant": "\u65E9\u5E74\u751F\u6D3B\u8207\u6210\u9577", "zh-hans": "\u65E9\u5E74\u751F\u6D3B\u4E0E\u6210\u957F" },
    description: { en: "Childhood marked by curiosity and diligence. Developed an early interest in science and the natural world. (Placeholder)", "zh-hant": "\u7AE5\u5E74\u4EE5\u597D\u5947\u5FC3\u8207\u52E4\u594B\u70BA\u7279\u9EDE\uFF0C\u65E9\u5E74\u5373\u5C0D\u79D1\u5B78\u8207\u81EA\u7136\u7522\u751F\u6FC3\u539A\u8208\u8DA3\u3002\uFF08\u5360\u4F4D\uFF09", "zh-hans": "\u7AE5\u5E74\u4EE5\u597D\u5947\u5FC3\u4E0E\u52E4\u594B\u4E3A\u7279\u70B9\uFF0C\u65E9\u5E74\u5373\u5BF9\u79D1\u5B66\u4E0E\u81EA\u7136\u4EA7\u751F\u6D53\u539A\u5174\u8DA3\u3002\uFF08\u5360\u4F4D\uFF09" }
  },
  {
    id: "education-1960s",
    year: 1968,
    title: { en: "Secondary and higher education", "zh-hant": "\u4E2D\u5B78\u8207\u9AD8\u7B49\u6559\u80B2", "zh-hans": "\u4E2D\u5B66\u4E0E\u9AD8\u7B49\u6559\u80B2" },
    description: { en: "Excelled academically, gaining admission to a prestigious medical program. Began the path toward a career in medicine. (Placeholder)", "zh-hant": "\u5B78\u696D\u512A\u7570\uFF0C\u9032\u5165\u77E5\u540D\u91AB\u5B78\u9662\u6821\u3002\u958B\u555F\u91AB\u5B78\u8077\u696D\u751F\u6DAF\u4E4B\u8DEF\u3002\uFF08\u5360\u4F4D\uFF09", "zh-hans": "\u5B66\u4E1A\u4F18\u5F02\uFF0C\u8FDB\u5165\u77E5\u540D\u533B\u5B66\u9662\u6821\u3002\u5F00\u542F\u533B\u5B66\u804C\u4E1A\u751F\u6DAF\u4E4B\u8DEF\u3002\uFF08\u5360\u4F4D\uFF09" }
  },
  {
    id: "medical-degree",
    year: 1974,
    title: { en: "Medical degree and early residency", "zh-hant": "\u91AB\u5B78\u5B78\u4F4D\u8207\u4F4F\u9662\u91AB\u5E2B\u958B\u59CB", "zh-hans": "\u533B\u5B66\u5B66\u4F4D\u4E0E\u4F4F\u9662\u533B\u5E08\u5F00\u59CB" },
    description: { en: "Completed medical degree with honors. Entered residency training, beginning hands-on patient care. (Placeholder)", "zh-hant": "\u4EE5\u512A\u7570\u6210\u7E3E\u53D6\u5F97\u91AB\u5B78\u5B78\u4F4D\uFF0C\u9032\u5165\u4F4F\u9662\u91AB\u5E2B\u57F9\u8A13\uFF0C\u958B\u59CB\u81E8\u5E8A\u60A3\u8005\u7167\u8B77\u3002\uFF08\u5360\u4F4D\uFF09", "zh-hans": "\u4EE5\u4F18\u5F02\u6210\u7EE9\u53D6\u5F97\u533B\u5B66\u5B66\u4F4D\uFF0C\u8FDB\u5165\u4F4F\u9662\u533B\u5E08\u57F9\u8BAD\uFF0C\u5F00\u59CB\u4E34\u5E8A\u60A3\u8005\u7167\u62A4\u3002\uFF08\u5360\u4F4D\uFF09" }
  },
  {
    id: "career-start-1970s",
    year: 1978,
    title: { en: "Early career appointments", "zh-hant": "\u65E9\u671F\u8077\u696D\u751F\u6DAF", "zh-hans": "\u65E9\u671F\u804C\u4E1A\u751F\u6DAF" },
    description: { en: "First attending physician appointment. Quickly gained recognition for clinical acumen and compassionate patient care. (Placeholder)", "zh-hant": "\u9996\u6B21\u64D4\u4EFB\u4E3B\u6CBB\u91AB\u5E2B\uFF0C\u5F88\u5FEB\u56E0\u81E8\u5E8A\u6566\u92B3\u548C\u4EC1\u5FC3\u7167\u8B77\u800C\u7372\u5F97\u8A8D\u53EF\u3002\uFF08\u5360\u4F4D\uFF09", "zh-hans": "\u9996\u6B21\u62C5\u4EFB\u4E3B\u6CBB\u533B\u5E08\uFF0C\u5F88\u5FEB\u56E0\u4E34\u5E8A\u654F\u9510\u548C\u4EC1\u5FC3\u7167\u62A4\u800C\u83B7\u5F97\u8BA4\u53EF\u3002\uFF08\u5360\u4F4D\uFF09" }
  },
  {
    id: "clinical-teaching",
    year: 1988,
    title: { en: "Clinical practice and teaching", "zh-hant": "\u81E8\u5E8A\u5BE6\u8E10\u8207\u6559\u5B78", "zh-hans": "\u4E34\u5E8A\u5B9E\u8DF5\u4E0E\u6559\u5B66" },
    description: { en: "Established a reputation as both an outstanding clinician and an inspiring educator. Mentored dozens of medical students and residents. (Placeholder)", "zh-hant": "\u5728\u81E8\u5E8A\u548C\u6559\u5B78\u5169\u65B9\u9762\u5747\u5EFA\u7ACB\u5353\u8D8A\u8072\u8B7D\uFF0C\u6307\u5C0E\u7D30\u591A\u91AB\u5B78\u751F\u548C\u4F4F\u9662\u91AB\u5E2B\u3002\uFF08\u5360\u4F4D\uFF09", "zh-hans": "\u5728\u4E34\u5E8A\u548C\u6559\u5B66\u4E24\u65B9\u9762\u5747\u5EFA\u7ACB\u5353\u8D8A\u58F0\u8A89\uFF0C\u6307\u5BFC\u6570\u5341\u540D\u533B\u5B66\u751F\u548C\u4F4F\u9662\u533B\u5E08\u3002\uFF08\u5360\u4F4D\uFF09" }
  },
  {
    id: "leadership-1990s",
    year: 1996,
    title: { en: "Departmental leadership and service", "zh-hant": "\u90E8\u9580\u9818\u5C0E\u8207\u516C\u5171\u670D\u52D9", "zh-hans": "\u90E8\u95E8\u9886\u5BFC\u4E0E\u516C\u5171\u670D\u52A1" },
    description: { en: "Assumed departmental leadership roles. Advocated for patient-centered policies and quality improvement initiatives. (Placeholder)", "zh-hant": "\u64D4\u4EFB\u90E8\u9580\u9818\u5C0E\u8077\u52D9\uFF0C\u63A8\u52D5\u4EE5\u60A3\u8005\u70BA\u4E2D\u5FC3\u7684\u653F\u7B56\u8207\u8CEA\u91CF\u6539\u9032\u8A08\u756B\u3002\uFF08\u5360\u4F4D\uFF09", "zh-hans": "\u62C5\u4EFB\u90E8\u95E8\u9886\u5BFC\u804C\u52A1\uFF0C\u63A8\u52A8\u4EE5\u60A3\u8005\u4E3A\u4E2D\u5FC3\u7684\u653F\u7B56\u4E0E\u8D28\u91CF\u6539\u8FDB\u8BA1\u5212\u3002\uFF08\u5360\u4F4D\uFF09" }
  },
  {
    id: "research-publications",
    year: 2005,
    title: { en: "Research and publications", "zh-hant": "\u7814\u7A76\u8207\u51FA\u7248", "zh-hans": "\u7814\u7A76\u4E0E\u51FA\u7248" },
    description: { en: "Published extensively on patient-centered care, medical ethics, and integrative approaches. Work cited in international journals. (Placeholder)", "zh-hant": "\u5728\u4EE5\u60A3\u8005\u70BA\u4E2D\u5FC3\u7684\u7167\u8B77\u3001\u91AB\u5B78\u502B\u7406\u548C\u6574\u5408\u91AB\u5B78\u7B49\u9818\u57DF\u767C\u8868\u5927\u91CF\u8AD6\u6587\u3002\uFF08\u5360\u4F4D\uFF09", "zh-hans": "\u5728\u4EE5\u60A3\u8005\u4E3A\u4E2D\u5FC3\u7684\u7167\u62A4\u3001\u533B\u5B66\u4F26\u7406\u548C\u6574\u5408\u533B\u5B66\u7B49\u9886\u57DF\u53D1\u8868\u5927\u91CF\u8BBA\u6587\u3002\uFF08\u5360\u4F4D\uFF09" }
  },
  {
    id: "international-exchange",
    year: 2010,
    title: { en: "International medical exchange", "zh-hant": "\u570B\u969B\u91AB\u5B78\u4EA4\u6D41", "zh-hans": "\u56FD\u9645\u533B\u5B66\u4EA4\u6D41" },
    description: { en: "Led and participated in international medical exchange programs, bridging Eastern and Western medical practices. (Placeholder)", "zh-hant": "\u4E3B\u5C0E\u548C\u53C3\u8207\u570B\u969B\u91AB\u5B78\u4EA4\u6D41\u8A08\u756B\uFF0C\u67B6\u8D77\u6771\u897F\u65B9\u91AB\u5B78\u5BE6\u8E10\u7684\u6A4B\u6A11\u3002\uFF08\u5360\u4F4D\uFF09", "zh-hans": "\u4E3B\u5BFC\u548C\u53C2\u4E0E\u56FD\u9645\u533B\u5B66\u4EA4\u6D41\u8BA1\u5212\uFF0C\u67B6\u8D77\u4E1C\u897F\u65B9\u533B\u5B66\u5B9E\u8DF5\u7684\u6865\u6881\u3002\uFF08\u5360\u4F4D\uFF09" }
  },
  {
    id: "community-2010s",
    year: 2014,
    title: { en: "Community health and mentorship", "zh-hant": "\u793E\u5340\u5065\u5EB7\u8207\u6559\u5C0E", "zh-hans": "\u793E\u533A\u5065\u5EB7\u4E0E\u6559\u5BFC" },
    description: { en: "Expanded outreach to underserved communities. Established mentorship programs connecting senior physicians with young trainees. (Placeholder)", "zh-hant": "\u64F4\u5927\u5C0D\u6B20\u7F3A\u670D\u52D9\u793E\u5340\u7684\u670D\u52D9\uFF0C\u5EFA\u7ACB\u8CC7\u6DF1\u91AB\u5E2B\u8207\u5E74\u8F15\u5B78\u54E1\u7684\u5E2B\u5F92\u8A08\u756B\u3002\uFF08\u5360\u4F4D\uFF09", "zh-hans": "\u6269\u5927\u5BF9\u7F3A\u4E4F\u670D\u52A1\u793E\u533A\u7684\u670D\u52A1\uFF0C\u5EFA\u7ACB\u8D44\u6DF1\u533B\u5E08\u4E0E\u5E74\u8F7B\u5B66\u5458\u7684\u5E08\u5F92\u8BA1\u5212\u3002\uFF08\u5360\u4F4D\uFF09" }
  },
  {
    id: "honors-awards",
    year: 2019,
    title: { en: "Honors and recognition", "zh-hant": "\u69AE\u8B7D\u8207\u8868\u5F70", "zh-hans": "\u8363\u8A89\u4E0E\u8868\u5F70" },
    description: { en: "Received recognition for lifetime contributions to medical education and patient care. Honored by peers and professional organizations. (Placeholder)", "zh-hant": "\u56E0\u7562\u751F\u5C0D\u91AB\u5B78\u6559\u80B2\u548C\u60A3\u8005\u7167\u8B77\u7684\u8CA2\u737B\u800C\u7372\u5F97\u8868\u5F70\u3002\uFF08\u5360\u4F4D\uFF09", "zh-hans": "\u56E0\u6BD5\u751F\u5BF9\u533B\u5B66\u6559\u80B2\u548C\u60A3\u8005\u7167\u62A4\u7684\u8D21\u732E\u800C\u83B7\u5F97\u8868\u5F70\u3002\uFF08\u5360\u4F4D\uFF09" }
  },
  {
    id: "legacy-2020s",
    year: 2023,
    title: { en: "Legacy and remembrance", "zh-hant": "\u907A\u6FA4\u8207\u8FFD\u601D", "zh-hans": "\u9057\u6CFD\u4E0E\u8FFD\u601D" },
    description: { en: "Foundation established to preserve legacy. Projects launched to collect oral histories, maintain archives, and support future medical professionals. (Placeholder)", "zh-hant": "\u57FA\u91D1\u6703\u6210\u7ACB\u4EE5\u4FDD\u5B58\u907A\u6FA4\u3002\u555F\u52D5\u53E3\u8FF0\u6B77\u53F2\u5F81\u96C6\u3001\u6A94\u6848\u7DAD\u8B77\u548C\u652F\u6301\u672A\u4F86\u91AB\u5B78\u4EBA\u624D\u7B49\u8A08\u756B\u3002\uFF08\u5360\u4F4D\uFF09", "zh-hans": "\u57FA\u91D1\u4F1A\u6210\u7ACB\u4EE5\u4FDD\u5B58\u9057\u6CFD\u3002\u542F\u52A8\u53E3\u8FF0\u5386\u53F2\u5F81\u96C6\u3001\u6863\u6848\u7EF4\u62A4\u548C\u652F\u6301\u672A\u6765\u533B\u5B66\u4EBA\u624D\u7B49\u8BA1\u5212\u3002\uFF08\u5360\u4F4D\uFF09" }
  }
];
